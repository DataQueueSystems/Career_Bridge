import { Building2, ClipboardCheck, UserCheck, MapPin } from 'lucide-react';
import Counter from './Counter.jsx';
import Reveal from './Reveal.jsx';
import { TONES } from '../data/tones.js';

const ITEMS = [
  { icon: Building2, value: 100, suffix: '+', word1: 'Skill', word2: 'development' },
  { icon: ClipboardCheck, value: 300, suffix: '+', word1: 'Employee', word2: 'ability' },
  { icon: UserCheck, value: 500, suffix: '+', word1: 'Youth', word2: 'counselling' },
  { icon: MapPin, value: 50, suffix: '+', word1: 'Social', word2: 'Welfare' },
];

export default function Stats() {
  return (
    <div className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-6 lg:px-8 w-full max-w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-1 rounded-3xl bg-white p-2 shadow-2xl shadow-navy-900/10 ring-1 ring-slate-100 sm:gap-4 sm:p-6 overflow-hidden sm:overflow-visible">
        {ITEMS.map(({ icon: Icon, value, suffix, word1, word2 }, i) => {
          const t = TONES[i];
          return (
            <Reveal key={`${word1}-${word2}`} delay={i * 100}>
              <div className="flex min-w-0 flex-col items-center gap-1 rounded-xl p-1 text-center transition duration-300 hover:bg-brand-pale sm:flex-row sm:gap-3 sm:rounded-2xl sm:p-3 sm:text-left">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 ${t.soft} ${t.text}`}><Icon size={17} className="sm:hidden" /><Icon size={26} className="hidden sm:block" /></span>
                <div className="min-w-0">
                  <Counter value={value} suffix={suffix} className="block whitespace-nowrap font-display text-[clamp(0.65rem,3.8vw,1.1rem)] font-bold leading-tight text-navy-900 sm:text-3xl lg:text-4xl" />
                  <p className="text-[clamp(0.48rem,2.4vw,0.7rem)] font-medium leading-tight text-slate-500 sm:text-sm">
                    <span className="block sm:inline">{word1}</span>{' '}
                    <span className="block sm:inline">{word2}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
