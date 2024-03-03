'use client';
import { Close } from '@/components/Icons/Close';
import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string | ReactNode;
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  // const { locale } = useRouter();
  // const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h2"
                  className="font-bold leading-6 text-gray-900 w-full"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-dark-gray text-h2">{title}</span>
                    <button
                      onClick={onClose}
                      className="block bg-dark-gray rounded-full p-1 "
                    >
                      <Close fontSize={20} className="text-white" />
                    </button>
                  </div>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
