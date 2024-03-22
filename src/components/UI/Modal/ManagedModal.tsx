'use client';
import FilterSidebar from '@/components/UI/FilterSidebar';
import Modal from '@/components/UI/Modal/Modal';
import AddNewReview from '@/features/Devices/SingleDevice/Components/RatingReviewsComments/AddNewReview';
import GalleryCarosel from '../GalleryCarosel';
import { MODAL_VIEWS, useModalAction, useModalState } from './Modal.context';

function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case 'OPEN_FILTER':
      return <FilterSidebar />;
    case 'OPEN_DEVICE_GALLERY':
      return (
        <GalleryCarosel
          data={data}
          previewSlideSettings={{
            navigation: true,
          }}
        />
      );
    case 'OPEN_ADD_REVIEW_FORM':
      return <AddNewReview />;
    // case 'SELECT_PRODUCT_VARIATION':
    //   return <ProductVariation productSlug={data} />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, width, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal} title={data?.title} width={width}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default ManagedModal;
