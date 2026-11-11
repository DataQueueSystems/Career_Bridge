import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function CtaBand() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-brand to-navy-800 p-8 text-center text-white shadow-xl shadow-brand/20 sm:p-12 md:flex-row md:justify-between md:text-left">
          <span className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-leaf/35 blur-xl" />
          <span className="absolute -bottom-12 right-20 h-44 w-44 rounded-full bg-brand-light/35 blur-xl" />
          <span className="absolute inset-y-0 left-0 w-1.5 bg-leaf" />
          <div className="relative max-w-xl">
            <h2 className="text-3xl font-bold !text-white sm:text-4xl">Partner with CareerBridge Foundation</h2>
            <p className="mt-3 text-blue-100">Hire skilled youth or bring our programmes to your institution across Karnataka and Kerala.</p>
          </div>
          <Link to="/contact" className="group relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-navy-800 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-leaf-soft hover:text-leaf-dark">
            Contact us <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
