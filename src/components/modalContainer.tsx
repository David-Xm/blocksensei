"use client";

import ConfirmationModal from "./modal/confirmationModal";
import RewardModal from "./modal/rewardModal";
import TransferModal from "./modal/transferModal";
import type React from "react";
import BalanceModal from "./modal/balanceModal";
import { useModal } from "../context/modalContext";

const ModalContainer = (): React.ReactElement | null => {
  const { isOpen, modalType, modalProps, closeModal } = useModal();

  const handleTransfer = async (
    address: string,
    amount: number
  ): Promise<{ success: boolean; error?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Use the parameters to avoid unused variable warnings
        console.log(`Attempting transfer of ${amount} to ${address}`);
        const success = Math.random() > 0.2;
        if (success) {
          resolve({ success: true });
        } else {
          resolve({
            success: false,
            error: "Network error. Please try again later.",
          });
        }
      }, 1500);
    });
  };

  switch (modalType) {
    case "confirmation":
      return (
        <ConfirmationModal
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={modalProps.onConfirm || (() => {})}
          title={modalProps.title}
          message={modalProps.message || "Are you sure you want to proceed?"}
          confirmText={modalProps.confirmText}
          cancelText={modalProps.cancelText}
        />
      );

    case "reward":
      return (
        <RewardModal
          isOpen={isOpen}
          onClose={closeModal}
          title={modalProps.title}
          message={modalProps.message || "You've earned a reward!"}
          rewardAmount={modalProps.rewardAmount}
          rewardType={modalProps.rewardType}
          image={modalProps.image}
        />
      );

    case "balance":
      return (
        <BalanceModal
          isOpen={isOpen}
          onClose={closeModal}
          balance={modalProps.balance || 0}
          walletAddress={modalProps.walletAddress}
          currency={modalProps.currency}
          image={modalProps.image}
        />
      );

    case "transfer":
      return (
        <TransferModal
          isOpen={isOpen}
          onClose={closeModal}
          onTransfer={modalProps.onTransfer || handleTransfer}
          balance={modalProps.balance || 0}
          currency={modalProps.currency}
          image={modalProps.image}
        />
      );

    default:
      return null;
  }
};

export default ModalContainer;
