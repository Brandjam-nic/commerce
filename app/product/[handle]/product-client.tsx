'use client';

import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { products } from 'lib/placeholder/catalog';

function ProductDetails({ product }: { product: any }) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['details']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    {
      id: 'details',
      title: 'PRODUCT DETAILS',
      content: (
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>This product will be shipped from August 14.</p>
          <p>This order categorization features the size S of graphic artist and comedian <strong>Jeremy Bailey in Trotty</strong>.</p>
          <ul className="list-disc pl-5 space-y-1">
            {product.specs.map((spec: string) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <p>Made in {product.madeIn}</p>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'SHIPPING & RETURNS',
      content: (
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p><strong>Free shipping on orders over $100</strong></p>
          <p>Standard shipping: 5-7 business days</p>
          <p>Express shipping: 2-3 business days</p>
          <p className="pt-2">Returns accepted within 30 days of delivery. Items must be unworn with tags attached.</p>
        </div>
      )
    }
  ];

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-xs font-medium tracking-wider">{section.title}</span>
            {expandedSections.includes(section.id) ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {expandedSections.includes(section.id) && (
            <div className="pb-4">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductPageClient({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock multiple images
  const images = [product.image, product.image, product.image, product.image];

  const priceText = product.price === null ? '$75.00' : `$${product.price.toFixed(2)}`;

  // Get related products (same collection, exclude current product)
  const relatedProducts = useMemo(() => {
    return products
      .filter(p => p.collection === product.collection && p.handle !== product.handle)
      .slice(0, 5);
  }, [product]);

  return (
    <>
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="sticky top-0">
              <div className="relative aspect-[3/4] w-full bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src={images[currentImageIndex]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 p-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-20 w-20 overflow-hidden border-2 ${
                      currentImageIndex === idx
                        ? 'border-neutral-900 dark:border-white'
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="px-6 py-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="mb-4 text-xs">
              <Link href="/" className="hover:underline">OUR STORE</Link>
              <span className="mx-2">/</span>
              <Link href="/collections/T-Shirts" className="hover:underline">MEN'S T-SHIRTS</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-500">{product.handle.toUpperCase()}</span>
            </nav>

            {/* Product Title and Price */}
            <h1 className="text-2xl font-bold uppercase tracking-tight">
              {product.title}
            </h1>
            <p className="mt-2 text-2xl font-bold">{priceText}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Or 4 interest-free payments of $18.75 with Afterpay
            </p>

            {/* Size Selector */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">Size</span>
                <button className="text-xs underline">Size chart</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {(product.variants || [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }, { size: '2XL' }, { size: '3XL' }]).map((v: any) => (
                  <button
                    key={v.size}
                    onClick={() => setSelectedSize(v.size)}
                    className={`border py-3 text-sm font-medium transition-colors ${
                      selectedSize === v.size
                        ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                        : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <span className="text-sm font-medium">Quantity</span>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-lg hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="h-10 w-16 border-y border-neutral-300 text-center dark:border-neutral-700 dark:bg-neutral-950"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-lg hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                disabled={!selectedSize}
                className="w-full bg-yellow-400 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ADD TO CART
              </button>
              <button className="flex w-full items-center justify-center gap-2 border border-neutral-900 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-900">
                <MapPin className="h-4 w-4" />
                FIND IN STORE
              </button>
            </div>

            {/* Product Details Accordion */}
            <div className="mt-8">
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold uppercase">You may also like</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {relatedProducts.map((p) => (
            <Link key={p.handle} href={`/product/${p.handle}`} className="group">
              <div className="border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <div className="py-3 text-center">
                  <h3 className="mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-900 dark:text-neutral-100">
                    ${p.price === null ? '75.00' : p.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}