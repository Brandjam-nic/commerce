import { getProductByHandle } from 'lib/placeholder/catalog';
import { notFound } from 'next/navigation';
import ProductPageClient from './product-client';

type Props = {
  params: Promise<{ handle: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const { products } = await import('lib/placeholder/catalog');
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  
  return {
    title: product ? product.title : 'Product',
    description: product ? `${product.title} - ${product.collection}` : 'Product detail'
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    return notFound();
  }

  return <ProductPageClient product={product} />;
}