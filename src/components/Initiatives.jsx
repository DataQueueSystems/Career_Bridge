import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2, ChevronDown, ChevronRight, ChevronLeft,
  ArrowLeft, Compass, ExternalLink, GraduationCap, HeartHandshake, MessageCircleHeart,
  School, Sparkles, Users, Award, Eye
} from 'lucide-react';
import Reveal from './Reveal.jsx';

import skillDevImg from '../assets/initiatives/skill-development-1.webp';
import employabilityImg from '../assets/initiatives/employability-1.webp';
import counsellingImg from '../assets/initiatives/youth-counselling-1.webp';
import socialWelfareImg from '../assets/initiatives/social-welfare-1.webp';

export const FOCUS_AREAS_DATA = [
  {
    id: 'skill-development',
    num: '01',
    title: 'Skill & Career Development',
    tagline: 'Enhancing technical, professional and soft skills through practical training, internships, career guidance and industry-relevant learning programmes.',
    image: skillDevImg,
    badge: 'FOCUS AREA 01',
    applyLink: '/apply/skill-development',
    applyText: 'Apply for Skill Development',
    color: {
      brand: 'text-brand',
      bgSoft: 'bg-brand-soft',
      border: 'border-brand/30',
      gradient: 'from-brand to-navy-800',
    },
    programmes: [
      {
        num: '01',
        title: 'Internships & Skill Enhancement Programmes',
        summary: 'Internships in AI, software development, management, and other domains.',
        detail: 'We have delivered and continue to offer internships and skill enhancement programmes in AI, software development, management and other professional domains. Students and job seekers gain practical knowledge, industry-relevant skills and career development opportunities to thrive in modern workplaces.',
        highlights: ['Hands-on project work', 'Mentorship by senior IT professionals', 'Certification of completion'],
      },
      {
        num: '02',
        title: 'Seminars, Webinars & Educational Talks',
        summary: 'Expert talks on emerging IT trends, management, and career awareness.',
        detail: 'Our seminars, webinars and educational talks cover IT, management, career development and other industry-related topics, helping students and job seekers build knowledge, professional skills, career awareness and employability.',
        highlights: ['Tech trends & career roadmaps', 'Guest speakers from MNCs', 'Interactive Q&A sessions'],
      },
      {
        num: '03',
        title: 'Educational Institution Networking & Support',
        summary: 'Over 200 educational institution partnerships across non-metro regions.',
        detail: 'Connections with over 200 educational institutions strengthen partnerships and expand student access to skill development programmes, industry-relevant training, career guidance and employability initiatives.',
        highlights: ['Campus workshops & MoUs', 'College placement cell assistance', 'Faculty enablement sessions'],
      },
      {
        num: '04',
        title: 'Career Counselling & Guidance',
        summary: 'Identifying strengths, interests, and tailored career pathways.',
        detail: 'We help students and job seekers identify their interests, strengths and suitable career opportunities, supporting informed decisions about education, skill development and future employment.',
        highlights: ['1-on-1 personalized counselling', 'Stream & specialization guidance', 'Industry transition roadmaps'],
      },
    ],
  },
  {
    id: 'employability',
    num: '02',
    title: 'Employability',
    tagline: 'From preparation to opportunity. Preparing students and job seekers through job-readiness training, aptitude assessments, interview preparation and placement assistance.',
    image: employabilityImg,
    badge: 'FOCUS AREA 02',
    applyLink: '/apply/job',
    applyText: 'Apply for Job Placement',
    color: {
      brand: 'text-leaf-dark',
      bgSoft: 'bg-leaf-soft',
      border: 'border-leaf/30',
      gradient: 'from-leaf to-leaf-dark',
    },
    programmes: [
      {
        num: '01',
        title: 'Interviews & Job Placements',
        summary: 'Direct placement support connecting skilled youth with hiring employers.',
        detail: 'We have facilitated hundreds of job placements across IT, management and other industries. Our ongoing recruitment and placement initiatives continue to connect skilled youth and job seekers with suitable employment opportunities.',
        highlights: ['300+ candidates successfully placed', 'Startups, established firms & MNCs', 'Zero placement fee for candidates'],
      },
      {
        num: '02',
        title: 'Job Drives & Campus Recruitment',
        summary: 'Pooled campus placement drives bringing recruiters to tier-2/3 colleges.',
        detail: 'We coordinate job drives, campus recruitment programmes and placement activities, connecting students and job seekers with opportunities in startups, established companies and multinational corporations (MNCs).',
        highlights: ['Multi-company recruitment drives', 'Pre-screened candidate pools', 'On-the-spot interview opportunities'],
      },
      {
        num: '03',
        title: 'Skill Assessment & Aptitude Tests',
        summary: 'Evaluation tests to pinpoint strengths and technical job readiness.',
        detail: 'Technical and non-technical skill assessments, including aptitude tests, help students and job seekers evaluate their abilities, identify areas for improvement and strengthen their employability and career readiness.',
        highlights: ['5,000+ aptitude assessments conducted', 'Analytical, verbal & coding checks', 'Detailed performance scorecard'],
      },
      {
        num: '04',
        title: 'Corporate Partnerships & Placement Support',
        summary: 'Network of 100+ corporate recruitment partners across India and abroad.',
        detail: 'Connections with over 100 corporate partners support recruitment, campus placement drives, job interviews and employment opportunities, strengthening industry relationships and access to potential employers.',
        highlights: ['Direct HR hiring pipelines', 'Intern-to-hire conversions', 'Industry-aligned job criteria'],
      },
    ],
  },
  {
    id: 'youth-counselling',
    num: '03',
    title: 'Youth Counselling & Well-Being',
    tagline: 'Guidance and counselling on mental health, addiction awareness, emotional well-being and personal challenges help young people develop confidence and make informed decisions.',
    image: counsellingImg,
    badge: 'FOCUS AREA 03',
    applyLink: '/contact',
    applyText: 'Request Counselling Support',
    color: {
      brand: 'text-brand',
      bgSoft: 'bg-brand-soft',
      border: 'border-brand/30',
      gradient: 'from-brand to-navy-800',
    },
    programmes: [
      {
        num: '01',
        title: 'Mental Health Counselling',
        summary: 'Confidential sessions addressing stress, emotional health, and personal growth.',
        detail: 'We have provided mental health counselling and awareness sessions for students and youth, addressing emotional well-being, stress management and personal challenges to promote mental wellness and overall personal development.',
        highlights: ['1,000+ youth counselled', 'Certified professional counsellors', 'Safe, confidential & supportive space'],
      },
      {
        num: '02',
        title: 'Addiction Awareness & Counselling',
        summary: 'Prevention, lifestyle awareness, and rehabilitation counselling.',
        detail: 'Our addiction awareness and counselling programmes highlight the harmful effects of substance abuse, promote prevention and encourage healthy lifestyle choices and responsible decision-making.',
        highlights: ['Youth awareness workshops', 'Substance abuse prevention talks', 'Peer support & lifestyle guidance'],
      },
      {
        num: '03',
        title: 'Health & Wellness Initiatives',
        summary: 'Community blood donation camps, medical check-ups, and nutrition guidance.',
        detail: 'Blood donation camps, health check-up camps, and lifestyle and nutrition awareness programmes promote preventive healthcare, healthy living and overall community well-being.',
        highlights: ['Preventive health check-up camps', 'Community blood donation drives', 'Nutrition and fitness talks'],
      },
    ],
  },
  {
    id: 'social-welfare',
    num: '04',
    title: 'Social Welfare & Community Development',
    tagline: 'Scholarships, book and study material donations, school adoption and government school support programmes promote education, equal opportunities and sustainable social impact.',
    image: socialWelfareImg,
    badge: 'FOCUS AREA 04',
    applyLink: '/contact',
    applyText: 'Contact for Community Initiatives',
    color: {
      brand: 'text-leaf-dark',
      bgSoft: 'bg-leaf-soft',
      border: 'border-leaf/30',
      gradient: 'from-leaf to-leaf-dark',
    },
    programmes: [
      {
        num: '01',
        title: 'Government School Support',
        summary: 'Continuous academic and life guidance for Grade 9 & 10 government school students.',
        detail: 'Regular career guidance and mental health awareness programmes support Grade 9 and 10 students at two government schools in Panemangaluru and Bengre. Through repeated school visits, our team supports students\' academic development, personal well-being and future career planning.',
        highlights: ['Focus on Grade 9 and 10 students', 'Panemangaluru & Bengre schools', 'Repeated follow-ups & mentor visits'],
      },
      {
        num: '02',
        title: 'Scholarships & Study Materials',
        summary: 'Financial aid and educational kits for primary, high school and pre-university students.',
        detail: 'We have provided scholarships and essential study materials to primary school, high school and pre-university (PU) students, supporting educational needs and encouraging continued academic progress. Support includes textbooks, notebooks, stationery and other educational supplies.',
        highlights: ['₹1 Lakh+ scholarships awarded', 'Books, stationery & study kits', 'Support for primary, high school & PU'],
      },
    ],
  },
];

