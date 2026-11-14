import PageHeader from '../components/PageHeader.jsx';
import Contact from '../components/Contact.jsx';

const HERO_BG = 'https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        // badge="Connect with CareerBridge Foundation"
        bgImage={HERO_BG}
        imagePos="object-top sm:object-[center_25%]"
        minHeight="min-h-[70vh]"
      />
      <Contact intro="Connecting youth. Building skills. Creating opportunities. Have questions about our programs, recruitment partnerships, or community drives? Reach out to us." />
    </>
  );
}
