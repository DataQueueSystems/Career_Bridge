import PageHeader from '../components/PageHeader.jsx';
import Portfolio from '../components/Portfolio.jsx';

const HERO_BG = 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Impact & Portfolio"
        // badge="Our Impact at a Glance"
        bgImage={HERO_BG}
      >
        Building opportunities. Creating possibilities. Reaching over 200+ educational institutions and facilitating 8,000+ candidate-interview connections.
      </PageHeader>
      <Portfolio />
    </>
  );
}