export default function Initiatives() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null); // stores { areaIndex, progIndex }
  const [readMoreArea, setReadMoreArea] = useState(null); // stores areaIndex for modal / detail view

  // Mobile stacked card swipe states
  const [mobileIndex, setMobileIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const currentArea = FOCUS_AREAS_DATA[activeTab];

  const toggleExpand = (areaIdx, progIdx) => {
    if (expandedCard?.areaIndex === areaIdx && expandedCard?.progIndex === progIdx) {
      setExpandedCard(null);
    } else {
      setExpandedCard({ areaIndex: areaIdx, progIndex: progIdx });
    }
  };

  // Lock background scroll and hide navbar when modal is open
  useEffect(() => {
    if (readMoreArea !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setReadMoreArea(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  }, [readMoreArea]);

  const goNext = () => {
    setHasSwiped(true);
    setMobileIndex((prev) => (prev + 1) % FOCUS_AREAS_DATA.length);
    setDragOffset(0);
  };

  const goPrev = () => {
    setHasSwiped(true);
    setMobileIndex((prev) => (prev - 1 + FOCUS_AREAS_DATA.length) % FOCUS_AREAS_DATA.length);
    setDragOffset(0);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    // Follow horizontally if swipe motion is primarily horizontal
    if (Math.abs(dx) > Math.abs(dy)) {
      setDragOffset(dx);
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping) return;
    setIsSwiping(false);
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dt = Date.now() - touchStartRef.current.time;
    const isFlick = dt < 300 && Math.abs(dx) > 30;

    if (dx < -45 || (isFlick && dx < 0)) {
      goNext();
    } else if (dx > 45 || (isFlick && dx > 0)) {
      goPrev();
    } else {
      setDragOffset(0);
    }
  };

  // Mouse Drag handlers (convenience for desktop responsive testers)
  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    touchStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const dx = e.clientX - touchStartRef.current.x;
    setDragOffset(dx);
  };

  const handleMouseUp = (e) => {
    if (!isSwiping) return;
    setIsSwiping(false);
    const dx = e.clientX - touchStartRef.current.x;
    if (dx < -45) {
      goNext();
    } else if (dx > 45) {
      goPrev();
    } else {
      setDragOffset(0);
    }
  };

  return (
    <section id="initiatives" className="relative overflow-hidden bg-slate-50/60 py-16 sm:py-24">
      {/* Intro slide hint animation styles */}
      <style>{`
        @keyframes cardSlideLeftRightHint {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20% { transform: translateX(32px) rotate(2.5deg); }
          45% { transform: translateX(-26px) rotate(-2deg); }
          70% { transform: translateX(12px) rotate(1deg); }
          85% { transform: translateX(-6px) rotate(-0.5deg); }
        }
        .animate-card-intro {
          animation: cardSlideLeftRightHint 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
      `}</style>

      {/* Background radial blurs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-leaf-dark shadow-sm">
              <Sparkles size={14} /> Comprehensive Initiatives
            </span> */}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Our 4 Core Focus Areas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Derived directly from our founding charter: empowering youth through practical skills, job opportunities, mental well-being, and community development.
            </p>
          </div>
        </Reveal>

        {/* ============================================================== */}
        {/* MOBILE VIEW ONLY (block on mobile/tablet, hidden on lg+):      */}
        {/* Stacked Cards with Interactive Swipe & Intro Slide Animation   */}
        {/* ============================================================== */}
        <div className="block lg:hidden mt-8">
          <Reveal>
            <div className="text-center mb-5">
              <span className="rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                Explore Initiatives
              </span>
            </div>
          </Reveal>

          {/* Swipe Hint Indicator Pill */}
          {/* <div className="mb-4 flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Focus Area 0{mobileIndex + 1} of 0{FOCUS_AREAS_DATA.length}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand shadow-sm animate-pulse">
              <ArrowLeft size={12} />
              <span>Swipe left / right</span>
              <ArrowRight size={12} />
            </span>
          </div> */}

          {/* Stacked Deck Container */}
          <div
            className="relative mx-auto h-[550px] w-full max-w-sm sm:max-w-md select-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {FOCUS_AREAS_DATA.map((area, idx) => {
              const diff = (idx - mobileIndex + FOCUS_AREAS_DATA.length) % FOCUS_AREAS_DATA.length;
              const isTop = diff === 0;
              const isSecond = diff === 1;
              const isThird = diff === 2;

              let zIndex = 0;
              let transformStyle = '';
              let opacityStyle = 0;
              let pointerEventsStyle = 'none';

              if (isTop) {
                zIndex = 30;
                opacityStyle = 1;
                pointerEventsStyle = 'auto';
                if (isSwiping && dragOffset !== 0) {
                  transformStyle = `translateX(${dragOffset}px) rotate(${dragOffset * 0.04}deg)`;
                } else {
                  transformStyle = 'translateX(0) translateY(0) scale(1) rotate(0deg)';
                }
              } else if (isSecond) {
                zIndex = 20;
                opacityStyle = 0.88;
                transformStyle = 'translateY(12px) scale(0.95)';
              } else if (isThird) {
                zIndex = 10;
                opacityStyle = 0.65;
                transformStyle = 'translateY(24px) scale(0.90)';
              } else {
                zIndex = 0;
                opacityStyle = 0;
                transformStyle = 'translateY(36px) scale(0.85)';
              }

              const isIntroSlide = isTop && mobileIndex === 0 && !hasSwiped && !isSwiping;

              return (
                <div
                  key={area.id}
                  className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl ${
                    isIntroSlide ? 'animate-card-intro' : ''
                  } ${isSwiping && isTop ? '' : 'transition-all duration-300 ease-out'}`}
                  style={{
                    zIndex,
                    opacity: opacityStyle,
                    transform: transformStyle,
                    pointerEvents: pointerEventsStyle,
                  }}
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-44 overflow-hidden rounded-t-3xl sm:h-48">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                    {/* <span className="absolute top-3 left-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                      Focus Area {area.num}
                    </span> */}
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col p-5">
                    <h4 className="text-lg font-bold text-navy-900">
                      {area.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {area.tagline}
                    </p>

                    {/* Sub-programmes bullet points */}
                    <div className="mt-3.5 border-t border-slate-100 pt-3">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {area.programmes.length} Key Programmes:
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {area.programmes.map((p) => (
                          <li key={p.num} className="text-xs text-slate-700 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                            <span className="truncate">{p.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 pt-4 flex items-center justify-between border-t border-slate-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab(idx);
                          setReadMoreArea(idx);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-navy-900 transition py-1.5 px-1"
                      >
                        <span>Read details</span>
                        <ArrowRight size={14} />
                      </button>

                      <Link
                        to={area.applyLink}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-brand hover:underline py-1.5 px-1"
                      >
                        Apply →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Swipe Controls & Dot Navigation */}
          <div className="mt-4 flex items-center justify-between px-3">
            {/* Previous Button */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous Focus Area"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-800 shadow-md transition active:scale-90"
            >
              <ChevronLeft size={20} className="text-brand" />
            </button>

            {/* 4 Indicator Dots */}
            <div className="flex items-center gap-2">
              {FOCUS_AREAS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setHasSwiped(true);
                    setMobileIndex(dotIdx);
                    setDragOffset(0);
                  }}
                  aria-label={`Jump to Focus Area 0${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    dotIdx === mobileIndex
                      ? 'w-7 bg-brand'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next Focus Area"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-800 shadow-md transition active:scale-90"
            >
              <ChevronRight size={20} className="text-brand" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW ONLY (hidden on mobile/tablet, block on lg+):     */}
        {/* Original Interactive Tab Selector & Featured Showcase          */}
        {/* ============================================================== */}
        <div className="hidden lg:block">
          {/* Tab Buttons (Responsive Horizontal Bar / Pills) */}
          <Reveal delay={100}>
            <div className="mt-10 flex items-center justify-center gap-3">
              {FOCUS_AREAS_DATA.map((area, i) => {
                const isActive = i === activeTab;
                return (
                  <button
                    key={area.id}
                    onClick={() => {
                      setActiveTab(i);
                      setExpandedCard(null);
                    }}
                    className={`flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-navy-950 to-navy-900 text-white shadow-xl shadow-navy-950/20 ring-2 ring-leaf scale-105'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-extrabold transition-all duration-300 ${isActive ? 'bg-leaf text-white rotate-3 scale-110' : 'bg-slate-100 text-slate-500'}`}>
                      {area.num}
                    </span>
                    <span className="transition-colors duration-200">{area.title}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active Focus Area Featured Showcase */}
          <Reveal delay={200}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-10 shadow-2xl shadow-navy-900/10 transition-all duration-500">
              <div key={activeTab} className="grid items-start gap-12 lg:grid-cols-12 animate-tab-pane">
                
                {/* Left Column: Title, Tagline, & Detailed Sub-programmes */}
                <div className="lg:col-span-7">
                  {/* <div className="flex items-center gap-2">
                    <span className="rounded-full bg-leaf-soft px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-leaf-dark">
                      {currentArea.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {currentArea.programmes.length} Specialized Programmes
                    </span>
                  </div> */}

                  <h3 className="mt-3 text-3xl font-bold text-navy-950 transition-colors duration-300 lg:text-4xl">
                    {currentArea.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600 transition-colors duration-300 lg:text-lg">
                    {currentArea.tagline}
                  </p>

                  {/* Sub-programmes Accordion List */}
                  <div className="mt-8 space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Programmes under {currentArea.title}:
                    </h4>

                    {currentArea.programmes.map((prog, pIdx) => {
                      const isExpanded = expandedCard?.areaIndex === activeTab && expandedCard?.progIndex === pIdx;
                      return (
                        <div
                          key={prog.num}
                          className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                            isExpanded
                              ? 'border-leaf/40 bg-leaf-soft/20 shadow-md ring-1 ring-leaf/30'
                              : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          {/* Header bar of sub-programme (clickable) */}
                          <button
                            type="button"
                            onClick={() => toggleExpand(activeTab, pIdx)}
                            className="flex w-full items-center justify-between p-4 text-left transition"
                          >
                            <div className="flex items-start gap-3.5 pr-2">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-navy-800 text-xs font-bold text-white shadow-sm">
                                {prog.num}
                              </span>
                              <div>
                                <h5 className="font-bold text-navy-900 sm:text-base">
                                  {prog.title}
                                </h5>
                                <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                                  {prog.summary}
                                </p>
                              </div>
                            </div>
                            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-transform duration-300 ${isExpanded ? 'rotate-180 text-leaf' : ''}`}>
                              <ChevronDown size={18} />
                            </span>
                          </button>

                          {/* Expanded details (Read More content) */}
                          {isExpanded && (
                            <div className="border-t border-leaf/15 bg-white p-5 pt-4 text-sm leading-relaxed text-slate-700 animate-fade">
                              <p className="leading-relaxed text-slate-600">
                                {prog.detail}
                              </p>

                              <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                                <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
                                  Key Focus & Impact:
                                </span>
                                <ul className="mt-2 space-y-1.5">
                                  {prog.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                      <CheckCircle2 size={14} className="text-leaf shrink-0" />
                                      <span>{h}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Direct Action Link */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={currentArea.applyLink}
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-leaf to-leaf-dark px-6 py-3.5 font-bold text-white shadow-lg shadow-leaf/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-leaf/40 active:translate-y-0"
                    >
                      <span>{currentArea.applyText}</span>
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setReadMoreArea(activeTab)}
                      className="group/eye inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-navy-800 transition-all duration-300 hover:border-brand/40 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
                    >
                      <Eye size={17} className="text-brand transition-transform duration-300 group-hover/eye:scale-110" />
                      <span>View All Details</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Real Brochure Photograph & Highlight Box */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="group relative w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-navy-950/15 transition-all duration-500 hover:shadow-navy-950/25">
                    <img
                      key={currentArea.image}
                      src={currentArea.image}
                      alt={currentArea.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade"
                    />
                    {/* Subtle overlay sweep */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                    
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md transition-all duration-300 group-hover:bg-white/95">
                      {/* <span className="text-[11px] font-bold uppercase tracking-wider text-leaf-dark">
                        Brochure Focus Area {currentArea.num}
                      </span> */}
                      <p className="font-display font-bold text-navy-950 text-base">
                        {currentArea.title}
                      </p>
                    </div>
                  </div>

                  {/* Quick Impact Metrics Card */}
                  <div className="mt-5 w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-pale/60 to-white p-5 transition-all duration-300 hover:shadow-md hover:border-brand/20">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Community Outreach
                    </h5>
                    <p className="mt-1 text-xs text-slate-600">
                      Active in Dakshina Kannada, Udupi, Uttara Kannada, Kasaragod and border areas, supporting rural youth and government schools.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Detail Modal: Complete Brochure Specs for a Focus Area (Portaled to document.body) */}
      {readMoreArea !== null && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-8 bg-navy-950/80 backdrop-blur-md animate-fade"
          onClick={() => setReadMoreArea(null)}
        >
          <div
            className="relative my-auto max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl animate-scale-up sm:p-8"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="rounded-full bg-leaf-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-leaf-dark">
                  {FOCUS_AREAS_DATA[readMoreArea].badge}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-navy-950 sm:text-3xl">
                  {FOCUS_AREAS_DATA[readMoreArea].title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {FOCUS_AREAS_DATA[readMoreArea].tagline}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReadMoreArea(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: All Detailed Programmes from Brochure */}
            <div className="mt-6 space-y-4">
              {FOCUS_AREAS_DATA[readMoreArea].programmes.map((p) => (
                <div key={p.num} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-leaf text-xs font-bold text-white">
                      {p.num}
                    </span>
                    <h4 className="font-bold text-navy-900 sm:text-base">{p.title}</h4>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {p.detail}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
                        <CheckCircle2 size={12} className="text-leaf" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <p className="text-xs text-slate-500">
                Want to participate or partner with CareerBridge for this initiative?
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setReadMoreArea(null)}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full sm:w-auto"
                >
                  Close
                </button>
                <Link
                  to={FOCUS_AREAS_DATA[readMoreArea].applyLink}
                  onClick={() => setReadMoreArea(null)}
                  className="rounded-xl bg-leaf px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-leaf-dark transition w-full sm:w-auto text-center"
                >
                  {FOCUS_AREAS_DATA[readMoreArea].applyText}
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}