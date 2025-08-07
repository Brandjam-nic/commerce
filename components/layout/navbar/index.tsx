import CartModal from 'components/cart/modal';
import { ThemeToggle } from 'components/theme/theme-toggle';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const staticLinks = [
    { title: 'Collections', path: '/collections' },
    { title: 'Our Story', path: '/about' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Shipping', path: '/shipping' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between p-4 lg:px-6">
        {/* Left: primary menu */}
        <ul className="hidden md:flex md:items-center gap-6 text-base font-semibold">
          {(menu.length ? menu.map((item: Menu) => ({ title: item.title, path: item.path })) : [])
            .concat(staticLinks)
            .slice(0, Math.ceil(((menu.length ? menu.length : 0) + staticLinks.length) / 2))
            .map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-neutral-700 underline-offset-4 hover:text-black hover:underline dark:text-neutral-200 dark:hover:text-neutral-50 font-semibold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>

        {/* Center: logo */}
        <div className="flex-1 flex items-center justify-center">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex items-center justify-center lg:mr-6"
          >
            {/* Mobile: icon-only */}
            <span className="md:hidden">
              <Image
                src="/logos/IconBlack.png"
                alt={`${SITE_NAME} logo`}
                width={56}
                height={56}
                className="block dark:hidden h-14 w-14"
                priority
              />
              <Image
                src="/logos/IconBlack.png"
                alt={`${SITE_NAME} logo`}
                width={56}
                height={56}
                className="hidden dark:block h-14 w-14 invert"
                priority
              />
            </span>

            {/* Desktop: wordmark, auto-switch to white in dark mode */}
            <span className="hidden md:inline-flex items-center">
              <Image
                src="/logos/LogoBlack.png"
                alt={`${SITE_NAME} wordmark`}
                width={240}
                height={56}
                className="block dark:hidden h-14 w-auto"
                priority
              />
              <Image
                src="/logos/LogoWhite.png"
                alt={`${SITE_NAME} wordmark`}
                width={240}
                height={56}
                className="hidden dark:block h-14 w-auto"
                priority
              />
            </span>
          </Link>
        </div>

        {/* Right: remaining menu + actions */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex md:items-center gap-6 text-base font-semibold">
            {(menu.length ? menu.map((item: Menu) => ({ title: item.title, path: item.path })) : [])
              .concat(staticLinks)
              .slice(Math.ceil(((menu.length ? menu.length : 0) + staticLinks.length) / 2))
              .map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-700 underline-offset-4 hover:text-black hover:underline dark:text-neutral-200 dark:hover:text-neutral-50 font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <CartModal />
          </div>
        </div>
      </div>

      {/* Mobile row: left menu button, centered logo, right actions */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center justify-between">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
          <Link href="/" prefetch={true} className="flex items-center justify-center">
            <Image
              src="/logos/IconBlack.png"
              alt={`${SITE_NAME} logo`}
              width={56}
              height={56}
              className="block dark:hidden h-14 w-14"
              priority
            />
            <Image
              src="/logos/IconBlack.png"
              alt={`${SITE_NAME} logo`}
              width={56}
              height={56}
              className="hidden dark:block h-14 w-14 invert"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <CartModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
