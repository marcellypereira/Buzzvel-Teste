import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import OutlineButton from "../../components/Button";

const Hero = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="mx-auto relative">
      <Helmet>
        <title>Get the Sun to Power Your Home</title>
        <meta name="description" content="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque." />
      </Helmet>

      <main className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col lg:gap-8 md:grid-cols-2 md:grid-flow-col md:gap-8">
        <section className="lg:ml-20 md:ml-20 flex flex-col items-center lg:items-start md:items-start text-center lg:text-left lg:max-w-[717px] lg:pt-32 mt-8 md:text-left md:max-w-[600px] md:pt-12 px-4 order-2 lg:order-1 md:order-1">
          <h1 className="lg:text-7xl lg:font-extrabold md:font-extrabold font-bold leading-tight max-w-[343px] mx-auto text-[40px] md:text-4xl md:max-w-none text-[#0F172A]">
            Get the Sun to Power Your Home
          </h1>
          <p className="lg:text-2xl md:text-2xl font-normal mt-4 lg:mt-8 max-w-[343px] lg:max-w-none text-lg text-[#0F172A]">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
          </p>
          <div className="lg:pt-6 pt-4">
            <OutlineButton text="Request a Quote" variant="primary" />
          </div>

          <figure className="mt-8 lg:mt-28">
            <blockquote className="font-normal text-left text-lg text-[#0F172A] max-w-[343px] lg:max-w-full">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
            </blockquote>
            <figcaption className="flex flex-wrap gap-2 cursor-pointer mt-7">
              <img src="User1.png" alt="Imagem de Rwanda Melflor" />
              <p className="font-normal text-lg text-[#0F172A]">
                Rwanda Melflor<br />
                <span className="font-normal text-base text-[#475569]">zerowaste.com</span>
              </p>
            </figcaption>
          </figure>
        </section>

        <aside className="flex justify-end lg:mt-0 order-1 lg:order-2 md:order-2">
          <div className="max-w-2xl w-full">
            <img src="image.png" alt="Imagem Solar" className="w-[673px] h-auto lg:max-w-full" />
          </div>
        </aside>
      </main>
    </header>
  );
});

export default Hero;
