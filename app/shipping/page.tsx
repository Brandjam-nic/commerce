export const metadata = {
  title: 'Shipping',
  description: 'Australia Post shipping information and delivery timeframes.'
};

export default function ShippingPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>Shipping</h1>
      <p>We ship with Australia Post across Australia.</p>

      <h2>Rates</h2>
      <ul>
        <li>$10 Standard Shipping Australia-wide (TBC Pricing)</li>
        <li>Express Shipping: currently not offered (under review)</li>
      </ul>

      <h2>Estimated Shipping Times</h2>
      <h3>East Coast</h3>
      <ul>
        <li>Standard — Metro: 2–5 Days</li>
        <li>Standard — Regional: 2–10 Days</li>
        <li>Express — Metro: 1–3 Days (May not be offered)</li>
        <li>Express — Regional: 2–4 Days (May not be offered)</li>
      </ul>

      <h3>Western Australia</h3>
      <ul>
        <li>Standard: 7–14 Days</li>
        <li>Express: 3–5 Days (May not be offered)</li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li>
          We do not accept responsibility for lost, stolen, or damaged packages once they are in the
          hands of postal carriers or couriers.
        </li>
        <li>We are not liable for delivery delays.</li>
        <li>
          Any issues regarding lost, stolen, or delayed parcels must be taken up directly with the
          courier or postal service responsible.
        </li>
      </ul>
    </section>
  );
}
