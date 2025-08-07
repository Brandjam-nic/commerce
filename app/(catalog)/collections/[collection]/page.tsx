import {
    CollectionHandle,
    collections,
    getProductsByCollection
} from 'lib/placeholder/catalog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

type Props = {
  params: Promise<{ collection: string }>;
};

export function generateStaticParams() {
  return collections.map((c) => ({
    collection: c
  }));
}

export const metadata = {
  title: 'Collection',
  description: 'Browse products in this collection.'
};

export default async function CollectionPage({ params }: Props) {
  const { collection } = await params;
  const decoded = decodeURIComponent(collection);
  const valid = collections.includes(decoded as CollectionHandle);
  if (!valid) return notFound();

  const items = getProductsByCollection(decoded as CollectionHandle);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-semibold">{decoded}</h1>

      {items.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">No products found.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((p) => (
            <li key={p.handle} className="group">
              <Link href={`/product/${p.handle}`} prefetch={true} className="block">
                {/* Clean product card with subtle border */}
                <div className="border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                  {/* Product image with taller aspect ratio */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                    <Image
                      src={p.image || '/logos/IconBlack.png'}
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
      )}
    </section>
  );
}
