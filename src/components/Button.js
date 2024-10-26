import React from "react";
import { HiArrowRight } from "react-icons/hi";

const OutlineButton = ({ text, variant = "primary", onClick }) => {
  const styles =
    variant === "primary"
      ? "border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-[#FCD34D]"
      : "border-[#FCD34D] text-[#FCD34D] hover:bg-[#FCD34D] hover:text-[#78350F]";

  return (
    <button
      className={`flex items-center border ${styles} font-bold leading-6 text-2xl transition duration-300 py-5 px-8 rounded-full hover:shadow-xl`}
      onClick={onClick}
    >
      {text}
      <HiArrowRight className="ml-4 w-4 h-4" />
    </button>
  );
};

export default OutlineButton;
