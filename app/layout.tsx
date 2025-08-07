import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { ThemeProvider } from 'components/theme/theme-provider';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const PLACEHOLDER_MODE = process.env.SHOPIFY_PLACEHOLDER_MODE === 'true';
const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // In placeholder mode, skip Shopify calls and provide an empty cart.
  const cart = PLACEHOLDER_MODE
    ? Promise.resolve(undefined)
    : getCart();

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="text-black selection:bg-teal-300 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        {/* No-flash theme script: runs before hydration to set initial theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var storageKey = 'theme';
    var stored = localStorage.getItem(storageKey);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();`
          }}
        />
        <ThemeProvider>
          <CartProvider cartPromise={cart}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />
              <WelcomeToast />
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
