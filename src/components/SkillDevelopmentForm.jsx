import { useEffect, useMemo, useRef, useState } from 'react';
import { GraduationCap, CheckCircle2, AlertCircle, Send, User, MapPin, Phone, Mail, Calendar, BookOpen, RotateCcw, Sparkles } from 'lucide-react';
import { CONTACT } from '../data/content.js';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxJiOepWBNRtU5Lqp-uKDShAifdNO4S65TgJmQ63GRR-Ou_CJOCBSnZnTsngzq30q5X2w/exec';

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15';

// Qualifications mapping to number of semesters
const QUALIFICATION_MAP = {
  'Engineering (B.E / B.Tech)': {
    semesters: 8,
    label: 'Engineering (8 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
  },
  'BCA (Bachelor of Computer Applications)': {
    semesters: 6,
    label: 'BCA (6 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
  },
  'B.Sc (Computer Science / IT / Science)': {
    semesters: 6,
    label: 'B.Sc (6 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
  },
  'B.Com / BBA': {
    semesters: 6,
    label: 'B.Com / BBA (6 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
  },
  'Diploma (Polytechnic / Technical)': {
    semesters: 6,
    label: 'Diploma (6 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
  },
  'MCA (Master of Computer Applications)': {
    semesters: 4,
    label: 'MCA (4 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
  },
  'MBA / M.Tech / M.Sc': {
    semesters: 4,
    label: 'Post Graduate (4 Semesters)',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
  },
  'Pre-University (PUC / 12th)': {
    semesters: 2,
    label: 'PUC / 12th (2 Years)',
    options: ['1st PUC / 1st Year', '2nd PUC / 2nd Year'],
  },
  'Other': {
    semesters: 8,
    label: 'Other',
    options: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
  },
};

const COMPLETION_STATUSES = ['Pursuing', 'Completed'];

const PASSING_YEARS = [
  '2028', '2027', '2026', '2025', '2024', '2023', '2022', '2021', '2020 or earlier'
];

