import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div className="flex flex-col gap-3">
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            {/* Replace mark with wordmark that adapts to theme */}
            <span className="inline-flex items-center">
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
          {/* Footer brand strip */}
          <div className="flex items-center gap-4">
            <Image
              src="/logos/PushForward.png"
              alt="Push Forward"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority={false}
            />
            <Image
              src="/logos/PushForwardSide.png"
              alt="Push Forward Side"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority={false}
            />
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <Link href="/collections" className="hover:underline" prefetch={true}>
              Collections
            </Link>
            <Link href="/about" className="hover:underline" prefetch={true}>
              About
            </Link>
            <Link href="/faq" className="hover:underline" prefetch={true}>
              FAQ
            </Link>
            <Link href="/shipping" className="hover:underline" prefetch={true}>
              Shipping
            </Link>
            <Link href="/returns" className="hover:underline" prefetch={true}>
              Returns
            </Link>
            <Link href="/size-guide" className="hover:underline" prefetch={true}>
              Size Guide
            </Link>
            <Link href="/privacy" className="hover:underline" prefetch={true}>
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline" prefetch={true}>
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className="md:ml-auto">
            <Link href="/privacy" className="hover:underline" prefetch={true}>
              Privacy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:underline" prefetch={true}>
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
