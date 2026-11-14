import PageHeader from '../components/PageHeader.jsx';
import Initiatives from '../components/Initiatives.jsx';
import { FOCUS_INTRO } from '../data/content.js';

// Interactive skill workshop and collaborative learning
const HERO_BG = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function InitiativesPage() {
  return (
    <>
      <PageHeader
        title="Our Initiatives"
        // badge="Focus Areas · Skill Development & Employability"
        bgImage={HERO_BG}
        imagePos="object-cover object-[center_30%]"
        minHeight="min-h-[70vh]"
      >
        {/* {FOCUS_INTRO} */}
      </PageHeader>
      <Initiatives />
    </>
  );
}
