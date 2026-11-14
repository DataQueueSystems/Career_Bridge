import PageHeader from '../components/PageHeader.jsx';
import Portfolio from '../components/Portfolio.jsx';

// High-impact celebration of student achievement and graduation success
const HERO_BG = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Impact & Portfolio"
        // badge="Our Impact at a Glance"
        bgImage={HERO_BG}
        imagePos="object-cover object-[center_35%]"
        minHeight="min-h-[70vh]"
      >
        {/* Building opportunities. Creating possibilities. Reaching over 200+ educational institutions and facilitating 8,000+ candidate-interview connections. */}
      </PageHeader>
      <Portfolio />
    </>
  );
}
