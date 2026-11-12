import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Sparkles, GraduationCap, Briefcase,
  Users, Building2, HeartHandshake, Compass, Award, BookOpen
} from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import About from '../components/About.jsx';
import Initiatives from '../components/Initiatives.jsx';
import Contact from '../components/Contact.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';

const PATHWAY_STEPS = [
  {
    icon: Compass,
    title: '1. Community Outreach',
    desc: 'Connecting with rural youth, colleges, and government schools across Dakshina Kannada, Udupi, and border regions.',
    points: ['Rural community visits', 'Grade 9 & 10 guidance', 'College network sessions'],
    tone: 'bg-leaf-soft text-leaf-dark',
  },
  {
    icon: GraduationCap,
    title: '2. Skill Training',
    desc: 'Practical training modules in IT, AI, software engineering, business tools, and professional soft skills.',
    points: ['Hands-on project experience', 'Industry mentor sessions', 'Certification support'],
    tone: 'bg-brand-soft text-brand',
  },
  {
    icon: Users,
    title: '3. Mentorship & Counselling',
    desc: 'Holistic career guidance, emotional well-being, addiction awareness, and one-on-one professional coaching.',
    points: ['1,000+ youth counselled', 'Aptitude & skill tests', 'Mental well-being support'],
    tone: 'bg-sun-soft text-sun-deep',
  },
  {
    icon: Briefcase,
    title: '4. Placement & Sustained Impact',
    desc: 'Direct job drives, campus recruitment, and corporate placement connections with 100+ partner companies.',
    points: ['300+ placed candidates', 'Startups to MNCs', 'Zero candidate cost'],
    tone: 'bg-navy-900 text-white',
  },
];

const TESTIMONIALS = [
  {
    quote: 'CareerBridge gave me hands-on IT training and connected me to interview opportunities when no campus drives visited our rural college. Today I work as a junior software engineer.',
    author: 'Kavya S.',
    role: 'BCA Graduate',
    place: 'Puttur, Dakshina Kannada',
    initials: 'KS',
  },
  {
    quote: 'The career guidance and mental health workshops conducted by CareerBridge transformed our students’ confidence. Their dedication to non-metro youth is exceptional.',
    author: 'Prof. Ramesh K.',
    role: 'College Principal & Partner',
    place: 'Udupi District',
    initials: 'RK',
  },
  {
    quote: 'The scholarship and study materials from CareerBridge supported my pre-university education during a difficult time. It made all the difference in my learning journey.',
    author: 'Mohammed Zameer',
    role: 'PUC Student',
    place: 'Panemangaluru',
    initials: 'MZ',
  },
];

