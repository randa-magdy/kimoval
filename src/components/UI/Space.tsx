'use client';
import cn from 'classnames';
import React, { ReactNode } from 'react';

interface SpaceProps {
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'end' | 'center' | 'baseline';
  size?: 'small' | 'middle' | 'large' | number;
  className?: string;
  children: ReactNode;
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    direction = 'horizontal',
    align = 'center',
    size = 'small',
    children,
    className,
  } = props;

  const classes = {
    root: 'grid',
    vertical: 'grid-flow-row gap-x-2',
    horizontal: 'grid-flow-col gap-y-2',
    small: 'gap-x-2 gap-y-2',
    middle: 'gap-x-4 gap-y-4',
    large: 'gap-x-6 gap-y-6',
    sizeNum: `gap-x-${size} gap-y-${size}`,
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
  };

  const classesName = cn(
    classes.root,
    {
      [classes.vertical]: direction === 'vertical',
      [classes.horizontal]: direction === 'horizontal',
      [classes.small]: size === 'small',
      [classes.middle]: size === 'middle',
      [classes.large]: size === 'large',
      [classes.sizeNum]: typeof size === 'number',
      [classes.start]: align === 'start',
      [classes.end]: align === 'end',
      [classes.center]: align === 'center',
      [classes.baseline]: align === 'baseline',
    },
    className
  );

  return (
    <div ref={ref} className={classesName}>
      {children}
    </div>
  );
});

Space.displayName = 'Space';
export default Space;
