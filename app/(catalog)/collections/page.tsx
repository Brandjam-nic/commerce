import { collections, getProductsByCollection } from 'lib/placeholder/catalog';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Collections',
  description: 'Browse Military Resilience collections.'
};

export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-2xl font-semibold">Collections</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((c) => {
          const preview = getProductsByCollection(c)[0];
          return (
            <Link
              key={c}
              href={`/collections/${encodeURIComponent(c)}`}
              className="group rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
              prefetch={true}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded">
                  <Image
                    src={preview?.image || '/logos/IconBlack.png'}
                    alt={`${c} preview`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-lg font-medium">{c}</div>
              </div>
              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                Explore {c}.
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
