import Space from '@/components/UI/Space';
import ReviewCommentBlock, {
  ReviewCommentBlockProps,
} from './ReviewCommentBlock';

const reviews: ReviewCommentBlockProps['review'][] = [
  {
    name: 'Hector Gibbons',
    date: '1 month ago',
    rate: 4.5,
    comment:
      'Great mobile for the price a real flagship for 675$ it worth every penny I spent on it',
    media: {
      gallery: [
        {
          id: 1,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837243_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837243_default_big.webp',
        },
        {
          id: 2,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837242_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837242_default_big.webp',
        },
      ],
      thumbnails: [
        {
          id: 1,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837243_default_x_small.webp',
        },
        {
          id: 2,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837242_default_x_small.webp',
        },
      ],
    },
  },
  {
    name: 'Emily Selman',
    date: '5 days',
    rate: 2.9,
    comment:
      'It has a construction problem and that is that when recording in 4k for 4 or more minutes in areas where the temperature is cool, the lens of the main sensor fogs up. Something unthinkable for a 1100 euro mobile.',
    media: {
      gallery: [
        {
          id: 1,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837628_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837628_default_big.webp',
        },
        {
          id: 2,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837629_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837629_default_big.webp',
        },
      ],
      thumbnails: [
        {
          id: 1,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837628_default_x_small.webp',
        },
        {
          id: 2,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837629_default_x_small.webp',
        },
      ],
    },
  },
  {
    name: 'Mark Edwards',
    date: '3 weeks ago',
    rate: 3,
    comment:
      'Hi all! The smartphone is very cool, powerful, beautiful and very compact, I scored 2,200 million points in Antutu, it works sooooo fast, everything you need is there, a perfect compact flagship, no cons',
    media: {
      gallery: [
        {
          id: 1,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837626_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837626_default_big.webp',
        },
        {
          id: 2,
          type: 'image',
          image: '/images/single-device/gallery/thumb_837627_default_big.webp',
          thumbnail:
            '/images/single-device/gallery/thumb_837627_default_big.webp',
        },
      ],
      thumbnails: [
        {
          id: 1,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837626_default_x_small.webp',
        },
        {
          id: 2,
          thumbnail:
            '/images/single-device/thumbnails/thumb_837627_default_x_small.webp',
        },
      ],
    },
  },
];
const ReviewCommentList = () => {
  const reviewsList =
    reviews.length > 0 &&
    reviews.map((review, idx) => (
      <ReviewCommentBlock key={idx} review={review} />
    ));

  return <Space direction="vertical">{reviewsList}</Space>;
};

export default ReviewCommentList;
