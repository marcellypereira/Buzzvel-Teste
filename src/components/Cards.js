import React from 'react';

const Card = ({ text, image, name, power }) => {
  return (
    <article className="flex-shrink-0 p-4 card">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-[304px] h-96 flex flex-col justify-center transition-transform duration-300 hover:scale-105">
        <p className="text-center text-base mb-4 pt-16">{text}</p>
        <div className="flex items-center mt-4">
          <img src={image} alt={`Imagem de ${name}`} className="mr-4" />
          <div>
            <h2 className="text-base font-semibold">{name}</h2>
            <p className="text-gray-500">{power}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
