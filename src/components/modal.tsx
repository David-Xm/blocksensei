"use client";

import type React from "react";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
}: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className='z-50 fixed inset-0 flex justify-center items-center bg-[#333333E0] backdrop-blur-sm p-4'
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-black rounded-2xl shadow-2xl transform transition-all ${sizeClasses[size]} w-full border border-gray-800`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className='flex justify-between items-center p-6 border-gray-800 border-b'>
            {title && (
              <h3 className='font-semibold text-white text-lg'>{title}</h3>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className='font-light text-white hover:text-gray-300 text-xl'
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className='p-6'>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
