'use client';
import FilterSidebar from '@/components/UI/FilterSidebar';
import Modal from '@/components/UI/Modal/Modal';
import { MODAL_VIEWS, useModalAction, useModalState } from './Modal.context';

function renderModal(
  view: MODAL_VIEWS | undefined
  // data: any
) {
  switch (view) {
    case 'OPEN_FILTER':
      return <FilterSidebar />;
    // case 'SELECT_PRODUCT_VARIATION':
    //   return <ProductVariation productSlug={data} />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal} title={data?.title}>
      {renderModal(
        view
        // , data
      )}
    </Modal>
  );
};

export default ManagedModal;
