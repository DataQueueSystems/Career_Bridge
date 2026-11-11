// import { Home, Sprout, Building2, ChevronDown } from 'lucide-react';
// import Reveal from './Reveal.jsx';

// const B = ({ children }) => <strong className="font-semibold text-navy-800">{children}</strong>;

// const JOURNEY = [
//   { icon: Home, title: 'Village', text: 'Non-metro cities and rural communities', tone: 'bg-leaf-soft text-leaf-dark' },
//   { icon: Sprout, title: 'Skills & assessment', text: 'Aptitude tests, counselling and career guidance', tone: 'bg-sun-soft text-sun-deep' },
//   { icon: Building2, title: 'Corporate', text: 'Startups, established companies and MNCs', tone: 'bg-brand-soft text-brand' },
// ];

// export default function About() {
//   return (
//     <section id="about" className="bg-white py-16 sm:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           <Reveal>
//             <div className="relative mx-auto max-w-md rounded-[2rem] bg-gradient-to-br from-brand-soft to-leaf-soft p-6 sm:p-8">
//               <p className="mb-5 text-center font-display text-2xl font-bold text-navy-900">“Village to Corporate”</p>
//               <ol className="space-y-1">
//                 {JOURNEY.map(({ icon: Icon, title, text, tone }, i) => (
//                   <li key={title}>
//                     <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md shadow-navy-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//                       <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${tone}`}><Icon size={22} /></span>
//                       <div><h3 className="text-lg font-bold">{title}</h3><p className="text-sm text-slate-500">{text}</p></div>
//                     </div>
//                     {i < JOURNEY.length - 1 && <ChevronDown className="mx-auto my-1 animate-floaty text-brand" size={22} />}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </Reveal>

//           <div className="space-y-5 text-base leading-relaxed sm:text-lg text-justify">
//             <Reveal>
//               <p>DQS is an IT company engaged in IT services and software development, with client projects across <B>India, the UAE, and the UK</B>. As part of our business activities, we have started social-impact initiatives and established a dedicated division for <B>social-impact projects</B>, voluntarily undertaking social-impact activities as part of our commitment to supporting the community.</p>
//             </Reveal>
//             <Reveal delay={100}>
//               <p>As part of this initiative, we have established a dedicated <B>Skill Development &amp; Employability</B> Division focused on empowering youth through <B>skill development, scholarships, career guidance, counselling, and employment opportunities.</B></p>
//             </Reveal>
//             <Reveal delay={200}>
//               <p>Under our <B>Youth Skill Development &amp; Employability Programme</B>, we have specifically focused on the <B>Dakshina Kannada and Udupi districts of Karnataka</B>, with the objective of providing job placement and career opportunities to youth. With the vision and motto <B>“Village to Corporate,”</B> the primary objective of this campaign is to connect skilled youth, particularly from <B>non-metro cities and rural communities</B>, with suitable employment opportunities in startups, established companies, and MNCs.</p>
//             </Reveal>
//             <Reveal delay={300}>
//               <p>Through these efforts, we have reached out to <B>more than 90 educational institutions</B> across different domains and courses. We have conducted <B>pre-assessment and aptitude tests for more than 4,000 students</B> and have successfully supported the placement of <B>363 candidates</B>, ranging from startups to MNCs, through our social-impact activities.</p>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Home, Sprout, Building2, ChevronDown, Globe, GraduationCap, MapPin, TrendingUp } from 'lucide-react';
import Reveal from './Reveal.jsx';

const B = ({ children }) => (
  <strong className="box-decoration-clone bg-gradient-to-t from-sun-soft to-transparent bg-[length:100%_45%] bg-bottom bg-no-repeat font-semibold text-navy-800">
    {children}
  </strong>
);

const JOURNEY = [
  { icon: Home, title: 'Communities', text: 'Rural areas and non-metro cities', tone: 'bg-leaf-soft text-leaf-dark' },
  { icon: Sprout, title: 'Skills & guidance', text: 'Training, counselling, and career planning', tone: 'bg-sun-soft text-sun-deep' },
  { icon: Building2, title: 'Opportunities', text: 'Education, employment, and well-being', tone: 'bg-brand-soft text-brand' },
];

/* small icon badge shown beside each paragraph */
const BADGES = [
  { icon: Globe, tone: 'bg-brand-soft text-brand' },
  { icon: GraduationCap, tone: 'bg-leaf-soft text-leaf-dark' },
  { icon: MapPin, tone: 'bg-sun-soft text-sun-deep' },
  { icon: TrendingUp, tone: 'bg-brand-soft text-brand' },
];

