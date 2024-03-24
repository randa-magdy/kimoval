'use client';
import cn from 'classnames';
import { FC, ReactNode } from 'react';
import {
  accepted2XlPadding,
  accepted2XlWidth,
  acceptedLgPadding,
  acceptedLgWidth,
  acceptedMdPadding,
  acceptedMdWidth,
  acceptedPaddings,
  acceptedSmPadding,
  acceptedSmWidth,
  acceptedXlPadding,
  acceptedXlWidth,
  acceptedXsPadding,
  acceptedXsWidth,
} from './type';

export type Gutter =
  | acceptedPaddings
  | [acceptedPaddings, acceptedPaddings]
  | {
      xs?: acceptedXsPadding;
      sm?: acceptedSmPadding;
      md?: acceptedMdPadding;
      lg?: acceptedLgPadding;
      xl?: acceptedXlPadding;
      xxl?: accepted2XlPadding;
    };

interface ColProps {
  xs?: acceptedXsWidth;
  sm?: acceptedSmWidth;
  md?: acceptedMdWidth;
  lg?: acceptedLgWidth;
  xl?: acceptedXlWidth;
  xxl?: accepted2XlWidth;
  children: ReactNode;
  className?: string;
  gutter?: Gutter;
}

const classes = {
  root: 'col relative',
};

const Col: FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className,
  gutter = { xs: 'p-2', xl: 'xl:p-3' },
  children,
}) => {
  let classNames = classes.root;

  // Handle breakpoints properties
  const breakpoints = { xs, sm, md, lg, xl, xxl };
  // classNames += ` w-full`;

  Object.values(breakpoints).forEach((value) => {
    if (value) {
      classNames += ` ${value}`;
    }
  });

  // Handle gutter property
  // classNames += ` p-2`;
  if (typeof gutter === 'number') {
    classNames += ` p-${gutter}`;
  } else if (typeof gutter === 'object' && !Array.isArray(gutter)) {
    Object.values(gutter).forEach((value) => {
      classNames += ` ${value}`;
    });
  } else if (typeof gutter === 'object' && Array.isArray(gutter)) {
    classNames += ` px-${gutter[0]} py-${gutter[1]}`;
  }

  return <div className={cn(classNames, className)}>{children}</div>;
};

export default Col;
