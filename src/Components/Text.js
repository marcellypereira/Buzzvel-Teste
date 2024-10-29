import React from "react";

export const Title = ({ text, className = "" }) => {
  return (
    <h1
      className={`text-[32px] leading-[35.2px] font-bold mt-4 mb-6 
      md:text-[32px] md:leading-[40px] md:font-extrabold
      lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold ${className}`}
    >
      {text}
    </h1>
  );
};

export const Description = ({ text, className = "" }) => {
  return (
    <p
      className={`text-base leading-[22.4px] font-normal md:text-xl md:leading-9 md:font-normal lg:text-xl lg:leading-9 lg:font-normal ${className}`}
    >
      {text}
    </p>
  );
};

export const SubTitle = ({ text, className = "" }) => {
  return (
    <p
      className={`text-base leading-[17.6px] font-medium mt-16 
      md:text-xl md:leading-[22px] md:font-medium 
      lg:text-xl lg:leading-[22px] lg:font-medium ${className}`}
    >
      {text}
    </p>
  );
};

export const H2 = ({ text, className = "" }) => {
  return (
    <h2
      className={`text-xl leading-[22px] font-medium max-w-[147.5px]
      md:text-2xl font-bold leading-[26.4px] md:max-w-[566px] 
      lg:text-2xl font-bold leading-[26.4px] lg:max-w-[566px] ${className}`}
    >
      {text}
    </h2>
  );
};

export const P = ({ text, className = "" }) => {
  return (
    <p
      className={`text-base leading-[22.4px] font-normal max-w-[147.5px] text-center 
      md:text-lg font-normal leading-[28.8px] md:max-w-[566px] md:text-left 
      lg:text-lg font-normal leading-[28.8px] lg:max-w-[566px] lg:text-left mt-4 ${className}`}
    >
      {text}
    </p>
  );
};

const Text = { Title, Description, SubTitle, H2, P };
export default Text;
