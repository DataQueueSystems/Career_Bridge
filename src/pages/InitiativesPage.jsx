import PageHeader from '../components/PageHeader.jsx';
import Initiatives from '../components/Initiatives.jsx';
import { FOCUS_INTRO } from '../data/content.js';

const HERO_BG = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function InitiativesPage() {
  return (
    <>
      <PageHeader
        title="Our Initiatives"
        // badge="Focus Areas · Skill Development & Employability"
        bgImage={HERO_BG}
      >
        {FOCUS_INTRO}
      </PageHeader>
      <Initiatives />
    </>
  );
}
