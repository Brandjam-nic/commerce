import {
    collections,
    getProductsByCollection,
    placeholderImage
} from 'lib/placeholder/catalog';
import Image from 'next/image';
import Link from 'next/link';

export default function PlaceholderHome() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Military Resilience Clothing Co</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Mission-driven apparel honoring service, resilience, and community.
        </p>
      </header>

      {collections.map((c) => {
        const items = getProductsByCollection(c).slice(0, 4);
        return (
          <div key={c} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">{c}</h2>
              <Link
                href={`/collections/${encodeURIComponent(c)}`}
                prefetch={true}
                className="text-sm text-neutral-600 underline-offset-4 hover:text-black hover:underline dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                View all
              </Link>
            </div>
            {items.length ? (
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <li
                    key={p.handle}
                    className="group rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
                  >
                    <Link href={`/product/${p.handle}`} prefetch={true} className="block">
                      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded">
                        <Image
                          src={p.image || placeholderImage}
                          alt={p.title}
                          fill
                          className="object-contain"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                      <h3 className="text-base font-medium">{p.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {p.currency} {p.price === null ? 'TBD' : p.price.toFixed(2)}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">No products yet.</p>
            )}
          </div>
        );
      })}
    </section>
  );
}
