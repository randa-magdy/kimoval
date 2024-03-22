import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {}

export type GalleryProps={
  id: number | string;
  type: 'image' | 'video';
  image?: string;
  video?: string;
  thumbnail: string;
}

export type Gallery = GalleryProps[];
