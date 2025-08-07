import AboutHeroSection from 'components/about/hero-section';
import StorySection from 'components/about/story-section';
import ValuesCards from 'components/about/values-cards';
import ManufacturingSection from 'components/about/manufacturing';
import TeamSection from 'components/about/team-section';
import CTASection from 'components/about/cta-section';

export const metadata = {
  title: 'About Us | Military Resilience Co',
  description:
    'Military Resilience Clothing Co — mission-driven apparel honoring service, resilience, and community. Veteran owned and operated. PUSH FORWARD.'
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <ValuesCards />
      <ManufacturingSection />
      <TeamSection />
      <CTASection />
    </>
  );
}