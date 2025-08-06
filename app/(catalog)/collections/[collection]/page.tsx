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
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-semibold">{decoded}</h1>

      {items.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">No products found.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li
              key={p.handle}
              className="group rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            >
              <Link href={`/product/${p.handle}`} prefetch={true} className="block">
                <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded">
                  <Image
                    src={p.image || '/logos/IconBlack.png'}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {p.currency} {p.price === null ? 'TBD' : p.price.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Made in {p.madeIn}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
