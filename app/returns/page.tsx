export const metadata = {
  title: 'Returns',
  description: 'Returns policy for Military Resilience Clothing Co.'
};

export default function ReturnsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>Returns</h1>
      <p>We will accept returns within 30 days of purchase for faulty items.</p>

      <h2>Eligibility</h2>
      <p>Your item(s) must be:</p>
      <ul>
        <li>Unused and in new condition</li>
        <li>Unworn and undamaged</li>
        <li>Including all original tags, labels, and retail packaging</li>
      </ul>

      <h2>Change of Mind / Incorrect Size</h2>
      <p>
        We do not accept returns for change of mind or incorrect sizing. Please read sizing
        information carefully before purchase. A detailed size guide will be provided soon.
      </p>

      <h2>Faulty Items</h2>
      <p>
        For manufacturing issues (e.g., label not correctly printed, sewing defects), please send a
        message through the website with photos clearly showing the defect(s). Once approved, we
        will arrange a replacement.
      </p>

      <h2>Return Shipping Costs</h2>
      <p>Customers are responsible for shipping and handling charges for all online returns.</p>

      <p className="text-sm">
        Note: We are reviewing options for Australia Post returns processes. Further details may be
        provided closer to launch.
      </p>
    </section>
  );
}
