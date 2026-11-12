import {
  GraduationCap, Briefcase, Compass, HeartHandshake, School, BookOpen, Mic,
  Handshake, ClipboardCheck, MessageCircleHeart,
} from 'lucide-react';

export const NAV = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/initiatives', label: 'Initiatives' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact Us' },
];

// Update these with your real contact details.
export const CONTACT = {
  email: 'operations.careerbridge@gmail.com',
  phone: '+91 8197657192',
  region: 'Karnataka, India',
};

export const FOCUS_INTRO =
  'We empower youth and communities through skill development, employability, career guidance, counselling, and community support. Our programmes build job readiness, support mental and emotional well-being, and expand access to education and opportunity.';

export const FOCUS_AREAS = [
  { icon: GraduationCap, title: 'Skill & Career Development', text: 'Internships, practical skill enhancement, career guidance, and industry-relevant learning help young people grow their technical, professional, and soft skills.' },
  { icon: Briefcase, title: 'Employability', text: 'Job-readiness training, aptitude assessments, interview preparation, job drives, and placement support connect students and job seekers with employers.' },
  { icon: MessageCircleHeart, title: 'Youth Counselling & Well-Being', text: 'Mental health counselling, addiction awareness, stress management, and wellness initiatives support young people through personal and career challenges.' },
  { icon: HeartHandshake, title: 'Social Welfare & Community Development', text: 'Scholarships, study materials, school support, and community programmes promote access to education, equal opportunity, and lasting social impact.' },
];

export const ABOUT_STATS = [
  { value: 200, suffix: '+', label: 'Educational institutions reached' },
  { value: 8000, suffix: '+', label: 'Candidate–interview connections' },
  { value: 300, suffix: '+', label: 'Candidates successfully placed' },
];

export const IMPACT = [
  { value: 200, suffix: '+', title: 'Educational Institutions Reached', text: 'Connecting students with learning and career opportunities.' },
  { value: 8000, suffix: '+', title: 'Candidate–Interview Connections', text: 'Facilitating connections with potential employers.' },
  { value: 1000, suffix: '+', title: 'Youth Counselled', text: 'Career development and mental health support.' },
  { value: 100, suffix: '+', title: 'Seminars & Webinars Conducted', text: 'Building knowledge, skills, and career awareness.' },
  { value: 5000, suffix: '+', title: 'Aptitude Assessments Conducted', text: 'Helping students understand their strengths.' },
  { value: 300, suffix: '+', title: 'Candidates Successfully Placed', text: 'Connecting skilled youth with employment.' },
  { value: 100, suffix: '+', title: 'Corporate Partners Connected', text: 'Supporting recruitment and placement.' },
  { value: 1, prefix: '₹', suffix: ' Lakh+', title: 'Scholarships Awarded', text: 'Supporting students’ educational needs.' },
];

export const PROGRAMMES = [
  { icon: GraduationCap, title: 'Internships & Skill Enhancement Programmes', text: 'Internships and skill enhancement programmes in AI, software development, management, and other professional domains provide practical knowledge, industry-relevant skills, and career development opportunities.' },
  { icon: Mic, title: 'Seminars, Webinars & Educational Talks', text: 'Seminars, webinars, and educational talks cover IT, management, career development, and industry topics, helping students and job seekers build knowledge, professional skills, career awareness, and employability.' },
  { icon: School, title: 'Educational Institution Networking & Support', text: 'Connections with over 200 educational institutions strengthen partnerships and expand student access to skill development programmes, industry-relevant training, career guidance, and employability initiatives.' },
  { icon: Compass, title: 'Career Counselling & Guidance', text: 'We help students and job seekers identify their interests, strengths, and suitable career opportunities, supporting informed decisions about education, skill development, and future employment.' },
  { icon: Briefcase, title: 'Interviews & Job Placements', text: 'We have facilitated hundreds of job placements across IT, management, and other industries. Ongoing recruitment initiatives connect skilled youth and job seekers with suitable employment.' },
  { icon: Handshake, title: 'Job Drives & Campus Recruitment', text: 'Job drives, campus recruitment programmes, and placement activities connect students and job seekers with opportunities in startups, established companies, and multinational corporations.' },
  { icon: ClipboardCheck, title: 'Skill Assessment & Aptitude Tests', text: 'Technical and non-technical assessments help students and job seekers evaluate their abilities, identify areas for improvement, and strengthen employability and career readiness.' },
  { icon: Handshake, title: 'Corporate Partnerships & Placement Support', text: 'Over 100 corporate partners support recruitment, campus placement drives, job interviews, and employment opportunities, strengthening industry relationships and access to potential employers.' },
  { icon: MessageCircleHeart, title: 'Mental Health Counselling', text: 'Mental health counselling and awareness sessions address emotional well-being, stress management, and personal challenges to promote mental wellness and personal development.' },
  { icon: MessageCircleHeart, title: 'Addiction Awareness & Counselling', text: 'Addiction awareness programmes highlight the harmful effects of substance abuse, promote prevention, and encourage healthy lifestyle choices and responsible decision-making.' },
  { icon: HeartHandshake, title: 'Health & Wellness Initiatives', text: 'Blood donation and health check-up camps, plus lifestyle and nutrition awareness programmes, promote preventive healthcare, healthy living, and community well-being.' },
  { icon: School, title: 'Government School Support', text: 'Regular career guidance and mental health awareness programmes support Grade 9 and 10 students at two government schools in Panemangaluru and Bengre, helping with academic development, personal well-being, and career planning.' },
  { icon: BookOpen, title: 'Scholarships & Study Materials', text: 'Scholarships and essential study materials—including textbooks, notebooks, stationery, and other educational supplies—support primary, high school, and pre-university students.' },
];
