import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, CheckCircle2, Phone, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import JobApplicationForm from '../components/JobApplicationForm.jsx';
import SkillDevelopmentForm from '../components/SkillDevelopmentForm.jsx';
import ScholarshipApplicationForm from '../components/ScholarshipApplicationForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { CONTACT } from '../data/content.js';

const HERO_BG = 'https://images.pexels.com/photos/3184663/pexels-photo-3184663.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function ApplyPage({ initialTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab: 'job' | 'skill' | 'scholarship'
  const [activeTab, setActiveTab] = useState(() => {
    if (initialTab) return initialTab;
    if (location.pathname.includes('scholarship')) return 'scholarship';
    if (location.pathname.includes('skill-development')) return 'skill';
    return 'job';
  });

  const [hoveredTab, setHoveredTab] = useState(null);
  const isJobExpanded = activeTab === 'job' || hoveredTab === 'job';
  const isSkillExpanded = activeTab === 'skill' || hoveredTab === 'skill';

  useEffect(() => {
    if (location.pathname.includes('scholarship')) {
      setActiveTab('scholarship');
    } else if (location.pathname.includes('skill-development')) {
      setActiveTab('skill');
    } else if (location.pathname.includes('job')) {
      setActiveTab('job');
    }
  }, [location.pathname]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    if (tab === 'scholarship') {
      navigate('/apply/scholarship', { replace: true });
    } else if (tab === 'skill') {
      navigate('/apply/skill-development', { replace: true });
    } else {
      navigate('/apply/job', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 sm:pb-28">
      {/* Hero Page Header with Background Image */}
      <PageHeader
        title="Apply Online"
        // badge="CareerBridge Portal · Registration & Careers"
        bgImage={HERO_BG}
      >
        Opportunity begins with access. Apply directly for job placement opportunities, register for our hands-on skill development programmes, or submit your scholarship registration.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        
        {/* Tab Switcher */}
        <Reveal>
          <div className="flex justify-center">
            <div className="inline-flex flex-nowrap justify-center gap-1 sm:gap-2 rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-slate-200 w-full sm:w-auto max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => switchTab('job')}
                onMouseEnter={() => setHoveredTab('job')}
                onMouseLeave={() => setHoveredTab(null)}
                title="Job Application"
                className={`inline-flex flex-1 sm:flex-initial min-w-0 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'job'
                    ? 'bg-gradient-to-r from-navy-950 to-navy-900 text-white shadow-lg shadow-navy-950/20 ring-2 ring-leaf'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                <Briefcase size={16} className={activeTab === 'job' ? 'text-leaf shrink-0' : 'text-slate-400 shrink-0'} />
                <span className="sm:hidden">{isJobExpanded ? 'Job Application' : 'Job'}</span>
                <span className="hidden sm:inline">Job Application</span>
              </button>
              <button
                type="button"
                onClick={() => switchTab('skill')}
                onMouseEnter={() => setHoveredTab('skill')}
                onMouseLeave={() => setHoveredTab(null)}
                title="Skill Development"
                className={`inline-flex flex-1 sm:flex-initial min-w-0 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'skill'
                    ? 'bg-gradient-to-r from-navy-950 to-navy-900 text-white shadow-lg shadow-navy-950/20 ring-2 ring-brand'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                <GraduationCap size={16} className={activeTab === 'skill' ? 'text-brand shrink-0' : 'text-slate-400 shrink-0'} />
                <span className="sm:hidden">{isSkillExpanded ? 'Skill Development' : 'Skill'}</span>
                <span className="hidden sm:inline">Skill Development</span>
              </button>
              <button
                type="button"
                onClick={() => switchTab('scholarship')}
                onMouseEnter={() => setHoveredTab('scholarship')}
                onMouseLeave={() => setHoveredTab(null)}
                title="Scholarship Registration"
                className={`inline-flex flex-1 sm:flex-initial min-w-0 items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'scholarship'
                    ? 'bg-gradient-to-r from-navy-950 to-navy-900 text-white shadow-lg shadow-navy-950/20 ring-2 ring-amber-500'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                <Award size={16} className={activeTab === 'scholarship' ? 'text-amber-400 shrink-0' : 'text-slate-400 shrink-0'} />
                <span>Scholarship</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Content Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 w-full min-w-0">
          
          {/* Main Form Area */}
          <Reveal delay={150} className="w-full min-w-0">
            {activeTab === 'job' ? (
              <JobApplicationForm />
            ) : activeTab === 'skill' ? (
              <SkillDevelopmentForm />
            ) : (
              <ScholarshipApplicationForm />
            )}
          </Reveal>

          {/* Sidebar Info & Trust Badges */}
          <Reveal delay={250} className="w-full min-w-0">
            <div className="space-y-6">
              
              {/* Highlight Card */}
              {/* <div className="rounded-3xl border border-navy-800/10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-7 text-white shadow-xl shadow-navy-900/15">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-leaf-lime">
                  Why CareerBridge?
                </span>
                <h3 className="mt-4 text-xl font-bold">Connecting Education, Guidance & Employment</h3>
                <ul className="mt-5 space-y-3.5 text-sm text-blue-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-leaf-lime" />
                    <span><strong>100+ Corporate Partners:</strong> Direct interview connections with top regional and global recruiters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-leaf-lime" />
                    <span><strong>Training & Internships:</strong> Practical domain training in AI, software development, and management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-leaf-lime" />
                    <span><strong>Dedicated Mentorship:</strong> 1-on-1 career counselling, resume feedback, and mock interviews.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-leaf-lime" />
                    <span><strong>No Registration Fees:</strong> Social-impact initiative committed to youth empowerment.</span>
                  </li>
                </ul>
              </div> */}

              {/* Assistance & Helpline */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="font-bold text-navy-900">Share Your Resume</h4>
                <p className="mt-1 text-sm text-slate-500">
                  Send your resume directly via WhatsApp or email to the details below.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf-dark">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp Resume</p>
                      <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="font-semibold text-navy-800 hover:text-leaf">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">Email Resume To</p>
                      <a href={`mailto:${CONTACT.email}`} className="break-all font-semibold text-navy-800 hover:text-brand">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">Operational Regions</p>
                      <p className="font-medium text-navy-800">
                        {CONTACT.region} & border districts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Privacy note */}
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-xs text-slate-500 border border-slate-200 shadow-sm">
                <ShieldCheck size={20} className="shrink-0 text-brand" />
                <span>Your contact information is strictly confidential and used solely for CareerBridge programme recruitment and communications.</span>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </div>
  );
}
