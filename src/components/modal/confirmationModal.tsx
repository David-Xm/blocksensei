"use client";

import Modal from "../modal";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) => {
  const handleConfirm = (): void => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className='text-center'>
        <p className='mb-8 text-gray-300 text-lg leading-relaxed'>{message}</p>
        <div className='flex justify-center gap-4'>
          <button
            onClick={onClose}
            className='hover:bg-gray-800 px-6 py-3 border border-gray-600 rounded-lg text-gray-300 transition-colors'
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className='bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white transition-colors'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
