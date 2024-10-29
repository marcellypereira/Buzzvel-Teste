import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ text, image, name, power }) => {
  return (
    <article className="flex-shrink-0 p-4 card">
      <div className="bg-[#FFFFFF] shadow-md rounded-lg p-8 lg:max-w-[364px] lg:h-[442px] md:max-w-[364px] md:h-[442px] max-w-[358px] h-[359px] flex flex-col justify-center transition-transform duration-300 hover:scale-105">
        <p className="lg:text-lg md:text-lg text-base font-normal lg:leading-[28.8px] md:leading-[28.8px] leading-[22.4px] mb-4 pt-24 lg:max-w-[300px]md:max-w-[300px] max-w-[294px] text-[#0F172A]">{text}</p>
        <div className="flex items-center mt-4">
          <LazyLoadImage src={image} alt={`Imagem de ${name}`} className="mr-4" />
          <div>
            <h2 className="lg:text-lg md:text-lg text-base	font-normal lg:leading-[28.8px] md:leading-[28.8px] leading-[22.4px] text-[#0F172A] lg:max-w-[220px]md:max-w-[220px] max-w-[238px]">{name}</h2>
            <p className="text-[#475569] lg:text-base md:text-base text-sm lg:leading-[22.4px] md:leading-[22.4px] leading-[19.6px]">{power}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
