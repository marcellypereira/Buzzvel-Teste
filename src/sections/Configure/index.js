import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import OutlineButton from "../../components/Button";

const Configure = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="max-w-[1920px] mx-auto">
      <Helmet>
        <title>Get the Sun to power your home</title>
        <meta name="description" content="All the power that you need for your house is now available" />
      </Helmet>

      <section className="gap-10 items-center lg:bg-[#7E22CE] md:bg-[#7E22CE] bg-[#581C87]">
        <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse">
          <div className="flex flex-col items-center lg:justify-center">
            <figure className="lg:flex md:flex lg:items-center md:items-center lg:justify-center md:justify-center relative">
              <img src="Ellipse1.png" alt="Imagem ilustrativa" className="hidden lg:block md:block w-[790px]" />
              <div className="lg:absolute md:absolute hidden md:flex flex-col items-center justify-center">
                <OutlineButton text="Request a Quote" variant="secondary" />
                <p className="mt-2 text-center text-[#FFFFFF] font-normal">Egestas fringilla aliquam leo</p>
              </div>
            </figure>
          </div>

          <div className="px-4 lg:text-left md:text-left mx-auto w-full lg:w-auto mt-10 mt-0.5 text-center">
            <p className="text-base md:text-lg lg:text-xl text-[#FCD34D] leading-8 md:leading-9 font-medium mt-4">
              Get the Sun to power your home
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] mb-6 lg:max-w-[775px] md:max-w-[574px] max-w-[358px] mx-auto">
              All the power that you need for your house is now available
            </h1>
            <div className="flex flex-col items-center justify-center mt-4 md:hidden">
              <OutlineButton text="Request a Quote" variant="secondary" />
              <p className="mt-2 text-center text-[#FFFFFF] font-normal">Egestas fringilla aliquam leo</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <figure className="lg:-mt-24 md:-mt-22 lg:mb-0 md:mb-0 -mb-44">
            <img src="Macbook.png" alt="Ilustração de um MacBook" />
          </figure>
        </div>

        <figure className="md:hidden lg:hidden flex justify-start">
          <img src="Ellipse2.png" alt="Imagem decorativa" />
        </figure>
      </section>
    </header>
  );
});

export default Configure;
