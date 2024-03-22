import cn from 'classnames';
import { Children, FC, ReactNode, cloneElement, isValidElement } from 'react';
import { Gutter } from './Col';
import {
  accepted2XlAlign,
  accepted2XlJustify,
  acceptedAligns,
  acceptedJustifies,
  acceptedLgAlign,
  acceptedLgJustify,
  acceptedMdAlign,
  acceptedMdJustify,
  acceptedSmAlign,
  acceptedSmJustify,
  acceptedXlAlign,
  acceptedXlJustify,
  acceptedXsAlign,
  acceptedXsJustify,
} from './type';

interface RowProps {
  justify?:
    | acceptedJustifies
    | {
        xs?: acceptedXsJustify;
        sm?: acceptedSmJustify;
        md?: acceptedMdJustify;
        lg?: acceptedLgJustify;
        xl?: acceptedXlJustify;
        xxl?: accepted2XlJustify;
      };
  align?:
    | acceptedAligns
    | {
        xs?: acceptedXsAlign;
        sm?: acceptedSmAlign;
        md?: acceptedMdAlign;
        lg?: acceptedLgAlign;
        xl?: acceptedXlAlign;
        xxl?: accepted2XlAlign;
      };
  wrap?: boolean;
  gutter?: Gutter;
  className?: string;
  children: ReactNode;
}

const classes = {
  root: 'row flex -mx-4',
};

const Row: FC<RowProps> = ({
  justify = 'start',
  align = 'top',
  wrap = true,
  gutter,
  className,
  children,
}) => {
  let classNames = classes.root;

  // Handle justify property
  if (typeof justify === 'string') {
    classNames += ` justify-${justify}`;
  } else if (typeof justify === 'object') {
    Object.values(justify).forEach((value) => {
      classNames += ` ${value}`;
    });
  }

  // Handle align property
  if (typeof align === 'string') {
    classNames += ` items-${align}`;
  } else if (typeof align === 'object') {
    Object.values(align).forEach((value) => {
      classNames += ` ${value}`;
    });
  }

  // Add flex-wrap class if wrap is true
  if (wrap) {
    classNames += ' flex-wrap';
  }

  return (
    <div className={cn(classNames, className)}>
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { gutter } as any) : child
      )}
    </div>
  );
};

export default Row;
