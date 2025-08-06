import { getProductByHandle, placeholderImage } from 'lib/placeholder/catalog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ handle: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  // Build-time params for SSG in placeholder mode from local catalog.
  // Import dynamically to avoid edge bundling issues.
  const { products } = await import('lib/placeholder/catalog');
  return products.map((p) => ({ handle: p.handle }));
}

export const metadata = {
  title: 'Product',
  description: 'Product detail'
};

function Specs({ specs }: { specs: string[] }) {
  if (!specs?.length) return null;
  return (
    <ul className="list-inside list-disc text-sm text-neutral-700 dark:text-neutral-300">
      {specs.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function Variants({
  variants
}: {
  variants?: { size: string; price: number | null }[];
}) {
  if (!variants?.length) return null;
  return (
    <div className="mt-3">
      <div className="mb-1 text-sm font-medium">Sizes</div>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <span
            key={v.size}
            className="inline-flex items-center rounded border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
            title={v.price === null ? 'TBD' : `AUD ${v.price.toFixed(2)}`}
          >
            {v.size}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    return notFound();
  }

  const priceText = product.price === null ? 'TBD' : `${product.currency} ${product.price.toFixed(2)}`;

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-neutral-200 dark:border-neutral-800">
          <Image
            src={product.image || placeholderImage}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            {product.currency} {priceText}
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Made in {product.madeIn}</p>

          <div className="mt-6 space-y-2">
            <h2 className="text-lg font-medium">Details</h2>
            <Specs specs={product.specs} />
            <Variants variants={product.variants} />
          </div>

          <div className="mt-6">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              title="Cart disabled in placeholder mode"
            >
              Add to Cart (placeholder)
            </button>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {/* Space reserved for related products or content later */}
      </Suspense>
    </section>
  );
}
