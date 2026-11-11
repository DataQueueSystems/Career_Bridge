import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/careerbridge-foundation-logo-white.png';
import { NAV, CONTACT, FOCUS_AREAS } from '../data/content.js';
import AnimatedBridgeCanvas from './AnimatedBridgeCanvas.jsx';

const H = ({ children }) => <h4 className="mb-4 text-lg font-semibold !text-white">{children}</h4>;
const link = 'transition duration-200 hover:pl-1 hover:text-leaf-lime';

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#030C1B] via-navy-950 to-[#020813] text-blue-100">
      
      {/* ======================================================== */}
      {/* FLOATING BRIDGE ANIMATION PLAYING BEHIND FOOTER          */}
      {/* ======================================================== */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex w-full items-end justify-center overflow-hidden translate-y-3 sm:translate-y-6 lg:translate-y-8 opacity-40 sm:opacity-50"
        aria-hidden="true"
      >
        <AnimatedBridgeCanvas />
      </div>

      {/* Atmospheric ambient glow */}
      <div className="pointer-events-none absolute -left-20 top-6 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-6 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

      {/* ======================================================== */}
      {/* MAIN FOOTER DIRECTORY & CONTENT (LIFTED HIGHER UP)       */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-36 lg:px-8 lg:pt-14 lg:pb-44 sm:grid-cols-2 lg:grid-cols-4">
        <div className="-mt-1 sm:-mt-2">
          <img src={logo} alt="CareerBridge Foundation" className="h-auto w-[220px] object-contain sm:w-[240px]" />
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-brand">
            Connecting Youth · Building Skills · Creating Opportunities
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            A social-impact initiative of DQS, supporting youth through practical skills, career development, counselling, and community programmes across Karnataka and Kerala.
          </p>
        </div>
        <div>
          <H>Quick links</H>
          <ul className="space-y-2 text-sm">
            {NAV.map(({ path, label }) => <li key={path}><Link to={path} className={link}>{label}</Link></li>)}
            <li><Link to="/apply/job" className={link}>Apply for Job</Link></li>
            <li><Link to="/apply/skill-development" className={link}>Apply for Skill Development</Link></li>
          </ul>
        </div>
        <div>
          <H>Focus areas</H>
          <ul className="space-y-2 text-sm">{FOCUS_AREAS.map(({ title }) => <li key={title}><Link to="/initiatives" className={link}>{title}</Link></li>)}</ul>
        </div>
        <div>
          <H>Contact</H>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-leaf-lime" />{CONTACT.region}</li>
            <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-leaf-lime" /><a href={`mailto:${CONTACT.email}`} className="break-all hover:text-leaf-lime">{CONTACT.email}</a></li>
            {CONTACT.phone && <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-leaf-lime" />{CONTACT.phone}</li>}
          </ul>
        </div>
      </div>

      {/* ======================================================== */}
      {/* COPYRIGHT BANNER                                         */}
      {/* ======================================================== */}
      <div className="relative z-10 border-t border-white/10 py-1 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} CareerBridge Foundation. All rights reserved.
      </div>
    </footer>
  );
}
