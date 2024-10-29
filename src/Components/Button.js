import React from "react";
import { HiArrowRight } from "react-icons/hi";

const OutlineButton = ({ text, variant = "primary", onClick }) => {
  const styles =
    variant === "primary"
      ? "border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-[#FCD34D]"
      : "border-[#FCD34D] text-[#FCD34D] hover:bg-[#FCD34D] hover:text-[#78350F]";

  return (
    <button
      className={`flex items-center justify-center border-2 ${styles} transition duration-300 w-[306px] h-16 rounded-full hover:shadow-xl`}
      onClick={onClick}
    >
      <span className="text-center text-2xl font-bold leading-6">{text}</span>
      <HiArrowRight className="ml-4 w-5 h-5" />
    </button>
  );
};

export default OutlineButton;