const ABOUT_CSS = `
@keyframes ab-dash { to { stroke-dashoffset: -28; } }
@keyframes ab-drift { 0% { transform: translateX(-12px); } 50% { transform: translateX(14px); } 100% { transform: translateX(-12px); } }
@keyframes ab-sun { 0%,100% { transform: scale(1); opacity:.9; } 50% { transform: scale(1.15); opacity:1; } }
@keyframes ab-blink { 0%,100% { opacity:.25; } 50% { opacity:1; } }
@keyframes ab-spin { to { transform: rotate(360deg); } }
.ab-dash { stroke-dasharray: 6 8; animation: ab-dash 1.6s linear infinite; }
.ab-drift { animation: ab-drift 9s ease-in-out infinite; }
.ab-drift-slow { animation: ab-drift 13s ease-in-out infinite reverse; }
.ab-sun { transform-box: fill-box; transform-origin: center; animation: ab-sun 4s ease-in-out infinite; }
.ab-blink { animation: ab-blink 3s ease-in-out infinite; }
.ab-spin { animation: ab-spin 40s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .ab-dash, .ab-drift, .ab-drift-slow, .ab-sun, .ab-blink, .ab-spin { animation: none; }
}
`;

/* vector illustration: village  ->  corporate skyline */
function JourneyVector() {
  return (
    <svg viewBox="0 0 400 150" className="h-auto w-full" role="img" aria-label="Illustration of a path from community to opportunity">
      {/* sun */}
      <circle className="ab-sun fill-sun/80" cx="62" cy="34" r="16" />
      <circle className="ab-sun fill-sun/25" cx="62" cy="34" r="26" />

      {/* clouds */}
      <g className="ab-drift fill-white">
        <ellipse cx="150" cy="30" rx="22" ry="8" />
        <ellipse cx="166" cy="25" rx="14" ry="8" />
      </g>
      <g className="ab-drift-slow fill-white/90">
        <ellipse cx="270" cy="20" rx="18" ry="6" />
        <ellipse cx="282" cy="16" rx="11" ry="6" />
      </g>

      {/* hills */}
      <path d="M0 150 L0 112 Q55 78 120 108 T250 122 L250 150 Z" className="fill-leaf/35" />
      <path d="M0 150 L0 126 Q70 102 140 124 T260 132 L260 150 Z" className="fill-leaf/55" />

      {/* village: house + trees */}
      <g>
        <rect x="38" y="104" width="30" height="22" rx="2" className="fill-white" />
        <path d="M33 106 L53 88 L73 106 Z" className="fill-sun-deep" />
        <rect x="48" y="113" width="9" height="13" rx="1" className="fill-brand" />
        <rect x="59" y="110" width="6" height="6" rx="1" className="fill-brand/40" />
        <rect x="82" y="108" width="3" height="16" className="fill-navy-800/70" />
        <circle cx="83.5" cy="104" r="9" className="fill-leaf-dark" />
        <rect x="106" y="114" width="3" height="12" className="fill-navy-800/70" />
        <circle cx="107.5" cy="111" r="7" className="fill-leaf" />
      </g>

      {/* corporate skyline */}
      <g>
        <rect x="288" y="62" width="30" height="88" rx="2" className="fill-brand" />
        <rect x="322" y="82" width="26" height="68" rx="2" className="fill-navy-800" />
        <rect x="352" y="48" width="32" height="102" rx="2" className="fill-brand/80" />
        <rect x="262" y="98" width="22" height="52" rx="2" className="fill-navy-800/80" />
        {[70, 82, 94, 106, 118, 130].map((y, i) => (
          <g key={y} className="fill-white">
            <rect x="294" y={y} width="5" height="5" rx="1" className="ab-blink" style={{ animationDelay: `${i * 0.4}s` }} />
            <rect x="306" y={y} width="5" height="5" rx="1" className="ab-blink" style={{ animationDelay: `${i * 0.4 + 1.2}s` }} />
          </g>
        ))}
        {[58, 72, 86, 100, 114, 128].map((y, i) => (
          <g key={y} className="fill-white">
            <rect x="358" y={y} width="5" height="5" rx="1" className="ab-blink" style={{ animationDelay: `${i * 0.5 + 0.6}s` }} />
            <rect x="371" y={y} width="5" height="5" rx="1" className="ab-blink" style={{ animationDelay: `${i * 0.5 + 1.6}s` }} />
          </g>
        ))}
        {[92, 106, 120].map((y, i) => (
          <rect key={y} x="330" y={y} width="5" height="5" rx="1" className="ab-blink fill-white" style={{ animationDelay: `${i * 0.7}s` }} />
        ))}
      </g>

      {/* journey path with a travelling dot */}
      <path id="ab-path" d="M70 128 C130 92, 200 150, 262 112" fill="none" className="ab-dash stroke-brand" strokeWidth="2.5" strokeLinecap="round" />
      <circle r="5" className="fill-sun-deep">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath href="#ab-path" />
        </animateMotion>
      </circle>
    </svg>
  );
}

