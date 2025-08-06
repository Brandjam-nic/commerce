export const metadata = {
  title: 'Size Guide',
  description: 'Size guide for Military Resilience Clothing Co apparel (S–3XL).'
};

export default function SizeGuidePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>Size Guide</h1>
      <p>
        A detailed size chart will be published soon. Most apparel ranges from Small (S) to 3XL.
        Please review sizing information carefully before ordering as we do not accept
        change-of-mind or incorrect size returns.
      </p>
      <h2>Provisional Guidance</h2>
      <p>
        If you are between sizes, we generally recommend sizing up for comfort. Fabric weights:
        T‑Shirts 250 GSM, Hoodies 320 GSM, both 100% cotton/cotton-fleece blends.
      </p>
      <p className="text-sm">
        Have your measurements ready (chest, waist) to compare against the forthcoming chart.
      </p>
    </section>
  );
}
