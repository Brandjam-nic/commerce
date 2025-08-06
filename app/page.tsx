import PlaceholderHome from 'components/home/placeholder-home';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Military Resilience Clothing Co — mission-driven apparel honoring service, resilience, and community.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <PlaceholderHome />
      <Footer />
    </>
  );
}
