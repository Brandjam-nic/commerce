import Image from 'next/image';

export default function ManufacturingSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 space-y-6 lg:order-1">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-900">
                Quality & Ethics
              </p>
              <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">
                Manufacturing Excellence
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <p className="text-lg leading-relaxed">
                Our products are proudly manufactured in Vietnam, a choice that reflects both 
                practical excellence and historical significance for Australian military history.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-900 pl-6">
                  <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                    Why Vietnam?
                  </h3>
                  <p className="text-sm">
                    Vietnam represents a significant chapter in Australian military history. 
                    By manufacturing there, we honor this connection while supporting local 
                    communities and maintaining exceptional quality standards.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                    Ethical Production
                  </h3>
                  <p className="text-sm">
                    We partner with certified facilities that ensure fair wages, safe working 
                    conditions, and sustainable practices. Every garment is crafted with care 
                    and precision.
                  </p>
                </div>

                <div className="border-l-4 border-blue-900 pl-6">
                  <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                    Quality Guarantee
                  </h3>
                  <p className="text-sm">
                    Military-grade durability meets civilian comfort. Our products are built 
                    to last, using premium materials and construction techniques that withstand 
                    the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-green-500 p-3 text-white">
                  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Certified</p>
                  <p className="font-semibold text-neutral-900 dark:text-white">Ethical Factory</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-blue-500 p-3 text-white">
                  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Premium</p>
                  <p className="font-semibold text-neutral-900 dark:text-white">Quality Materials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/Test2.jpg"
                  alt="Manufacturing process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-4 -top-4 rounded-lg bg-neutral-900 p-4 text-white shadow-xl dark:bg-white dark:text-black">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-xs font-semibold uppercase">Quality Tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}