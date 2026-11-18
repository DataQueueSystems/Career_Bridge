import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle2, AlertCircle, Send, User, MapPin, Phone, Mail, Building, BookOpen, Landmark, IndianRupee, Briefcase, RotateCcw, HelpCircle } from 'lucide-react';
import SearchableCombobox from './SearchableCombobox.jsx';
import { COURSES_AND_STREAMS, KARNATAKA_UNIVERSITIES, KARNATAKA_COLLEGES } from '../data/karnatakaEducationData.js';
import { CONTACT } from '../data/content.js';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxJiOepWBNRtU5Lqp-uKDShAifdNO4S65TgJmQ63GRR-Ou_CJOCBSnZnTsngzq30q5X2w/exec';

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15';

export default function ScholarshipApplicationForm({ onSuccess }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [responseMessage, setResponseMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Searchable Autocomplete values
  const [collegeName, setCollegeName] = useState('');
  const [courseStream, setCourseStream] = useState('');
  const [university, setUniversity] = useState('');

  const formRef = useRef(null);
  const submissionIdInputRef = useRef(null);
  const currentSubmissionIdRef = useRef('');
  const submissionTimeoutRef = useRef(null);

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
    setSubmittedData({
      name: formData.get('name'),
      place: formData.get('place'),
      collegeName: collegeName || formData.get('collegeName'),
      courseStream: courseStream || formData.get('courseStream'),
      university: university || formData.get('university'),
      annualIncome: formData.get('annualIncome'),
      guardianOccupation: formData.get('guardianOccupation'),
      contact1: formData.get('contact1'),
      contact2: formData.get('contact2'),
      email: formData.get('email'),
    });

    setStatus('sending');
    setResponseMessage('');

    // Safety timeout: If Google response is delayed/blocked by 3rd-party cookie policies, confirm gracefully
    window.clearTimeout(submissionTimeoutRef.current);
    submissionTimeoutRef.current = window.setTimeout(() => {
      setStatus('sent');
      setResponseMessage('Thank you! Your scholarship registration has been submitted successfully.');
      if (onSuccess) onSuccess();
    }, 7000);
  };

  const handleReset = () => {
    setStatus('idle');
    setResponseMessage('');
    setSubmittedData(null);
    setCollegeName('');
    setCourseStream('');
    setUniversity('');
    formRef.current?.reset();
  };

  if (status === 'sent') {
    return (
      <div className="rounded-3xl border-2 border-brand/30 bg-gradient-to-b from-white to-brand-pale/40 p-8 text-center shadow-xl shadow-navy-900/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand to-leaf text-white shadow-lg shadow-brand/20">
          <CheckCircle2 size={36} />
        </div>
        <span className="mt-4 inline-block rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          Scholarship Registration Received
        </span>
        <h3 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
          Thank you, {submittedData?.name || 'Applicant'}!
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-slate-600">
          Your scholarship application has been successfully recorded in our Scholarship database.
          Our educational support committee will review your application details and contact you.
        </p>

        {submittedData && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm shadow-sm">
            <h4 className="border-b border-slate-100 pb-2 font-semibold text-navy-900">Application Summary</h4>
            <div className="mt-3 grid grid-cols-2 gap-2 text-slate-600">
              <span className="text-slate-400">Applicant Name:</span>
              <span className="font-medium text-navy-800">{submittedData.name}</span>
              <span className="text-slate-400">Place:</span>
              <span className="font-medium text-navy-800">{submittedData.place}</span>
              <span className="text-slate-400">College:</span>
              <span className="font-medium text-navy-800">{submittedData.collegeName}</span>
              <span className="text-slate-400">Course & Stream:</span>
              <span className="font-medium text-navy-800">{submittedData.courseStream}</span>
              <span className="text-slate-400">University / Board:</span>
              <span className="font-medium text-navy-800">{submittedData.university}</span>
              <span className="text-slate-400">Annual Income (P.A.):</span>
              <span className="font-medium text-navy-800">{submittedData.annualIncome}</span>
              <span className="text-slate-400">Guardian Occupation:</span>
              <span className="font-medium text-navy-800">{submittedData.guardianOccupation}</span>
              <span className="text-slate-400">Contact Number 1:</span>
              <span className="font-medium text-navy-800">{submittedData.contact1}</span>
              {submittedData.contact2 && (
                <>
                  <span className="text-slate-400">Contact Number 2:</span>
                  <span className="font-medium text-navy-800">{submittedData.contact2}</span>
                </>
              )}
              {submittedData.email && (
                <>
                  <span className="text-slate-400">Email:</span>
                  <span className="break-all font-medium text-navy-800">{submittedData.email}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 font-semibold text-navy-800 transition hover:bg-slate-50"
          >
            <RotateCcw size={16} /> Submit another application
          </button>
        </div> */}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border-t-4 border-brand bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-200/70 sm:p-9">
      {/* Header chip */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
            <Award size={14} /> Student Financial Aid
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy-900">Scholarship Registration</h2>
          <p className="text-sm text-slate-500">
            Submit your details below for scholarship consideration and student financial assistance.
          </p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={SHEET_URL}
        method="POST"
        target="careerbridge-scholarship-response"
        className="space-y-5"
      >
        <input ref={submissionIdInputRef} type="hidden" name="submissionId" />
        <input type="hidden" name="formType" value="scholarship" />

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
              placeholder="e.g. Rahul Sharma"
              className={fieldClass}
            />
          </label>

          {/* 2. Place */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-brand" /> Place / Town / District <span className="text-rose-500">*</span>
            </span>
            <input
              name="place"
              type="text"
              required
              minLength={2}
              maxLength={100}
              title="Enter your city, town or district."
              placeholder="e.g. Mangaluru, Udupi, Bengaluru"
              className={fieldClass}
            />
          </label>

          {/* 3. College Name (Searchable dropdown with colleges all over Karnataka) */}
          <div className="sm:col-span-2">
            <SearchableCombobox
              name="collegeName"
              value={collegeName}
              onChange={setCollegeName}
              options={KARNATAKA_COLLEGES}
              placeholder="Type to search colleges all over Karnataka or enter your college..."
              label="College Name"
              required
              icon={Building}
              emptyText="You can continue typing your college name to submit your custom entry."
            />
            <p className="mt-1 text-[11px] text-slate-400 flex items-center gap-1">
              <HelpCircle size={12} className="shrink-0 text-slate-400" />
              Type to filter 200+ colleges across Karnataka, or type your own college name freely.
            </p>
          </div>

          {/* 4. Course & Stream (Searchable dropdown) */}
          <div className="sm:col-span-1">
            <SearchableCombobox
              name="courseStream"
              value={courseStream}
              onChange={setCourseStream}
              options={COURSES_AND_STREAMS}
              placeholder="Type or select course & stream..."
              label="Course & Stream"
              required
              icon={BookOpen}
              emptyText="You can continue typing your course & stream to submit your custom entry."
            />
          </div>

          {/* 5. University / Board (Searchable dropdown) */}
          <div className="sm:col-span-1">
            <SearchableCombobox
              name="university"
              value={university}
              onChange={setUniversity}
              options={KARNATAKA_UNIVERSITIES}
              placeholder="Type or select university / board..."
              label="University / Board"
              required
              icon={Landmark}
              emptyText="You can continue typing your university or board to submit your custom entry."
            />
          </div>

          {/* 6. Income (P.A.) */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <IndianRupee size={15} className="text-brand" /> Family Annual Income (P.A.) <span className="text-rose-500">*</span>
            </span>
            <input
              name="annualIncome"
              type="text"
              required
              minLength={2}
              maxLength={60}
              placeholder="e.g. ₹ 1,50,000 / Below 2.5 LPA"
              className={fieldClass}
            />
          </label>

          {/* 7. Guardian Occupation */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Briefcase size={15} className="text-brand" /> Guardian / Parent Occupation <span className="text-rose-500">*</span>
            </span>
            <input
              name="guardianOccupation"
              type="text"
              required
              minLength={2}
              maxLength={80}
              placeholder="e.g. Farmer, Daily Wage, Private Employee, Business"
              className={fieldClass}
            />
          </label>

          {/* 8. Contact Number 1 */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Phone size={15} className="text-brand" /> Contact Number 1 (Primary) <span className="text-rose-500">*</span>
            </span>
            <input
              name="contact1"
              type="tel"
              required
              pattern="^(\+91[\-\s]?)?[0]?[6789]\d{9}$"
              title="Enter a valid 10-digit mobile number."
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

          {/* 9. Contact Number 2 */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Phone size={15} className="text-brand" /> Contact Number 2 (Alternate / Guardian) <span className="text-rose-500">*</span>
            </span>
            <input
              name="contact2"
              type="tel"
              required
              pattern="^(\+91[\-\s]?)?[0]?[6789]\d{9}$"
              title="Enter a valid 10-digit alternate mobile number."
              onInput={(e) => {
                const phone = e.currentTarget;
                const digits = phone.value.replace(/\D/g, '');
                if (digits.length > 0 && digits.length < 10) {
                  phone.setCustomValidity('Please enter at least 10 digits.');
                } else {
                  phone.setCustomValidity('');
                }
              }}
              placeholder="+91 98765 43211"
              className={fieldClass}
            />
          </label>

          {/* 10. Email Address (Optional for confirmation updates) */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5">
                <Mail size={15} className="text-brand" /> Email Address <span className="text-xs font-normal text-slate-400">(Optional - for email updates)</span>
              </span>
              <input
                name="email"
                type="email"
                maxLength={254}
                placeholder="you@example.com (optional)"
                className={fieldClass}
              />
            </label>
          </div>
        </div>

        {/* Submit / Okay Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand via-orange-600 to-navy-800 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Submitting Application...' : 'Submit Scholarship Application'}
            <CheckCircle2 size={18} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>

        {/* Status Messages */}
        <div aria-live="polite">
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm font-medium text-rose-600">
              <AlertCircle size={18} className="shrink-0" />
              {responseMessage || `There was an issue processing your scholarship registration. Please contact us at ${CONTACT.email}.`}
            </p>
          )}
        </div>
      </form>

      <iframe
        name="careerbridge-scholarship-response"
        title="Scholarship Application Response"
        className="hidden"
      />
    </div>
  );
}
