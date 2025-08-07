import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800">
      {/* Background image behind everything using Next/Image */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/smart-teamwork-of-soldiers-running-forward-and-att-2024-10-11-00-04-33-utc Medium.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-40 dark:opacity-45"
        />
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/35 to-white/50 dark:from-black/45 dark:via-black/40 dark:to-black/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <span className="mr-2">★</span>
              VETERAN OWNED & OPERATED
              <span className="ml-2">★</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
              Military
              <span className="block text-neutral-600 dark:text-neutral-400">Resilience Co</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Honoring Service, Building Resilience. Premium apparel designed by veterans, 
              for those who understand the meaning of dedication, honor, and unwavering strength.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-black shadow-sm transition-all hover:bg-neutral-700 dark:hover:bg-neutral-200 hover:scale-105"
              >
                Shop Collection
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border-2 border-neutral-300 dark:border-neutral-600 px-6 py-3 text-base font-semibold text-neutral-900 dark:text-white transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Our Mission
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">100%</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Veteran Owned</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">10%</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">To Veteran Charities</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">∞</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Lifetime Quality</p>
              </div>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl lg:h-[500px] bg-white/70 dark:bg-black/40 backdrop-blur-sm">
              {/* Show black logo in light mode and white logo in dark mode */}
              <Image
                src="/logos/PushForward.png"
                alt="Military Resilience Co"
                fill
                className="object-contain p-8 block dark:hidden"
                priority
              />
              <Image
                src="/logos/PushForwardWhite.png"
                alt="Military Resilience Co"
                fill
                className="object-contain p-8 hidden dark:block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
