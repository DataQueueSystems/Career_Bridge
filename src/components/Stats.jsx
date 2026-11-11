import {
  GraduationCap,
  Users,
  MessageSquare,
  BarChart2,
  ClipboardCheck,
  Briefcase,
  Building2,
  BookOpen,
} from 'lucide-react';
import Counter from './Counter.jsx';
import Reveal from './Reveal.jsx';

const ITEMS = [
  {
    icon: GraduationCap,
    value: 200,
    suffix: '+',
    label: 'Educational institutions reached',
  },
  {
    icon: Users,
    value: 8000,
    suffix: '+',
    label: 'Candidate-interview connections facilitated',
  },
  {
    icon: MessageSquare,
    value: 1000,
    suffix: '+',
    label: 'Youth counselled on career development & mental health',
  },
  {
    icon: BarChart2,
    value: 100,
    suffix: '+',
    label: 'Skill development seminars & webinars conducted',
  },
  {
    icon: ClipboardCheck,
    value: 5000,
    suffix: '+',
    label: 'Aptitude assessments conducted',
  },
  {
    icon: Briefcase,
    value: 300,
    suffix: '+',
    label: 'Candidates successfully placed',
  },
  {
    icon: Building2,
    value: 100,
    suffix: '+',
    label: 'Corporate partners connected for recruitment',
  },
  {
    icon: BookOpen,
    prefix: '₹',
    value: 1,
    suffix: ' Lakh+',
    label: 'Scholarships awarded',
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0D1F3C] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <Reveal>
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-brand">
            Our Impact
          </p>
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-white sm:text-3xl">
            Numbers That Tell Our Story
          </h2>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, value, suffix, prefix, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="group relative flex flex-col justify-between rounded-2xl bg-[#1A3A6B] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 sm:p-6">
                {/* Number (top-left) + Icon (top-right) */}
                <div className="flex items-start justify-between">
                  <Counter
                    prefix={prefix}
                    value={value}
                    suffix={suffix}
                    className="font-display text-3xl font-black leading-none text-white sm:text-4xl"
                  />
                  <span className="ml-2 shrink-0 text-brand">
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                </div>

                {/* Label */}
                <p className="mt-3 text-xs leading-snug text-slate-300 sm:text-sm">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
