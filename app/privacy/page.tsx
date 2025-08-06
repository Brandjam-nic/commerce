export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy outlining how Military Resilience Clothing Co collects, uses, and protects your data.'
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        This Privacy Policy explains how Military Resilience Clothing Co ("we", "us", "our")
        collects, uses, and protects your personal information when you visit our website or make a purchase.
        We balance transparency and practicality, taking cues from policies by YD and AS Colour.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Contact Information</strong> — name, email address, phone number, and shipping/billing address.
        </li>
        <li>
          <strong>Order Information</strong> — items purchased, payment method (tokenized by provider), order totals, and shipping details.
        </li>
        <li>
          <strong>Usage Data</strong> — device information, IP address, browser type, pages viewed, and interactions for analytics and site performance.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and fulfill orders, including shipping and customer support.</li>
        <li>To communicate order updates and respond to enquiries.</li>
        <li>To improve our website, products, and customer experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Payment & Shipping Providers</h2>
      <p>
        Payments and shipping services are provided by third parties. Your payment details are
        processed securely by the payment gateway and are not stored on our servers. Shipping details
        are shared with couriers (e.g., Australia Post) for delivery purposes.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information only as long as necessary for the purposes outlined in this policy,
        to comply with legal requirements, or to resolve disputes.
      </p>

      <h2>Cookies & Tracking</h2>
      <p>
        We may use cookies and similar technologies to enable site functionality and gather analytics.
        You may adjust your browser settings to refuse cookies, but some features may not function properly.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell personal information. We share data with trusted providers (payments, shipping,
        analytics) solely to provide our services, under appropriate safeguards.
      </p>

      <h2>Your Rights</h2>
      <p>
        Subject to applicable law, you may request access, correction, or deletion of personal data we hold about you.
        Contact us to make a request.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect personal information. No method of transmission over the internet
        or electronic storage is 100% secure.
      </p>

      <h2>Children</h2>
      <p>
        Our website is intended for individuals aged 13 and older. If you believe a child has provided us personal
        information, please contact us so we can take appropriate action.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be posted on this page with an updated date.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, contact:
        <br />
        Military Resilience Clothing Co
        <br />
        Email: militaryresilience@outlook.com
      </p>
    </section>
  );
}
