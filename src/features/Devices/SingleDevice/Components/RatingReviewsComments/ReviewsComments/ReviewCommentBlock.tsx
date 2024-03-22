import Avatar from '@/components/UI/Avatar';
import GalleryInlineBlocksList, {
  GalleryInlineBlocksListProps,
} from '@/components/UI/GalleryInlineBlocksList';
import RatingStars from '@/components/UI/Rating/RatingStars';
import Space from '@/components/UI/Space';
import { FC } from 'react';

export interface ReviewCommentBlockProps {
  review: {
    name: string;
    date: string;
    rate: number;
    comment: string;
    media: {
      thumbnails: GalleryInlineBlocksListProps['thumbnails'];
      gallery: GalleryInlineBlocksListProps['gallery'];
    };
  };
}

const ReviewCommentBlock: FC<ReviewCommentBlockProps> = ({ review }) => {
  return (
    <div className="p-5 shadow-md mb-3">
      <Space>
        <div className="flex items-center">
          <Avatar src="/images/single-device/avatar.avif" size="default" />
          <div className="flex flex-col mx-3">
            <span className="text-medium font-semibold text-dark-gray">
              {review.name}
            </span>
            <span className="text-small text-light-gray">{review.date}</span>
          </div>
        </div>
        <div className="ms-auto">
          <RatingStars rate={review.rate} size={15} />
        </div>
      </Space>
      <p className="text-medium text-dark-gray p-5">{review.comment}</p>
      <div className="flex ">
        <GalleryInlineBlocksList
          thumbnails={review.media.thumbnails}
          gallery={review.media.gallery}
        />
      </div>
    </div>
  );
};

export default ReviewCommentBlock;