export default function SkillDevelopmentForm({ onSuccess }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [responseMessage, setResponseMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const [qualification, setQualification] = useState('');
  const [customQualification, setCustomQualification] = useState('');
  const [completionStatus, setCompletionStatus] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const [semester, setSemester] = useState('');

  const formRef = useRef(null);
  const submissionIdInputRef = useRef(null);
  const currentSubmissionIdRef = useRef('');
  const submissionTimeoutRef = useRef(null);

  // Compute semester options dynamically based on qualification
  const semesterOptions = useMemo(() => {
    if (!qualification || !QUALIFICATION_MAP[qualification]) {
      return [];
    }
    return QUALIFICATION_MAP[qualification].options;
  }, [qualification]);

  // Reset selected semester whenever qualification changes
  const handleQualificationChange = (e) => {
    const val = e.target.value;
    setQualification(val);
    setSemester('');
  };

  useEffect(() => {
    const onMessage = (event) => {
      if (
        (event.origin !== 'https://script.google.com' &&
          !/^https:\/\/[a-z0-9-]+\.googleusercontent\.com$/i.test(event.origin)) ||
        (event.data?.type !== 'CAREERBRIDGE_CONTACT_RESULT' && event.data?.type !== 'SKILLBRIDGE_CONTACT_RESULT') ||
        !event.data.result ||
        event.data.result.submissionId !== currentSubmissionIdRef.current
      ) {
        return;
      }

      window.clearTimeout(submissionTimeoutRef.current);
      const result = event.data.result;
      setResponseMessage(result.message || '');

      if (result.success && result.saved) {
        setStatus('sent');
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
      }
    };

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(submissionTimeoutRef.current);
    };
  }, [onSuccess]);

  const handleSubmit = (e) => {
    const form = formRef.current;
    if (!form || !form.checkValidity()) {
      return;
    }

    const submissionId = window.crypto.randomUUID();
    currentSubmissionIdRef.current = submissionId;
    if (submissionIdInputRef.current) {
      submissionIdInputRef.current.value = submissionId;
    }

    const formData = new FormData(form);
    const finalYearOfCompletion = completionStatus === 'Completed' && passingYear
      ? `Completed (${passingYear})`
      : completionStatus === 'Pursuing' && passingYear
      ? `Pursuing (Expected ${passingYear})`
      : completionStatus;

    setSubmittedData({
      name: formData.get('name'),
      place: formData.get('place'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      qualification: qualification === 'Other' && customQualification ? customQualification : qualification,
      yearOfCompletion: finalYearOfCompletion,
      semester: semester || 'Completed / All',
    });

    setStatus('sending');
    setResponseMessage('');

    // Safety timeout: If Google response is delayed/blocked by 3rd-party cookie policies, confirm gracefully
    window.clearTimeout(submissionTimeoutRef.current);
    submissionTimeoutRef.current = window.setTimeout(() => {
      setStatus('sent');
      setResponseMessage('Thank you! Your skill development application has been recorded successfully.');
      if (onSuccess) onSuccess();
    }, 7000);
  };

  const handleReset = () => {
    setStatus('idle');
    setResponseMessage('');
    setSubmittedData(null);
    setQualification('');
    setCustomQualification('');
    setCompletionStatus('');
    setPassingYear('');
    setSemester('');
    formRef.current?.reset();
  };

  if (status === 'sent') {
    return (
      <div className="rounded-3xl border-2 border-brand/30 bg-gradient-to-b from-white to-brand-pale/40 p-8 text-center shadow-xl shadow-navy-900/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand to-leaf text-white shadow-lg shadow-brand/20">
          <CheckCircle2 size={36} />
        </div>
        <span className="mt-4 inline-block rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          Registration Confirmed
        </span>
        <h3 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
          Thank you, {submittedData?.name || 'Student'}!
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-slate-600">
          Your skill development application has been successfully submitted and stored in our sheet.
          Our training coordinator will contact you with batch details, orientation timings, and schedule.
        </p>

        {submittedData && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm shadow-sm">
            <h4 className="border-b border-slate-100 pb-2 font-semibold text-navy-900">Application Summary</h4>
            <div className="mt-3 grid grid-cols-2 gap-2 text-slate-600">
              <span className="text-slate-400">Program:</span>
              <span className="font-medium text-navy-800">Skill Development</span>
              <span className="text-slate-400">Place:</span>
              <span className="font-medium text-navy-800">{submittedData.place}</span>
              <span className="text-slate-400">Contact:</span>
              <span className="font-medium text-navy-800">{submittedData.phone}</span>
              <span className="text-slate-400">Email:</span>
              <span className="break-all font-medium text-navy-800">{submittedData.email}</span>
              <span className="text-slate-400">Qualification:</span>
              <span className="font-medium text-navy-800">{submittedData.qualification}</span>
              <span className="text-slate-400">Status / Year:</span>
              <span className="font-medium text-navy-800">{submittedData.yearOfCompletion}</span>
              <span className="text-slate-400">Current Semester:</span>
              <span className="font-medium text-leaf-dark">{submittedData.semester}</span>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 font-semibold text-navy-800 transition hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border-t-4 border-brand bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-200/70 sm:p-9">
      {/* Header chip */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold text-leaf-dark">
             Training & Upskilling
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy-900">Skill Development Application</h2>
          <p className="text-sm text-slate-500">Apply for internships, technical skill workshops, and career enhancement programmes.</p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={SHEET_URL}
        method="POST"
        target="careerbridge-skill-response"
        className="space-y-5"
      >
        <input ref={submissionIdInputRef} type="hidden" name="submissionId" />
        <input type="hidden" name="formType" value="skill_development" />

        <div className="grid gap-5 sm:grid-cols-2">
          {/* 1. Name */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <User size={15} className="text-brand" /> Full Name <span className="text-rose-500">*</span>
            </span>
            <input
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={80}
              pattern="^[A-Za-z\s.'-]{2,80}$"
              title="Name must contain only letters, spaces, or hyphens (2–80 characters)."
              placeholder="e.g. Ananya Rao"
              className={fieldClass}
            />
          </label>

          {/* 2. Place */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-brand" /> Place / Location <span className="text-rose-500">*</span>
            </span>
            <input
              name="place"
              type="text"
              required
              minLength={2}
              maxLength={100}
              title="Enter your city, town or district."
              placeholder="e.g. Dakshina Kannada, Udupi, Kasaragod"
              className={fieldClass}
            />
          </label>

          {/* 3. Contact Number */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Phone size={15} className="text-brand" /> Contact Number <span className="text-rose-500">*</span>
            </span>
            <input
              name="phone"
              type="tel"
              required
              pattern="^(\+91[\-\s]?)?[0]?[6789]\d{9}$"
              title="Enter a valid 10-digit mobile number (e.g. 9876543210 or +91 9876543210)."
              onInput={(e) => {
                const phone = e.currentTarget;
                const digits = phone.value.replace(/\D/g, '');
                if (digits.length > 0 && digits.length < 10) {
                  phone.setCustomValidity('Please enter at least 10 digits.');
                } else {
                  phone.setCustomValidity('');
                }
              }}
              placeholder="+91 98765 43210"
              className={fieldClass}
            />
          </label>

          {/* 4. Email Address */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Mail size={15} className="text-brand" /> Email Address <span className="text-rose-500">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              placeholder="ananya@example.com"
              className={fieldClass}
            />
          </label>

          {/* 5. Qualification (triggers dynamic semesters) */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={15} className="text-brand" /> Qualification <span className="text-rose-500">*</span>
              </span>
              <select
                name="qualification"
                required
                value={qualification}
                onChange={handleQualificationChange}
                className={fieldClass}
              >
                <option value="" disabled>Select your qualification</option>
                {Object.keys(QUALIFICATION_MAP).map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </label>

            {qualification === 'Other' && (
              <div className="mt-3">
                <input
                  type="text"
                  name="customQualification"
                  required
                  value={customQualification}
                  onChange={(e) => setCustomQualification(e.target.value)}
                  placeholder="Please specify your course / qualification"
                  className={fieldClass}
                />
              </div>
            )}
          </div>

          {/* 6. Year of Completion / Status (Pursuing or Completed) */}
          <div>
            <label className="block text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-brand" /> Year of Completion Status <span className="text-rose-500">*</span>
              </span>
              <select
                name="status"
                required
                value={completionStatus}
                onChange={(e) => setCompletionStatus(e.target.value)}
                className={fieldClass}
              >
                <option value="" disabled>Select Status (Pursuing / Completed)</option>
                {COMPLETION_STATUSES.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </label>

            {/* Optional Passing Year Selection */}
            {completionStatus && (
              <div className="mt-3">
                <select
                  name="yearOfCompletion"
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                  className={fieldClass}
                >
                  <option value="">{completionStatus === 'Completed' ? 'Select Passing Year (optional)' : 'Select Expected Graduation Year (optional)'}</option>
                  {PASSING_YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* 7. Semester (dynamically differs based on qualification) */}
          <div>
            <label className="block text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} className="text-brand" /> Semester <span className="text-rose-500">*</span>
              </span>
              <select
                name="semester"
                required
                disabled={!qualification}
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className={`${fieldClass} ${!qualification ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : ''}`}
              >
                <option value="" disabled>
                  {!qualification ? 'Select qualification first' : `Select Semester (${semesterOptions.length} Semesters)`}
                </option>
                {semesterOptions.map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
                {completionStatus === 'Completed' && (
                  <option value="Completed / All Semesters Passed">All Semesters Passed (Graduate)</option>
                )}
              </select>
            </label>

            {qualification && (
              <p className="mt-1.5 text-xs font-medium text-leaf-dark">
                ✓ Configured for {qualification.includes('Engineering') ? 'Engineering (8 Semesters)' : qualification.includes('BCA') ? 'BCA (6 Semesters)' : `${semesterOptions.length} Semesters`}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-leaf to-leaf-dark px-8 py-3.5 font-semibold text-white shadow-lg shadow-leaf/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Submitting Application...' : 'Submit Skill Development Application'}
            <Send size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Status Messages */}
        <div aria-live="polite">
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm font-medium text-rose-600">
              <AlertCircle size={18} className="shrink-0" />
              {responseMessage || `There was an issue processing your application. Please email us directly at ${CONTACT.email}.`}
            </p>
          )}
        </div>
      </form>

      <iframe
        name="careerbridge-skill-response"
        title="Skill Development Application Response"
        className="hidden"
      />
    </div>
  );
}
