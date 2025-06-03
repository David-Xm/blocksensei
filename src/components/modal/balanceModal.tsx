"use client";

import Modal from "../modal";

interface BalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  walletAddress?: string;
  currency?: string;
  image?: string;
}

const BalanceModal = ({
  isOpen,
  onClose,
  balance,
  walletAddress,
  currency = "SUI",
  image,
}: BalanceModalProps) => {
  const formatAddress = (address: string): string => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Your Balance'>
      <div className='text-center'>
        <div className='mb-6 p-6 border border-gray-800 rounded-lg'>
          <div className='flex justify-center items-center gap-3'>
            <div>
              {image ? (
                <img
                  src={image || "/placeholder.svg"}
                  alt='Reward'
                  className='mx-auto w-24 h-24'
                />
              ) : (
                <div className='flex justify-center items-center bg-yellow-500 mx-auto mb-6 rounded-full w-24 h-24'>
                  <span className='text-4xl'>$</span>
                </div>
              )}
            </div>
            <div>
              <div className='font-bold text-white text-3xl'>{balance}</div>
              <div className='text-gray-400'>{currency}</div>
            </div>
          </div>
        </div>

        {walletAddress && (
          <div className='bg-gray-900 mb-6 p-4 border border-gray-800 rounded-lg'>
            <p className='mb-2 text-gray-400 text-sm'>Wallet Address</p>
            <p className='font-mono text-gray-300 text-sm'>
              {formatAddress(walletAddress)}
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className='bg-gradient-to-r from-primary to-secondary mb-4 px-8 py-3 rounded-full text-white transition-colors'
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default BalanceModal;
