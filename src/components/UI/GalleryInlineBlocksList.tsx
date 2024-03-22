'use client';
import { EmptyPlus } from '@/components/Icons/EmptyPlus';
import { useModalAction } from '@/components/UI/Modal/Modal.context';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

const GalleryItemContainer: FC<{
  handleOpenGallery: () => void;
  children: ReactNode;
}> = ({ handleOpenGallery, children }) => (
  <div
    onClick={handleOpenGallery}
    className="bg-dark-gray-white p-2 mb-3 w-20 h-16 flex justify-center mx-1 cursor-pointer"
  >
    {children}
  </div>
);

export interface GalleryInlineBlocksListProps {
  thumbnails: {
    id: number | string;
    thumbnail: string;
  }[];
  gallery: {
    id: number | string;
    type: 'image' | 'video';
    image?: string;
    video?: string;
    thumbnail?: string;
  }[];
}

const GalleryInlineBlocksList: FC<GalleryInlineBlocksListProps> = ({
  thumbnails,
  gallery,
}) => {
  const { openModal } = useModalAction();

  const handleOpenGallery = (itemId: number | string | null): void => {
    openModal('OPEN_DEVICE_GALLERY', 'max-w-full', {
      activeSlide: itemId,
      gallery,
    });
  };

  const galleryList = (
    <>
      {thumbnails.map((item, idx) => (
        <GalleryItemContainer
          key={idx}
          handleOpenGallery={() => handleOpenGallery(item.id)}
        >
          <Image
            src={item.thumbnail}
            alt="Device Thumbnail"
            width={62}
            height={45}
            className="w-auto h-max text-center m-auto"
          />
        </GalleryItemContainer>
      ))}
      <GalleryItemContainer handleOpenGallery={() => handleOpenGallery(null)}>
        <EmptyPlus
          fontSize={25}
          className="text-dark-gray hover:text-light-primary m-auto transition-colors duration-300 ease-in-out"
        />
      </GalleryItemContainer>
    </>
  );
  return (
    <div className="images-inline-list rounded-xl flex flex-wrap items-center w-fit">
      {galleryList}
    </div>
  );
};

export default GalleryInlineBlocksList;
