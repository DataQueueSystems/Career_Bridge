import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function CtaBand() {
  return (
    <div className="px-4 py-8 sm:py-16 lg:py-20">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-brand p-6 sm:p-10 lg:p-12 text-white shadow-2xl shadow-navy-950/25 border border-white/10">
          {/* Decorative ambient lights */}
          <span className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-leaf/25 blur-2xl" />
          <span className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-brand-light/30 blur-3xl" />
          <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-leaf via-sun to-brand" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="max-w-2xl text-left">
              {/* Badge */}
              {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-leaf-lime backdrop-blur-md border border-white/15">
                <Sparkles size={13} className="text-leaf-lime" /> Collaborate for Real Impact
              </span> */}

              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                Partner with CareerBridge Foundation
              </h2>

              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-blue-100/90 max-w-xl">
                Hire skilled, pre-screened youth or bring our domain training and counselling programmes to your institution across Karnataka and Kerala.
              </p>

              {/* Trust Indicators / Badges on Mobile & Desktop */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-leaf-lime shrink-0" /> 100+ Hiring Partners
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-leaf-lime shrink-0" /> 200+ Institution Network
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-leaf-lime shrink-0" /> Zero Recruitment Cost
                </span>
              </div>
            </div>

            {/* Right Buttons / Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-navy-950 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-soft hover:text-leaf-dark active:scale-[0.98] text-center"
              >
                <span>Partner With Us</span>
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 text-brand" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 active:scale-[0.98] text-center"
              >
                <span>View Track Record</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
