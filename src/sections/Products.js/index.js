/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Helmet } from 'react-helmet';

const Products = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Helmet>
        <title>Pick the Sun</title>
        <meta
          name="description"
          content="No more waste. Et pulvinar nec interdum integer id urna molestie porta nullam."
        />
      </Helmet>

      <section className="mt-20 lg:mt-40 text-center px-4">
        <p className="text-lg sm:text-xl text-[#D97706] leading-9 font-medium mt-6 lg:mt-10">
          No more waste
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mt-4 mb-6">
          Pick the Sun
        </h1>
        <article className="lg:max-w-[900px] lg:mx-auto mx-6 font-normal">
          <p className="text-xl">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
            turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
            sollicitudin.
          </p>
        </article>
      </section>

      <figure className="lg:mt-0">
        <img
          src="Circles-Desktop.png"
          alt="Illustrative image of Pick the Sun"
          className="w-full object-cover"
        />
      </figure>
    </main>
  );
};

export default Products;