/* dotted-grid vector used as a background accent */
function DotGrid({ className = '' }) {
  return (
    <svg className={`pointer-events-none absolute text-brand/25 ${className}`} width="160" height="160" aria-hidden="true">
      <defs>
        <pattern id="ab-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="160" height="160" fill="url(#ab-dots)" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-pale/60 py-16 sm:py-24">
      <style>{ABOUT_CSS}</style>

      {/* decorative background */}
      <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-brand-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <DotGrid className="right-6 top-8 hidden sm:block" />
      <DotGrid className="bottom-8 left-6 hidden lg:block" />
      <svg className="ab-spin pointer-events-none absolute -right-16 top-1/3 hidden h-56 w-56 text-brand/15 lg:block" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="4" r="3" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-9 text-center sm:mb-12">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />
            About us
          </span> */}
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Who we are<span className="text-brand">.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Opportunity begins with access to skills, guidance, and meaningful career opportunities.
          </p>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-brand to-leaf" />
        </Reveal>
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-0">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              {/* soft offset shape behind the card */}
              <div className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-gradient-to-br from-brand/10 to-leaf/20" />

              <div className="relative rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-brand-soft to-leaf-soft p-4 shadow-xl shadow-navy-900/10 transition duration-500 hover:shadow-2xl sm:rounded-[2rem] sm:p-8">
                <p className="mb-3 text-center font-display text-xl font-bold text-navy-900 sm:mb-4 sm:text-2xl">“Opportunity begins with access.”</p>

                {/* vector illustration */}
                <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-white/80 to-white/40 ring-1 ring-white/80 transition-transform duration-500 hover:scale-[1.02] sm:mb-5">
                  <JourneyVector />
                </div>

                <ol className="space-y-2 sm:space-y-1">
                  {JOURNEY.map(({ icon: Icon, title, text, tone }, i) => (
                    <li key={title}>
                      <div className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-white p-3 shadow-md shadow-navy-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-4 sm:p-4">
                        <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand to-leaf transition-all duration-300 group-hover:w-1.5" />
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 sm:rounded-full ${tone} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                          <Icon size={22} />
                        </span>
                        <div className="min-w-0"><h3 className="text-base font-bold sm:text-lg">{title}</h3><p className="text-sm leading-snug text-slate-500">{text}</p></div>
                      </div>
                      {i < JOURNEY.length - 1 && <ChevronDown className="mx-auto my-1 animate-floaty text-brand" size={22} />}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          {/* timeline-style paragraphs */}
          <div className="relative space-y-4 text-base leading-relaxed sm:space-y-5 sm:text-md">
            {[
              { title: 'About CareerBridge', content: <><B>CareerBridge is a social-impact initiative of DQS</B>, an IT company engaged in IT services and software development, with client projects across India, the UAE, and the UK. Established as a dedicated division under DQS’s Social Impact Project (SIP), CareerBridge undertakes community development with a commitment to youth empowerment and social well-being.</> },
              { title: 'What we do', content: <>Our work brings together <B>skill development, employability, career development, scholarships, career guidance, youth counselling, and well-being support</B>. We help young people enhance their abilities, explore career opportunities, and prepare for a successful professional future.</> },
              { title: 'Rooted in our communities', content: <>Our work reaches <B>Dakshina Kannada, Udupi, Uttara Kannada, Kasaragod, and Karnataka–Kerala border regions</B>, as well as other parts of Karnataka and Kerala, with a special emphasis on rural communities and non-metro cities.</> },
              { title: 'An inclusive future', content: <>Through our programmes and outreach, we strive to ensure young people, regardless of geographical background, can access the <B>guidance, support, and opportunities</B> needed to build meaningful, sustainable careers.</> },
            ].map((para, i) => {
              const { icon: Icon, tone } = BADGES[i];
              return (
                <Reveal key={para.title} delay={i * 100}>
                  <article className="group relative flex gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5 sm:gap-4 sm:border-transparent sm:bg-transparent sm:p-2 sm:shadow-none sm:hover:bg-white/60">
                    <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone} shadow-sm ring-4 ring-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-11 sm:w-11`}>
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 font-display text-lg font-bold leading-tight text-navy-900 transition-colors duration-300 group-hover:text-brand">{para.title}</h3>
                      <p className="text-left text-sm leading-relaxed text-slate-600 sm:text-base">{para.content}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}