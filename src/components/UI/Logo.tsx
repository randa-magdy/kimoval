import cn from 'classnames';
import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

const Logo: FC<AnchorHTMLAttributes<{}>> = ({ className }) => {
  return (
    <Link href="/" className={cn('inline-flex', className)}>
      <span className="relative overflow-hidden">
        {/* <Image
          src="Kimoval"
          alt="logo"
          layout="fill"
          objectFit="contain"
          loading="eager"
          {...props}
        /> */}
        Logo
      </span>
    </Link>
  );
};

export default Logo;
