"use client";

import { useState, type FormEvent } from "react";
import Modal from "../Modal";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransfer: (
    address: string,
    amount: number
  ) => Promise<{ success: boolean; error?: string }>;
  balance: number;
  currency?: string;
  image?: string;
}

const TransferModal = ({
  isOpen,
  onClose,
  onTransfer,
  balance,
  currency = "SUI",
  image,
}: TransferModalProps) => {
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(balance || 500);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const isValidAddress = (addr: string): boolean => {
    return addr.startsWith("0x") && addr.length >= 42;
  };

  const handleAmountChange = (newAmount: number): void => {
    if (newAmount >= 0 && newAmount <= balance) {
      setAmount(newAmount);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (!address.trim()) {
      setError("Please enter a wallet address");
      return;
    }

    if (!isValidAddress(address)) {
      setError("Invalid SUI wallet address");
      return;
    }

    if (amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    if (amount > balance) {
      setError("Insufficient funds for this transfer");
      return;
    }

    setIsLoading(true);
    try {
      const result = await onTransfer(address, amount);
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          resetForm();
          onClose();
        }, 2000);
      } else {
        setError(result.error || "Transfer failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Transfer error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = (): void => {
    setAddress("");
    setAmount(balance || 500);
    setError(null);
    setIsSuccess(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Withdraw Tokens'>
      {isSuccess ? (
        <div className='text-center'>
          <div className='flex justify-center items-center bg-green-600 mx-auto mb-4 rounded-full w-16 h-16'>
            <span className='text-2xl'>✅</span>
          </div>
          <h3 className='mb-2 font-semibold text-white text-xl'>
            Transfer Successful!
          </h3>
          <p className='text-gray-400'>
            You have successfully transferred {amount} {currency} to the wallet.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Amount Section */}
          <div className='mb-6 pb-6 border-gray-800 border-b'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
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
                  <div className='font-bold text-white text-3xl'>{amount}</div>
                  <div className='text-gray-400 text-sm'>Available blocks</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <button
                  type='button'
                  onClick={() => handleAmountChange(amount + 10)}
                  className='flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 rounded w-8 h-8 text-white'
                >
                  +
                </button>
                <button
                  type='button'
                  onClick={() => handleAmountChange(amount - 10)}
                  className='flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 rounded w-8 h-8 text-white'
                >
                  −
                </button>
              </div>
            </div>
          </div>

          {/* Address Input Section */}
          <div className='mb-6 pb-6 border-gray-800 border-b'>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Wallet Address'
              className='bg-gray-800 px-4 py-3 border border-gray-700 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full text-white placeholder-gray-400'
              required
            />
            <p className='mt-3 text-yellow-500 text-sm'>
              Note: Input a SUI wallet address you would like to send your
              tokens to.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className='bg-red-900/30 mb-6 p-3 border border-red-800 rounded-lg'>
              <span className='text-red-400 text-sm'>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type='submit'
              disabled={isLoading}
              className='bg-gradient-to-r from-primary to-secondary mb-4 px-8 py-3 rounded-full min-w-[120px] font-medium text-white transition-colors'
            >
              {isLoading ? (
                <span className='flex justify-center items-center'>
                  <span className='mr-2 animate-spin'>⏳</span>
                  Processing...
                </span>
              ) : (
                "Withdraw"
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default TransferModal;
