import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Squiggle = ({ color = '#FF6500' }) => (
  <svg className="absolute left-0 w-full" style={{ bottom: '-0.15em' }} viewBox="0 0 220 14" fill="none" aria-hidden="true">
    <path d="M3 9 C 30 2, 50 14, 80 7 S 130 2, 160 8 S 200 11, 217 4" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="260" className="animate-draw" />
  </svg>
);

export default function PageHeader({
  title,
  children,
  badge,
  bgImage,
  imagePos = 'object-top sm:object-[center_top]',
  minHeight = 'min-h-[26rem] sm:min-h-[32rem] lg:min-h-[25rem]',
  className = '',
  overlayClassName,
}) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | CareerBridge Foundation`;
    }
  }, [title]);

  return (
    <header className={`relative isolate flex ${minHeight} flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-pale via-brand-soft to-leaf-soft/60 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 ${className}`}>
      {/* Background image & exact same opacity overlays as Hero page */}
      {bgImage && (
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <img
            src={bgImage}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${imagePos}`}
          />
          {/* Hero-matched white gradient overlay: photo visible through opacity */}
          <div className={overlayClassName || "absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/55 sm:from-white/95 sm:via-white/85 sm:to-white/60 lg:via-white/75"} />
          {/* Soft fade at the bottom matching hero journey tracker */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-soft/80 to-transparent" />
        </div>
      )}

      {/* Hero ambient blurred glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-64 w-64 rounded-full bg-leaf/15 blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-brand-light/20 blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl lg:max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-md">
          <Link to="/" className="transition hover:text-brand">Home</Link>
          <ChevronRight size={14} className="text-leaf" />
          <span className="text-leaf-dark font-bold">{title}</span>
        </nav>

        {/* Hero-matched Pill Badge */}
        {badge && (
          <div className="mt-3">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-leaf-dark shadow-sm ring-1 ring-leaf/20 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-leaf" /> {badge}
            </p>
          </div>
        )}

        {/* Main Title - Dark Navy with Squiggle */}
        <h1 className="animate-rise mt-4 text-3xl font-bold leading-[1.2] tracking-tight text-navy-950 sm:text-4xl lg:text-5xl xl:text-6xl max-w-5xl mx-auto">
          <span className="relative inline-block pb-5">
            {title}
            <Squiggle color="#FF6500" />
          </span>
        </h1>

        {/* Subtitle / Description */}
        {children && (
          <p className="animate-rise mx-auto mt-6 max-w-3xl text-center text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-lg">
            {children}
          </p>
        )}
      </div>
    </header>
  );
}
