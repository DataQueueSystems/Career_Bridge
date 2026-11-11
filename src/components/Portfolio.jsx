import { Building2, Link2, MessageCircleHeart, Award, Presentation, ClipboardList, BadgeCheck, Handshake, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';
import CtaBand from './CtaBand.jsx';
import SectionHeading from './SectionHeading.jsx';
import { IMPACT, PROGRAMMES } from '../data/content.js';
import { TONES } from '../data/tones.js';

const IMPACT_ICONS = [Building2, Link2, MessageCircleHeart, Award, Presentation, ClipboardList, BadgeCheck, Handshake];
const PROGRAMME_IMAGES = [
  '3184663',
  '3471028',
  '3184465',
  '1595385',
  '3184663',
  '1595385',
  '3471028',
  '3184465',
  '3184663',
  '1595385',
  '3471028',
  '3184465',
  '1595385',
];
import { useEffect, useRef } from 'react';
import Stats from './Stats.jsx';
export default function Portfolio() {
    const ref = useRef(null);
  const paused = useRef(false);
  const timer = useRef(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // start on the middle copy so you can scroll both directions
    el.scrollLeft = el.scrollWidth / 3;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SPEED = 40; // px per second
    let pos = el.scrollLeft;
    let last = performance.now();
    let raf;

    const wrap = () => {
      const copy = el.scrollWidth / 3;
      if (el.scrollLeft >= copy * 2) el.scrollLeft -= copy;
      else if (el.scrollLeft <= 0) el.scrollLeft += copy;
    };

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (paused.current || drag.current.active || reduce) {
        pos = el.scrollLeft; // follow the user's manual movement
      } else {
        pos += SPEED * dt;
        el.scrollLeft = pos;
      }
      wrap();
      pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    el.addEventListener('scroll', wrap, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', wrap);
      clearTimeout(timer.current);
    };
  }, []);

  /* hover (desktop) */
  const onEnter = () => { paused.current = true; };
  const onLeave = () => { paused.current = false; };

  /* touch (mobile): native swipe, pause while touching, resume after a moment */
  const onTouchStart = () => {
    clearTimeout(timer.current);
    paused.current = true;
  };
  const onTouchEnd = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { paused.current = false; }, 2500);
  };

  /* mouse drag (desktop) */
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { active: true, startX: e.clientX, startLeft: ref.current.scrollLeft };
    ref.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    ref.current.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const onPointerUp = (e) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    ref.current.releasePointerCapture?.(e.pointerId);
  };
  return (
    <section id="portfolio" className="bg-white">
      {/* Impact */}
      <div className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our impact at a glance" compact />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {IMPACT.map((s, i) => {
              const Icon = IMPACT_ICONS[i];
              const t = TONES[i % TONES.length];
              return (
                <Reveal key={s.title} delay={(i % 4) * 100}>
                  <div className={`group relative flex h-full min-h-40 flex-col items-center rounded-2xl border border-slate-200 bg-white p-3 text-center transition duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:z-10 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-3 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-2xl [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-navy-900/15 sm:min-h-0 sm:p-6 ${t.ring}`}>
                    <span className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full sm:h-16 sm:w-16 ${t.soft} ${t.text} transition duration-300 group-hover:scale-110`}><Icon size={20} className="sm:hidden" /><Icon size={28} className="hidden sm:block" /></span>
                    <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} className="mt-2 block max-w-full break-words font-display text-xl font-bold leading-tight text-navy-900 sm:mt-4 sm:text-4xl" />
                    <h3 className="mt-1 w-full text-xs font-semibold leading-snug text-navy-800 sm:text-base">{s.title}</h3>
                    {s.text && <p className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-sm">{s.text}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Stats/> */}

        <SectionHeading title="What we do on the ground" />
      {/* Programmes */}
         <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="cursor-grab select-none overflow-x-auto pb-14 pt-12 active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      style={{
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
      }}
    >
      
      <div className="flex w-max">
        {[0, 1, 2].map((copy) =>
          PROGRAMMES.map(({ title, text }, i) => {
            const t = TONES[i % TONES.length];
            return (
              <div
                key={`${copy}-${title}`}
                aria-hidden={copy !== 1}
                className="mr-5 w-[280px] shrink-0 sm:mr-6 sm:w-[360px]"
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10 ${t.ring}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/${PROGRAMME_IMAGES[i]}/pexels-photo-${PROGRAMME_IMAGES[i]}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1.5 bg-brand" />
                  </div>
                  <div className="min-w-0 flex-1 p-5">
                    <h3 className="text-lg font-bold transition-colors group-hover:text-brand">{title}</h3>
                    <p
                      lang="en"
                      className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base"
                      style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
                    >
                      {text}
                    </p>
                  </div>
                </article>
              </div>
            );
          })
        )}
      </div>
    </div>

      <CtaBand />
    </section>
  );
}
