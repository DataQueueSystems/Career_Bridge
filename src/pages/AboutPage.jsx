import PageHeader from '../components/PageHeader.jsx';
import About from '../components/About.jsx';
import coverImg from '../assets/careerbridge-brochure-cover.jpg';
// import coverImg from '../assets/careerbridge-brochure-cover.webp';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        // badge="Social Impact Project (SIP) · DQS"
        bgImage={coverImg}
        imagePos="object-[center_15%]"
      >
        Opportunity begins with access. We help young people build skills, find guidance, and prepare for a successful professional future across rural communities and non-metro cities.
      </PageHeader>
      <About hideHeader={true} />
    </>
  );
}

