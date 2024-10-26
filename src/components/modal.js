import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center animate-fade-in">
      <div className="bg-white shadow-sm rounded-xl w-[full] sm:max-w-lg flex flex-col transform pointer-events-auto animate-slide-up">
        <div className="flex justify-between items-center py-3 px-4 border-b border-[#e7e7e7]">
          <img src="soller.png" alt="" />
          <button
            type="button"
            className=""
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className="shrink-0 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <p className="mt-1 text-[#475569]">
            Quote requested successfully! Our team is analyzing it and you will
            receive information shortly.
          </p>
        </div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4">
          <button
            type="button"
            className="rounded-md py-2 px-4 font-medium text-[#475569] hover:text-[#FFFFFF] hover:bg-[#581C87] hover:shadow-lg hover:shadow-[#581C87]/50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
