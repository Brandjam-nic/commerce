export const metadata = {
  title: 'About',
  description:
    'Military Resilience Clothing Co — mission-driven apparel honoring service, resilience, and community.'
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>About Military Resilience Clothing Co</h1>
      <p>
        Military Resilience Clothing Co is a mission-driven brand focused on
        honoring service, building community, and promoting everyday resilience.
        We deliver durable, comfortable apparel designed for real life.
      </p>
      <h2>Vision</h2>
      <p>
        To empower servicemen and women, veterans, families, and supporters
        through thoughtful design and quality garments that reflect values of
        courage, discipline, and unity.
      </p>
      <h2>Manufacturing</h2>
      <p>
        Our products are made in Vietnam. This reflects a practical choice tied
        to Australian wartime history, ethical manufacturing capability, and a
        lower cost base that enables fair pricing for customers without
        compromising quality.
      </p>
    </section>
  );
}
