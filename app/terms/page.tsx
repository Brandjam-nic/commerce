export const metadata = {
  title: 'Terms & Conditions',
  description: 'Basic terms and conditions for using this website and purchasing products.'
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>Terms & Conditions</h1>
      <p>
        These Terms & Conditions govern your use of the Military Resilience Clothing Co website
        and your purchase of products from us. By accessing our site or placing an order, you agree
        to these Terms.
      </p>

      <h2>Ordering</h2>
      <p>
        All orders are subject to availability and acceptance. We reserve the right to refuse or
        cancel any order at our discretion, including where product information, pricing, or
        availability is incorrect.
      </p>

      <h2>Pricing & Payment</h2>
      <p>
        Prices are displayed in AUD and may change without notice. Taxes and shipping charges are
        applied at checkout where applicable. Payment methods are processed via our chosen payment
        provider(s).
      </p>

      <h2>Shipping</h2>
      <p>
        Orders are shipped via Australia Post. Estimated delivery timeframes are provided on our
        Shipping page and may vary due to carrier delays or external factors. Risk of loss passes to
        you upon the carrier’s receipt of the package.
      </p>

      <h2>Returns</h2>
      <p>
        We accept returns for faulty items within 30 days of purchase as outlined in our Returns
        Policy. Change-of-mind and incorrect size returns are not accepted; please consult our size
        guide prior to purchase.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site (including branding, logos, images, designs, and text) is owned by
        Military Resilience Clothing Co or its licensors and is protected by intellectual property
        laws. You may not reproduce or reuse it without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, we exclude all liability for any indirect, incidental,
        special, or consequential loss or damage arising out of or in connection with your use of the
        site or purchase of products.
      </p>

      <h2>Privacy</h2>
      <p>
        We handle your personal information in accordance with our Privacy Policy. By using our site,
        you consent to such processing and warrant that all data provided by you is accurate.
      </p>

      <h2>Updates</h2>
      <p>
        We may update these Terms & Conditions from time to time. Changes take effect when posted
        on this page. Continued use of the site constitutes acceptance of the updated terms.
      </p>
    </section>
  );
}
