
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Award, BadgeCheck, Briefcase, Building2, CheckCircle2, ChevronLeft, ChevronRight,
  ClipboardCheck, ClipboardList, GraduationCap, Handshake, Link2, MessageCircleHeart, Play,
  Presentation, TrendingUp, UserCheck, Users,
} from 'lucide-react';
import logo from '../assets/careerbridge-foundation-logo.png';

/* ------------------------------------------------------------------ */
/* Background images: one per slide, same order as SLIDES.             */
/* Direct internet links (Pexels, free to use). Swap any link you like.*/
/* ------------------------------------------------------------------ */
const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
const BG_IMAGES = [
  px(3184663), // Career development
  px(3471028), // Youth Empowerment
  px(1595385), // Placements
  px(3184465), // Skill Programmes: group in a training session / workshop
];

/* Hero height: 'min-h-screen' = full screen, 'min-h-[50vh]' = half screen */
// const HERO_HEIGHT = 'min-h-screen';
/* Hero height: 'min-h-screen' = full screen, 'min-h-[70vh]' = 70% of screen */
// const HERO_HEIGHT = 'min-h-[70vh]';
const HERO_HEIGHT = 'lg:min-h-[calc(100vh-6rem)]';
/* ------------------------------------------------------------------ */
/* Slide content: edit text, numbers, links and icons here             */
/* ------------------------------------------------------------------ */
const CHIP_TONE = {
  brand: 'bg-brand-soft text-brand',
  leaf: 'bg-leaf-soft text-leaf-dark',
  sun: 'bg-sun-soft text-sun-deep',
};

const SLIDES = [
  {
    welcome: true,
    step: 'Opportunity begins with access',
    bg: BG_IMAGES[0],
    pill: 'Karnataka · Kerala · Rural communities',
    text: 'CareerBridge is a social-impact initiative of DQS, supporting young people through skills, employability, career guidance, counselling, and community programmes.',
    points: ['Skill & career development', 'Employability', 'Counselling & well-being', 'Community support'],
    primary: { to: '/initiatives', label: 'Get started' },
    secondary: { to: '/portfolio', label: 'See our impact' },
    orbit: [GraduationCap, Briefcase, Users, Building2],
    chips: [
      { icon: BadgeCheck, tone: 'leaf', label: 'Placement support', value: '300+ placed' },
      { icon: ClipboardCheck, tone: 'sun', label: 'Aptitude tests', value: '5,000+' },
    ],
  },
  {
    step: 'Youth Empowerment',
    bg: BG_IMAGES[1],
    value: 1000,
    suffix: '+',
    title: 'Youth Empowerment',
    color: 'text-brand',
    squiggle: '#FF6500',
    pill: 'Empowering youth',
    text: 'Career counselling and mental health support help young people navigate personal challenges and plan their future.',
    points: ['Skill development', 'Career guidance', 'Counselling & well-being'],
    primary: { to: '/initiatives', label: 'Explore initiatives' },
    secondary: { to: '/about', label: 'Our story' },
    icon: Users,
    grad: 'from-brand to-navy-800',
    orbit: [GraduationCap, MessageCircleHeart, Award, Users],
    chips: [
      { icon: MessageCircleHeart, tone: 'sun', label: 'Youth counselled', value: '1,000+' },
      { icon: Award, tone: 'leaf', label: 'Scholarships', value: '₹1 Lakh+' },
    ],
  },
  {
    step: 'Placements',
    bg: BG_IMAGES[2],
    value: 300,
    suffix: '+',
    title: 'Placement Opportunities',
    color: 'text-leaf-dark',
    squiggle: '#0066C5',
    pill: 'Placement & recruitment support',
    text: 'Job drives, campus recruitment, and placement support connect skilled youth with employers across industries.',
    points: ['Job drives', 'Campus recruitment', 'Startups to MNCs'],
    primary: { to: '/portfolio', label: 'See our portfolio' },
    secondary: { to: '/contact', label: 'Hire with us' },
    icon: Briefcase,
    grad: 'from-leaf to-leaf-dark',
    orbit: [Briefcase, Handshake, Building2, UserCheck],
    chips: [
      { icon: Handshake, tone: 'brand', label: 'Corporate partners', value: '100+' },
      { icon: Link2, tone: 'sun', label: 'Interview connections', value: '8,000+' },
    ],
  },
  {
    step: 'Skill Programmes',
    bg: BG_IMAGES[3],
    value: 100,
    suffix: '+',
    title: 'Skill-Development Programmes',
    color: 'text-sun-deep',
    squiggle: '#168BE8',
    pill: 'Job-ready skills',
    text: 'Practical training, free internships, seminars, and assessments build technical, professional, and soft skills.',
    points: ['Technical skills', 'Professional skills', 'Soft skills'],
    primary: { to: '/portfolio', label: 'View programmes' },
    secondary: { to: '/contact', label: 'Join Us' },
    icon: GraduationCap,
    grad: 'from-sun to-sun-deep',
    orbit: [GraduationCap, Presentation, ClipboardList, TrendingUp],
    chips: [
      { icon: ClipboardList, tone: 'brand', label: 'Aptitude assessments', value: '5,000+' },
      { icon: Presentation, tone: 'leaf', label: 'Seminars & webinars', value: '100+' },
    ],
  },
];
const TOTAL = SLIDES.length;
const DELAY = 6500;

