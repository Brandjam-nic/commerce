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
    { title: 'About', path: '/about' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Shipping', path: '/shipping' },
    { title: 'Returns', path: '/returns' },
    { title: 'Size Guide', path: '/size-guide' }
  ];

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* Mobile: icon-only */}
            <span className="md:hidden">
              <Image
                src="/logos/IconBlack.png"
                alt={`${SITE_NAME} logo`}
                width={32}
                height={32}
                className="block dark:hidden h-8 w-8"
                priority
              />
              <Image
                src="/logos/IconBlack.png"
                alt={`${SITE_NAME} logo`}
                width={32}
                height={32}
                className="hidden dark:block h-8 w-8 invert"
                priority
              />
            </span>

            {/* Desktop: wordmark, auto-switch to white in dark mode */}
            <span className="hidden md:inline-flex items-center">
              <Image
                src="/logos/LogoBlack.png"
                alt={`${SITE_NAME} wordmark`}
                width={140}
                height={32}
                className="block dark:hidden h-8 w-auto"
                priority
              />
              <Image
                src="/logos/LogoWhite.png"
                alt={`${SITE_NAME} wordmark`}
                width={140}
                height={32}
                className="hidden dark:block h-8 w-auto"
                priority
              />
            </span>
          </Link>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {(menu.length ? menu.map((item: Menu) => ({ title: item.title, path: item.path })) : [])
              .concat(staticLinks)
              .map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {/* Center column removed: search not needed for small catalog */}
        <div className="hidden md:flex md:w-1/3" />
        <div className="flex items-center gap-2 justify-end md:w-1/3">
          <ThemeToggle />
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
