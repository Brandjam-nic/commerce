import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul
      {...props}
      className={clsx(
        // Responsive 2/3/4/5 column grid with generous gutters
        'grid grid-flow-row gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        // Add top spacing to separate from any tabs/filters
        'mt-6',
        props.className
      )}
    >
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx(
        // Remove aspect ratio as it's handled by the image component
        // Remove hover effects for cleaner look
        props.className
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
