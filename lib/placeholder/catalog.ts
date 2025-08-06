/**
 * Placeholder catalog for development without Shopify.
 * Currency: AUD
 * Prices: TBD (null) – display "TBD" in UI.
 * Images: placeholder paths – update when assets available.
 */

export type Size = 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';

export type PlaceholderProduct = {
  handle: string;
  title: string;
  description?: string;
  collection: 'Caps' | 'T-Shirts' | 'Hoodies' | 'Accessories';
  specs: string[];
  madeIn: string;
  currency: 'AUD';
  price: number | null; // null => TBD
  image: string; // /logos/IconBlack.png as generic placeholder
  variants?: {
    size: Size;
    price: number | null;
    sku?: string;
  }[];
};

export const collections = ['Caps', 'T-Shirts', 'Hoodies', 'Accessories'] as const;
export type CollectionHandle = typeof collections[number];

export const placeholderImage = '/images/T-Shirt-ProductIMage.jpg';
export const placeholderHatImage = '/images/Testhat.png';

export const products: PlaceholderProduct[] = [
  // Caps
  {
    handle: 'herringbone-blue-cap',
    title: 'Herringbone Blue Cap',
    collection: 'Caps',
    specs: ['100% Cotton', 'Flexi Fit', 'Snap Back Adjustment'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderHatImage
  },
  {
    handle: 'sea-blue-water-resistant-cap',
    title: 'Sea Blue Water Resistant Cap',
    collection: 'Caps',
    specs: [
      '100% Polyester',
      'Flexi Fit',
      'Snap Back Adjustment',
      'Water Resistant',
      'Quick Dry'
    ],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderHatImage
  },

  // T-Shirts (S–3XL)
  {
    handle: 'military-olive-tshirt',
    title: 'Military Olive T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'Camo Logo Design'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'military-blue-tshirt',
    title: 'Military Blue T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'Ice Camo Logo Design'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'military-grey-tshirt',
    title: 'Military Grey T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'Urban Camo Logo Design'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'illume-white-tshirt',
    title: 'Illume (White) T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'Black Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'night-ops-black-tshirt',
    title: 'Night Ops (Black) T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'White Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'sky-blue-tshirt',
    title: 'Sky (Blue) T-Shirt',
    collection: 'T-Shirts',
    specs: ['100% Cotton', '250 GSM', 'White Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },

  // Hoodies (S–3XL)
  {
    handle: 'night-ops-hoodie',
    title: 'Night Ops Hoodie',
    collection: 'Hoodies',
    specs: ['100% Cotton/Fleece', '320 GSM', 'White Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'military-olive-hoodie',
    title: 'Military Olive Hoodie',
    collection: 'Hoodies',
    specs: ['100% Cotton/Fleece', '320 GSM', 'White Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },
  {
    handle: 'sky-blue-hoodie',
    title: 'Sky (Blue) Hoodie',
    collection: 'Hoodies',
    specs: ['100% Cotton/Fleece', '320 GSM', 'White Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage,
    variants: sizes()
  },

  // Accessories
  {
    handle: 'navy-flare-gym-towel',
    title: 'Navy Flare Gym Towel',
    collection: 'Accessories',
    specs: ['100% Microfibre', 'Fluro Orange Logo'],
    madeIn: 'Vietnam',
    currency: 'AUD',
    price: null,
    image: placeholderImage
  }
];

function sizes(): { size: Size; price: number | null }[] {
  return ['S', 'M', 'L', 'XL', '2XL', '3XL'].map((s) => ({
    size: s as Size,
    price: null
  }));
}

// Helpers
export function getProductsByCollection(collection: CollectionHandle) {
  return products.filter((p) => p.collection === collection);
}

export function getProductByHandle(handle: string) {
  return products.find((p) => p.handle === handle);
}