/* ------------------------------------------------------------------ */
function CountUp({ to, suffix = '' }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }
    let raf; const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n.toLocaleString('en-IN')}{suffix}</>;
}

const Squiggle = ({ color }) => (
  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 14" fill="none" aria-hidden="true">
    <path d="M3 9 C 30 2, 50 14, 80 7 S 130 2, 160 8 S 200 11, 217 4" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray="260" className="animate-draw" />
  </svg>
);

/* floating stat chip */
function Chip({ chip, className = '' }) {
  const I = chip.icon;
  return (
    <div className={`absolute z-10 flex animate-floaty items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl shadow-navy-900/15 backdrop-blur ${className}`}>
      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${CHIP_TONE[chip.tone]}`}>
        <I size={22} />
      </span>
      <div> 
        <p className="text-xs text-slate-500">{chip.label}</p>
        <p className="font-display text-lg font-bold leading-tight text-navy-900">{chip.value}</p>
      </div>
    </div>
  );
}

/* right-hand side: only floating chips + logo badge, so the photo stays clear */
function Visual({ s }) {
  return (
    <div className="relative mx-auto h-56 w-full max-w-md sm:h-80 lg:h-[26rem]">
      {/* <Chip chip={s.chips[0]} className="right-0 top-[10%]" />
      <Chip chip={s.chips[1]} className="bottom-[10%] left-0 [animation-delay:-2.5s]" />
      <span className="absolute bottom-0 right-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-lg shadow-navy-900/15 backdrop-blur">
        <img src={logo} alt="CareerBridge Foundation" className="h-full w-full object-contain" />
      </span> */}
    </div>
  );
}

/* ------------------------------------------------------------------ */
export default function Home1() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const go = (n) => setIndex((n + TOTAL) % TOTAL);

  // auto scroll: restarts after every change, pauses while the mouse is over the hero
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setIndex((c) => (c + 1) % TOTAL), DELAY);
    return () => clearTimeout(t);
  }, [index, paused]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const slideClass = (i) =>
    `transition-all duration-700 ease-out ${
      i === index
        ? 'relative col-start-1 row-start-1 visible translate-x-0 opacity-100'
        : `pointer-events-none invisible absolute inset-x-0 top-0 opacity-0 ${i < index ? '-translate-x-12' : 'translate-x-12'}`
    }`;

  const arrow =
    'absolute top-[calc(50%-3.9rem)] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/70 text-navy-800 shadow-lg shadow-navy-900/10 backdrop-blur transition duration-300 hover:scale-110 hover:bg-brand hover:text-white active:scale-90 sm:top-[calc(50%-4.4rem)] sm:h-12 sm:w-12';

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="CareerBridge Foundation highlights"
      // className={`relative isolate flex flex-col justify-center overflow-hidden bg-gradient-to-b from-brand-pale to-brand-soft pb-52 pt-[5.25rem] sm:pb-56 ${HERO_HEIGHT}`}
    className={`relative isolate flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-pale via-brand-soft to-leaf-soft/60 pb-10 pt-[5.25rem] sm:pb-24 ${HERO_HEIGHT}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* background image slider: crossfades in sync with the slides
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true"> */}{/* background image slider: crossfades in sync with the slides */}
<div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <img
            key={s.step}
            src={s.bg}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover object-center ${i === index ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
            style={{ transition: 'opacity 1000ms ease-in-out, transform 8000ms ease-out' }}
          />
        ))}
        {/* left fade keeps text readable, right side shows the photo clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/55 sm:from-white/95 sm:via-white/80 sm:to-white/30 lg:via-white/65 lg:to-transparent" />
        {/* soft fade at the bottom for the journey tracker */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-brand-soft/90 to-transparent" />
      </div>

      <div className="pointer-events-none absolute -left-20 top-32 -z-10 h-64 w-64 rounded-full bg-leaf/15 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl" />

      {/* slides */}
      <div className="grid">
        {SLIDES.map((s, i) => {
          const active = index === i;
          return (
            <div key={s.step} className={slideClass(i)} aria-hidden={!active}>
         <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-10">
                {/* key restarts the entrance animations every time the slide comes in */}
                <div key={active ? 'on' : 'off'} className="min-w-0">
                  {/* <p className="animate-rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-leaf-dark shadow-sm ring-1 ring-leaf/20 sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-leaf" /> {s.pill}
                  </p> */}

                  {s.welcome ? (
                    <h1 className="animate-rise mt-4 text-3xl font-bold leading-[1.2] [animation-delay:120ms] sm:text-4xl lg:text-5xl xl:text-6xl">
                      Opportunity begins with{' '}
                      <span className="relative inline-block text-brand">access.<Squiggle color="#FF6500" /></span>
                    </h1>
                  ) : (
                    <h2 className="animate-rise mt-4 text-3xl font-bold leading-[1.2] [animation-delay:120ms] sm:text-4xl lg:text-5xl xl:text-6xl">
                      <span className={`relative inline-block ${s.color}`}>
                        {active ? <CountUp to={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
                        <Squiggle color={s.squiggle} />
                      </span>
                      <br />
                      {s.title}
                    </h2>
                  )}

                  <p className="animate-rise mt-4 max-w-xl text-base leading-7 text-slate-700 [animation-delay:240ms] sm:mt-5 sm:text-lg sm:leading-relaxed">{s.text}</p>

                {/* points row: wrap neatly on small screens */}
<ul className="animate-rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 [animation-delay:340ms] sm:mt-6 sm:gap-x-5 sm:gap-y-2">
  {s.points.map((p) => (
    <li key={p} className="flex items-center gap-1.5 text-xs font-medium text-navy-800 sm:gap-2 sm:text-sm xl:text-base">
      <CheckCircle2 size={18} className="shrink-0 text-leaf" /> {p}
    </li>
  ))}
</ul>

{/* buttons row: stack gracefully on mobile */}
<div className="animate-rise mt-7 flex flex-wrap items-center gap-3 [animation-delay:440ms] sm:mt-7 sm:gap-5">
  <Link
    to={s.primary.to}
    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:bg-navy-800 sm:px-7 sm:py-3.5 sm:text-base"
  >
    {s.primary.label} <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
  {/* <Link to={s.secondary.to} className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-800 sm:gap-3 sm:text-base">
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-leaf-dark shadow-md transition duration-300 group-hover:bg-leaf group-hover:text-white sm:h-12 sm:w-12">
      <span className="absolute inset-0 animate-ring rounded-full border-2 border-leaf" />
      <Play size={18} fill="currentColor" />
    </span>
    {s.secondary.label}
  </Link> */}
</div>
<div className="mt-3 flex w-full items-center justify-center gap-1 sm:hidden" role="group" aria-label="Choose a highlight">
  {SLIDES.map((slide, slideIndex) => (
    <button
      key={slide.step}
      type="button"
      onClick={() => go(slideIndex)}
      aria-label={`Show ${slide.step}`}
      aria-current={active && slideIndex === index ? 'true' : undefined}
      className="flex h-9 w-8 items-center justify-center"
    >
      <span className={`h-2 rounded-full transition-all ${slideIndex === index ? 'w-5 bg-brand' : 'w-2 bg-navy-800/30'}`} />
    </button>
  ))}
</div>
                </div>

                <div key={active ? 'v-on' : 'v-off'} className="hidden animate-rise [animation-delay:200ms] lg:block">
                  <Visual s={s} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* < > arrows, centred on the left and right edges */}
      <button onClick={() => go(index - 1)} aria-label="Previous slide" className={`${arrow} hidden left-2 sm:flex sm:left-5`}>
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => go(index + 1)} aria-label="Next slide" className={`${arrow} hidden right-2 sm:flex sm:right-5`}>
        <ChevronRight size={24} />
      </button>

      {/* journey tracker: connects all slides, line fills as you move along */}
      {/* <div className="absolute inset-x-0 bottom-24 z-20 px-4 sm:bottom-28">
        <div className="relative mx-auto flex max-w-3xl items-start justify-between">
          <div className="absolute left-12 right-12 top-[15px] h-0.5 rounded-full bg-brand/20 sm:left-16 sm:right-16">
            <div className="h-full rounded-full bg-gradient-to-r from-leaf to-brand transition-all duration-700 ease-out" style={{ width: `${(index / (TOTAL - 1)) * 100}%` }} />
          </div>
          {SLIDES.map((s, i) => {
            const done = i < index;
            const current = i === index;
            return (
              <button key={s.step} onClick={() => go(i)} aria-label={`Go to ${s.step}`} aria-current={current} className="group relative flex w-24 flex-col items-center sm:w-32">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    current
                      ? 'scale-110 border-brand bg-brand text-white shadow-lg shadow-brand/40'
                      : done
                        ? 'border-leaf bg-leaf text-white'
                        : 'border-brand/30 bg-white text-brand group-hover:border-brand'
                  }`}
                >
                  {done ? <CheckCircle2 size={16} /> : <span className={`h-2.5 w-2.5 rounded-full ${current ? 'bg-white' : 'bg-brand/40'}`} />}
                </span>
                <span className={`mt-2 text-center text-[11px] font-semibold leading-tight transition-colors duration-300 sm:text-sm ${current ? 'text-brand' : 'text-slate-500 group-hover:text-navy-800'}`}>
                  {s.step}
                </span>
              </button>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}