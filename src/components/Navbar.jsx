import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import logo from '../assets/careerbridge-foundation-logo.png';
import { NAV } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [applyDropdownOpen, setApplyDropdownOpen] = useState(false);
  const [mobileApplyOpen, setMobileApplyOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setApplyDropdownOpen(false);
    setMobileApplyOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setApplyDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isApplyActive = pathname.startsWith('/apply');

  const desktop = ({ isActive }) =>
    `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-leaf text-white shadow-md shadow-leaf/30'
        : 'text-navy-800 hover:-translate-y-0.5 hover:bg-leaf-soft hover:text-leaf-dark'
    }`;

  const mobile = ({ isActive }) =>
    `block rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
      isActive ? 'bg-leaf text-white' : 'text-navy-800 hover:translate-x-1 hover:bg-leaf-soft'
    }`;

  return (
    <header className="fixed inset-x-3 top-3 z-40 animate-slide-down sm:inset-x-6 lg:inset-x-10">
      <div
        className={`mx-auto max-w-7xl overflow-visible rounded-2xl border border-white/60 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? 'border-brand/10 bg-white/95 shadow-xl shadow-navy-900/15'
            : 'border-brand/10 bg-white/85 shadow-lg shadow-navy-900/5'
        }`}
      >
        <nav className="flex h-[4.5rem] items-center justify-between px-4 sm:px-6" aria-label="Main">
          <Link to="/" className="shrink-0 transition-transform duration-300 hover:scale-105" aria-label="CareerBridge Foundation home">
            <img src={logo} alt="CareerBridge Foundation" className="h-14 w-auto max-w-[200px] object-contain sm:max-w-[220px]" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} end={path === '/'} className={desktop}>{label}</NavLink>
              </li>
            ))}

            {/* Apply Dropdown for Desktop */}
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setApplyDropdownOpen(!applyDropdownOpen)}
                onMouseEnter={() => setApplyDropdownOpen(true)}
                aria-expanded={applyDropdownOpen}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isApplyActive
                    ? 'bg-leaf text-white shadow-md shadow-leaf/30'
                    : 'text-navy-800 hover:-translate-y-0.5 hover:bg-leaf-soft hover:text-leaf-dark'
                }`}
              >
                <span>Apply</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${applyDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {/* Floating Menu */}
              <div
                onMouseLeave={() => setApplyDropdownOpen(false)}
                className={`absolute right-0 top-full mt-2 w-72 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                  applyDropdownOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                }`}
              >
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select Application
                </div>

                <Link
                  to="/apply/job"
                  onClick={() => setApplyDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 transition duration-200 hover:bg-leaf-soft group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf-dark group-hover:bg-leaf group-hover:text-white transition duration-200">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-navy-900 group-hover:text-leaf-dark transition duration-200">
                      Job Application
                    </div>
                    <p className="text-xs text-slate-500">Apply for job drives & corporate recruitment</p>
                  </div>
                </Link>

                <Link
                  to="/apply/skill-development"
                  onClick={() => setApplyDropdownOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 transition duration-200 hover:bg-brand-soft group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white transition duration-200">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-navy-900 group-hover:text-brand transition duration-200">
                      Skill Development
                    </div>
                    <p className="text-xs text-slate-500">Internships, IT & domain training</p>
                  </div>
                </Link>
              </div>
            </li>
          </ul>

          <button
            className="rounded-xl p-2 text-navy-800 transition duration-300 hover:bg-leaf-soft hover:text-leaf-dark active:scale-90 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className={`block transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`grid transition-all duration-500 ease-in-out md:hidden ${open ? 'grid-rows-[1fr] border-t border-white/60' : 'grid-rows-[0fr]'}`}>
          <ul className="min-h-0 space-y-1 overflow-hidden px-3">
            {NAV.map(({ path, label }, i) => (
              <li
                key={path}
                className={`transition-all duration-500 ${i === 0 ? 'pt-3' : ''} ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
                style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
              >
                <NavLink to={path} end={path === '/'} className={mobile}>{label}</NavLink>
              </li>
            ))}

            {/* Mobile Apply Accordion */}
            <li className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
              <button
                type="button"
                onClick={() => setMobileApplyOpen(!mobileApplyOpen)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                  isApplyActive ? 'bg-leaf text-white' : 'text-navy-800 hover:translate-x-1 hover:bg-leaf-soft'
                }`}
              >
                <span>Apply</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileApplyOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {mobileApplyOpen && (
                <div className="my-1.5 ml-4 space-y-1 border-l-2 border-leaf/40 pl-3">
                  <NavLink
                    to="/apply/job"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition duration-200 ${
                        isActive ? 'bg-leaf-soft text-leaf-dark font-bold' : 'text-slate-700 hover:text-leaf-dark'
                      }`
                    }
                  >
                    <Briefcase size={16} className="text-leaf" />
                    <span>Apply for Job</span>
                  </NavLink>
                  <NavLink
                    to="/apply/skill-development"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition duration-200 ${
                        isActive ? 'bg-brand-soft text-brand font-bold' : 'text-slate-700 hover:text-brand'
                      }`
                    }
                  >
                    <GraduationCap size={16} className="text-brand" />
                    <span>Apply for Skill Development</span>
                  </NavLink>
                </div>
              )}
            </li>

            <li className="pb-3" />
          </ul>
        </div>
      </div>
    </header>
  );
}