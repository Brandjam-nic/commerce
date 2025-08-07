import clsx from 'clsx';
import Image from 'next/image';
import Price from '../price';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        // Clean card container with subtle border
        'group flex h-full w-full flex-col border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950',
        {
          'ring-2 ring-blue-600': active
        }
      )}
    >
      {/* Image container */}
      <div className="relative w-full flex-1 overflow-hidden bg-white dark:bg-neutral-900">
        {/* Taller aspect ratio for product images like in reference */}
        <div className="relative aspect-[3/4] w-full">
          {props.src ? (
            <Image
              className={clsx(
                // Product image: cover to fill the frame
                'h-full w-full object-cover object-center',
                { 'transition-transform duration-300 ease-out group-hover:scale-105': isInteractive }
              )}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              {...props}
            />
          ) : null}
        </div>
      </div>

      {/* Product info below image */}
      {label ? (
        <div className="px-1 py-3 text-center">
          <h3 className="mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {label.title}
          </h3>
          <Price
            className="text-sm text-neutral-900 dark:text-neutral-100"
            amount={label.amount}
            currencyCode={label.currencyCode}
            currencyCodeClassName="hidden"
          />
        </div>
      ) : null}
    </div>
  );
}
