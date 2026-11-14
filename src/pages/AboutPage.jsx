import PageHeader from '../components/PageHeader.jsx';
import About from '../components/About.jsx';
import coverImg from '../assets/careerbridge-brochure-cover.jpg';
// import coverImg from '../assets/careerbridge-brochure-cover.webp';

// Community empowerment, collaboration and social impact mission
const HERO_BG = 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        // badge="Social Impact Project (SIP) · DQS"
        bgImage={HERO_BG}
        imagePos="object-cover object-center"
        minHeight="min-h-[70vh]"
      />
      <About
        hideHeader={true}
      />
    </>
  );
}

