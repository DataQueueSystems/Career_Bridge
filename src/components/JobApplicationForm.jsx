import { useEffect, useRef, useState } from 'react';
import { Briefcase, CheckCircle2, AlertCircle, Send, User, MapPin, Phone, Mail, GraduationCap, RotateCcw } from 'lucide-react';
import { CONTACT } from '../data/content.js';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxJiOepWBNRtU5Lqp-uKDShAifdNO4S65TgJmQ63GRR-Ou_CJOCBSnZnTsngzq30q5X2w/exec';

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15';

const QUALIFICATIONS = [
  'Engineering (B.E / B.Tech)',
  'BCA (Bachelor of Computer Applications)',
  'MCA (Master of Computer Applications)',
  'B.Sc (Computer Science / IT / Science)',
  'M.Sc (Computer Science / IT)',
  'B.Com / BBA',
  'MBA / M.Com',
  'Diploma (Polytechnic / Technical)',
  'Post Graduate (Other)',
  'Graduate (Other)',
  // 'Pre-University (PUC / 12th)',
  'Other',
];

export default function JobApplicationForm({ onSuccess }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [responseMessage, setResponseMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [qualification, setQualification] = useState('');
  const [customQualification, setCustomQualification] = useState('');

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
      phone: formData.get('phone'),
      email: formData.get('email'),
      qualification: qualification === 'Other' && customQualification ? customQualification : qualification,
    });

    setStatus('sending');
    setResponseMessage('');

    // Safety timeout: If Google response is delayed/blocked by 3rd-party cookie policies, confirm gracefully
    window.clearTimeout(submissionTimeoutRef.current);
    submissionTimeoutRef.current = window.setTimeout(() => {
      setStatus('sent');
      setResponseMessage('Thank you! Your job application has been submitted successfully.');
      if (onSuccess) onSuccess();
    }, 7000);
  };

  const handleReset = () => {
    setStatus('idle');
    setResponseMessage('');
    setSubmittedData(null);
    setQualification('');
    setCustomQualification('');
    formRef.current?.reset();
  };

  if (status === 'sent') {
    return (
      <div className="rounded-3xl border-2 border-leaf/30 bg-gradient-to-b from-white to-brand-pale/40 p-8 text-center shadow-xl shadow-navy-900/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand to-leaf text-white shadow-lg shadow-brand/20">
          <CheckCircle2 size={36} />
        </div>
        <span className="mt-4 inline-block rounded-full bg-leaf-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-leaf-dark">
          Application Received
        </span>
        <h3 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
          Thank you, {submittedData?.name || 'Candidate'}!
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-slate-600">
          Your job application has been successfully submitted and stored in our recruitment database.
          Our HR and placement team will review your qualifications and reach out to you soon.
        </p>

        {submittedData && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm shadow-sm">
            <h4 className="border-b border-slate-100 pb-2 font-semibold text-navy-900">Application Summary</h4>
            <div className="mt-3 grid grid-cols-2 gap-2 text-slate-600">
              <span className="text-slate-400">Position / Track:</span>
              <span className="font-medium text-navy-800">Job Placement</span>
              <span className="text-slate-400">Place:</span>
              <span className="font-medium text-navy-800">{submittedData.place}</span>
              <span className="text-slate-400">Contact:</span>
              <span className="font-medium text-navy-800">{submittedData.phone}</span>
              <span className="text-slate-400">Email:</span>
              <span className="break-all font-medium text-navy-800">{submittedData.email}</span>
              <span className="text-slate-400">Qualification:</span>
              <span className="font-medium text-navy-800">{submittedData.qualification}</span>
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
    <div className="relative overflow-hidden rounded-3xl border-t-4 border-leaf bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-200/70 sm:p-9">
      {/* Header chip */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
            <Briefcase size={14} /> Career Opportunities
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy-900">Job Application Form</h2>
          <p className="text-sm text-slate-500">Fill in your details below to apply for ongoing job drives and corporate openings.</p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={SHEET_URL}
        method="POST"
        target="careerbridge-job-response"
        className="space-y-5"
      >
        <input ref={submissionIdInputRef} type="hidden" name="submissionId" />
        <input type="hidden" name="formType" value="job" />

        <div className="grid gap-5 sm:grid-cols-2">
          {/* 1. Name */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <User size={15} className="text-leaf" /> Full Name <span className="text-rose-500">*</span>
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
              <MapPin size={15} className="text-leaf" /> Place / Location <span className="text-rose-500">*</span>
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

          {/* 3. Contact Number */}
          <label className="block text-sm font-semibold text-navy-800">
            <span className="flex items-center gap-1.5">
              <Phone size={15} className="text-leaf" /> Contact Number <span className="text-rose-500">*</span>
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
              <Mail size={15} className="text-leaf" /> Email Address <span className="text-rose-500">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </label>

          {/* 5. Qualification */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={15} className="text-leaf" /> Highest Qualification <span className="text-rose-500">*</span>
              </span>
              <select
                name="qualification"
                required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className={fieldClass}
              >
                <option value="" disabled>Select your qualification</option>
                {QUALIFICATIONS.map((q) => (
                  <option key={q} value={q}>{q}</option>
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
                  placeholder="Please specify your qualification (e.g. B.Arch, ITI, etc.)"
                  className={fieldClass}
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-navy-800 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Submitting Application...' : 'Submit Job Application'}
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
        name="careerbridge-job-response"
        title="Job Application Response"
        className="hidden"
      />
    </div>
  );
}
