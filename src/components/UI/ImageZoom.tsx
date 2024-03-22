import { FC } from 'react';
import InnerImageZoom, { InnerImageZoomProps } from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

interface ImageZoomProps extends Omit<InnerImageZoomProps, 'src'> {
  img: string;
}

const ImageZoom: FC<ImageZoomProps> = ({ img, ...restProps }) => {
  return (
    <InnerImageZoom src={img} zoomSrc={img} zoomType="hover" {...restProps} />
  );
};

export default ImageZoom;
