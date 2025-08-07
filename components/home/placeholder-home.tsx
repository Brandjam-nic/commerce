import {
    collections,
    getProductsByCollection,
    placeholderImage
} from 'lib/placeholder/catalog';
import Image from 'next/image';
import Link from 'next/link';
import AboutSection from './about-section';
import HeroSection from './hero-section';

export default function PlaceholderHome() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-6 py-10 space-y-10">

      {collections.map((c) => {
        const items = getProductsByCollection(c).slice(0, 5);
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
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {items.map((p) => (
                  <li key={p.handle} className="group">
                    <Link href={`/product/${p.handle}`} prefetch={true} className="block">
                      {/* Clean product card with subtle border */}
                      <div className="border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        {/* Product image with taller aspect ratio */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                          <Image
                            src={p.image || placeholderImage}
                            alt={p.title}
                            fill
                            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                          />
                        </div>
                        {/* Product info below image */}
                        <div className="py-3 text-center">
                          <h3 className="mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {p.title}
                          </h3>
                          <p className="text-sm text-neutral-900 dark:text-neutral-100">
                            ${p.price === null ? 'TBD' : p.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
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
      <AboutSection />
    </>
  );
}
