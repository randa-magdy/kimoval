import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

interface AvatarProps {
  src: string;
  size?: 'large' | 'small' | 'default';
  // | {
  //     xs: number;
  //     sm: number;
  //     md: number;
  //     lg: number;
  //     xl: number;
  //     xxl: number;
  //   };
  shape?: 'circle' | 'square';
}

const classes = {
  root: 'avatar relative',
  default: 'w-16 h-16',
  large: 'w-24 h-24',
  small: 'w-8 h-8',
  circle: 'rounded-full',
  square: 'rounded-lg',
};

const Avatar: FC<AvatarProps> = ({
  src,
  size = 'default',
  shape = 'circle',
}) => {
  const classesName = cn(classes.root, {
    [classes.default]: size === 'default',
    [classes.large]: size === 'large',
    [classes.small]: size === 'small',
    [classes.circle]: shape === 'circle',
    [classes.square]: shape === 'square',
  });

  return (
    <div className={classesName}>
      <Image
        src={src}
        alt="avatar"
        loading="lazy"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