export default function Home() {
  const [audienceTab, setAudienceTab] = useState('student'); // 'student' | 'employer'

  return (
    <>
      {/* 1. Hero Banner with Real Metrics & Carousel */}
      <Hero />

      {/* 2. Key Impact Statistics */}
      <Stats />

      {/* 3. About Us: Mission, DQS SIP Initiative, and Journey */}
      <About />

      {/* 4. Core Focus Initiatives (Interactive tab showcase on Desktop, Stacked card swipe on Mobile) */}
      <Initiatives />

      {/* 5. Proven Pathway: How CareerBridge Works */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-sm">
              <Sparkles size={14} /> Proven Methodology
            </span> */}
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Our 4-Step Pathway to Success
            </h2>
            <p className="mt-4 text-justify leading-relaxed text-slate-600 sm:text-lg">
              A structured, step-by-step pathway from rural communities and tier-2/3 institutions to sustainable, high-growth professional careers.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PATHWAY_STEPS.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 100}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30">
                  <div className="flex items-center justify-between">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.tone} transition duration-300 group-hover:scale-110 shadow-sm`}>
                      <step.icon size={26} />
                    </span>
                    {/* <span className="font-display text-2xl font-black text-slate-200 group-hover:text-brand/40 transition">
                      0{idx + 1}
                    </span> */}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-950">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={13} className="text-leaf shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual-Audience Action Hub: Students & Employers */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Get Involved
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you're a student seeking career opportunities or an employer looking for skilled talent, CareerBridge connects you to what matters.
            </p>
          </Reveal>

          {/* ============================================================== */}
          {/* MOBILE VIEW ONLY (Interactive Segmented Selector & Focus Card) */}
          {/* ============================================================== */}
          <div className="block lg:hidden">
            {/* Segmented Pill Switcher */}
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner max-w-sm w-full">
                <button
                  type="button"
                  onClick={() => setAudienceTab('student')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    audienceTab === 'student'
                      ? 'bg-white text-navy-950 shadow-md ring-1 ring-slate-200/80'
                      : 'text-slate-500 hover:text-navy-900'
                  }`}
                >
                  <GraduationCap size={16} className={audienceTab === 'student' ? 'text-brand' : 'text-slate-400'} />
                  <span>For Students</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAudienceTab('employer')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    audienceTab === 'employer'
                      ? 'bg-white text-navy-950 shadow-md ring-1 ring-slate-200/80'
                      : 'text-slate-500 hover:text-navy-900'
                  }`}
                >
                  <Building2 size={16} className={audienceTab === 'employer' ? 'text-leaf-dark' : 'text-slate-400'} />
                  <span>For Employers</span>
                </button>
              </div>
            </div>

            {/* Mobile Card: For Youth & Students */}
            {audienceTab === 'student' && (
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand-pale via-white to-white p-6 shadow-xl shadow-brand/5 animate-fade">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    <GraduationCap size={14} /> For Youth & Students
                  </span>
                  {/* <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Step 01</span> */}
                </div>

                <h3 className="mt-4 text-xl font-bold text-navy-950">
                  Launch Your Career With Industry Skills
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                  Are you a degree student, engineering graduate, or job seeker from a rural or non-metro background? Access domain training, resume building, mock interviews, and corporate placement drives.
                </p>

                {/* 2x2 Clean Benefit Badges */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-leaf shrink-0" />
                    <span className="truncate">IT & AI Training</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-leaf shrink-0" />
                    <span className="truncate">Direct Job Drives</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-leaf shrink-0" />
                    <span className="truncate">Career Counselling</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-leaf shrink-0" />
                    <span className="truncate">Scholarships & Books</span>
                  </div>
                </div>

                {/* Full-width touch-friendly actions */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <Link
                    to="/apply/job"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand/20 transition active:scale-[0.98] text-center"
                  >
                    <span>Apply for Job Placement</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/apply/skill-development"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand transition active:scale-[0.98] text-center"
                  >
                    <span>Skill Development</span>
                  </Link>
                </div>

                {/* Quick Switch Helper */}
                <button
                  type="button"
                  onClick={() => setAudienceTab('employer')}
                  className="mt-4 w-full text-center text-xs font-semibold text-slate-400 hover:text-leaf-dark transition"
                >
                  Looking to hire? Switch to Employer view →
                </button>
              </div>
            )}

            {/* Mobile Card: For Employers & Colleges */}
            {audienceTab === 'employer' && (
              <div className="relative overflow-hidden rounded-3xl border-2 border-leaf/30 bg-gradient-to-br from-leaf-soft/40 via-white to-white p-6 shadow-xl shadow-leaf/5 animate-fade">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-leaf-dark">
                    <Building2 size={14} /> For Employers & Colleges
                  </span>
                  {/* <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Step 02</span> */}
                </div>

                <h3 className="mt-4 text-xl font-bold text-navy-950">
                  Hire Pre-Trained Talent & Partner With Us
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                  Connect directly with verified, pre-screened talent across Dakshina Kannada, Udupi, and Karnataka-Kerala regions. Collaborate for corporate placement drives, CSR sponsorships, or school adoption.
                </p>

                {/* 2x2 Clean Benefit Badges */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span className="truncate">100+ Hiring Partners</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span className="truncate">Zero Recruitment Cost</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span className="truncate">Campus Drives</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-slate-200/70 shadow-sm flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-brand shrink-0" />
                    <span className="truncate">CSR Partnerships</span>
                  </div>
                </div>

                {/* Full-width touch-friendly actions */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-leaf px-5 py-3 text-sm font-bold text-white shadow-md shadow-leaf/20 transition active:scale-[0.98] text-center"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/portfolio"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-leaf/30 bg-white px-5 py-3 text-sm font-bold text-leaf-dark transition active:scale-[0.98] text-center"
                  >
                    <span>View Track Record</span>
                  </Link>
                </div>

                {/* Quick Switch Helper */}
                <button
                  type="button"
                  onClick={() => setAudienceTab('student')}
                  className="mt-4 w-full text-center text-xs font-semibold text-slate-400 hover:text-brand transition"
                >
                  Looking for training? Switch to Student view →
                </button>
              </div>
            )}
          </div>

          {/* ============================================================== */}
          {/* DESKTOP VIEW ONLY (Side-by-side Dual Audience Cards)           */}
          {/* ============================================================== */}
          <div className="hidden lg:grid gap-8 lg:grid-cols-2">
            {/* For Job Seekers & Students */}
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand-pale/50 via-white to-white p-8 lg:p-10 shadow-lg shadow-brand/5 flex flex-col justify-between h-full">
                <div>
                  <span className="rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                    For Youth & Students
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-navy-950 sm:text-3xl">
                    Launch Your Career With Industry Skills
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Are you a degree student, engineering graduate, or job seeker from a rural or non-metro background? Access domain training, resume building, mock interviews, and corporate placement drives.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-leaf shrink-0" /> IT & AI Training
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-leaf shrink-0" /> Direct Job Drives
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-leaf shrink-0" /> Career Counselling
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-leaf shrink-0" /> Scholarships & Books
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/apply/job"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-brand/20 transition hover:bg-navy-900"
                  >
                    <span>Apply for Job Placement</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/apply/skill-development"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand/40 bg-white px-5 py-3.5 text-sm font-bold text-brand transition hover:bg-brand-soft"
                  >
                    <span>Skill Development</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* For Employers & Educational Institutions */}
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-leaf/30 bg-gradient-to-br from-leaf-soft/40 via-white to-white p-8 lg:p-10 shadow-lg shadow-leaf/5 flex flex-col justify-between h-full">
                <div>
                  <span className="rounded-full bg-leaf-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-leaf-dark">
                    For Employers & Colleges
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-navy-950 sm:text-3xl">
                    Hire Pre-Trained Talent & Partner With Us
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Connect directly with verified, pre-screened talent across Dakshina Kannada, Udupi, and Karnataka-Kerala regions. Collaborate for corporate placement drives, CSR sponsorships, or school adoption.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-brand shrink-0" /> 100+ Hiring Partners
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-brand shrink-0" /> Zero Recruitment Cost
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-brand shrink-0" /> Campus Drives
                    </div>
                    <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-sm flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-brand shrink-0" /> CSR Partnerships
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-leaf px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-leaf/20 transition hover:bg-leaf-dark"
                  >
                    <span>Partner With CareerBridge</span>
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-xl border border-leaf/40 bg-white px-5 py-3.5 text-sm font-bold text-leaf-dark transition hover:bg-leaf-soft"
                  >
                    <span>View Track Record</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Voices of Impact: Student & Community Testimonials */}
      {/* <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50/60 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-leaf-dark">
              Real Stories, Real Transformation
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Voices of CareerBridge
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Hear from youth, students, and educators whose journeys were shaped by our programmes.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.author} delay={idx * 100}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <div className="flex text-amber-400 gap-1 text-sm">
                      {'★'.repeat(5)}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 italic">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft font-bold text-brand text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-950 text-sm">{t.author}</h4>
                      <p className="text-xs text-slate-500">{t.role} · {t.place}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8. Contact Form on Home Page */}
      {/* <Contact /> */}

      {/* 9. Bottom Call-To-Action Band */}
      <CtaBand />
    </>
  );
}
