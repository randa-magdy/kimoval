'use client';
import cn from 'classnames';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { CSSProperties, FC, ReactNode } from 'react';

type ScrollbarProps = {
  options?: any;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
};

const Scrollbar: FC<ScrollbarProps> = ({
  options,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn('', className),
        scrollbars: {
          // autoHide: 'scroll',
        },
        ...(options ? options : {}),
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
