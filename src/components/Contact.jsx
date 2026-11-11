
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { CONTACT } from '../data/content.js';

// Paste your Google Apps Script Web app URL here (it ends in /exec)
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxJiOepWBNRtU5Lqp-uKDShAifdNO4S65TgJmQ63GRR-Ou_CJOCBSnZnTsngzq30q5X2w/exec';

const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [responseMessage, setResponseMessage] = useState('');
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

      if (result.duplicate) {
        setStatus('duplicate');
      } else if (result.success && result.saved) {
        setStatus('sent');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    };

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(submissionTimeoutRef.current);
    };
  }, []);

  const onSubmit = () => {
    const submissionId = window.crypto.randomUUID();
    currentSubmissionIdRef.current = submissionId;
    if (submissionIdInputRef.current) {
      submissionIdInputRef.current.value = submissionId;
    }

    setStatus('sending');
    setResponseMessage('');
    window.clearTimeout(submissionTimeoutRef.current);
    submissionTimeoutRef.current = window.setTimeout(() => {
      setStatus('error');
      setResponseMessage('We could not confirm your submission. Please try again or email us at ' + CONTACT.email + '.');
    }, 30000);
  };

  const info = [
    { icon: MapPin, label: 'Where we work', value: CONTACT.region },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    CONTACT.phone && { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  ].filter(Boolean);

  return (
    <section id="contact" className="bg-gradient-to-br from-brand-pale via-white to-leaf-soft/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <Reveal>
            <ul className="space-y-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-navy-800 text-white">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="break-words font-semibold text-navy-800 hover:text-brand">{value}</a>
                    ) : (
                      <p className="font-semibold text-navy-800">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              action={SHEET_URL}
              method="POST"
              target="skillbridge-contact-response"
              className="space-y-5 rounded-3xl border-t-4 border-leaf bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-slate-200/70 sm:p-9"
            >
              <input ref={submissionIdInputRef} type="hidden" name="submissionId" />
              <input type="hidden" name="formType" value="contact" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-navy-800">Full name
                 <input
  name="name"
  required
  minLength={2}
  maxLength={80}
  pattern="[A-Za-z ]{2,80}"
  title="Name must contain only letters and spaces (2–80 characters)."
  className={field}
  placeholder="Your name"
/>
                </label>
                <label className="block text-sm font-semibold text-navy-800">Email
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    className={field}
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm font-semibold text-navy-800">Phone
                  <input
                    name="phone"
                    type="tel"
                    required

                    pattern="\+?[0-9\s().-]{7,20}"
                    title="Enter 7–15 digits; spaces, +, parentheses, periods, and hyphens are allowed."
                    onInput={(event) => {
                      const phone = event.currentTarget;
                      const digitCount = phone.value.replace(/\D/g, '').length;
                      phone.setCustomValidity(
                        phone.value && (digitCount < 10 || digitCount > 10)
                          ? 'Enter a phone number containing 7–15 digits.'
                          : ''
                      );
                    }}
                    className={field}
                    placeholder="+91"
                  />
                </label>
                <label className="block text-sm font-semibold text-navy-800">I am a
                  <select name="role" required className={field} defaultValue="Student">
                    <option>Student</option><option>Job seeker</option><option>Educational institution</option><option>Company</option><option>Other</option>
                  </select>
                </label>
              </div>
              <label className="block text-sm font-semibold text-navy-800">Message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  title="Enter a message between 10 and 2,000 characters."
                  rows={5}
                  className={`${field} resize-y`}
                  placeholder="How can we help?"
                />
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-navy-800 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
                <Send size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </button>
              <div aria-live="polite">
                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-leaf-dark">
                    <CheckCircle2 size={18} className="shrink-0" /> {responseMessage || "Thank you! Your message has been received. We'll get back to you soon."}
                  </p>
                )}
                {status === 'duplicate' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-leaf-dark">
                    <AlertCircle size={18} className="shrink-0" /> {responseMessage}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm font-medium text-leaf-dark">
                    <AlertCircle size={18} className="shrink-0" /> {responseMessage || `Something went wrong. Please email us at ${CONTACT.email}.`}
                  </p>
                )}
              </div>
            </form>
            <iframe
              name="skillbridge-contact-response"
              title="Contact form response"
              className="hidden"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}