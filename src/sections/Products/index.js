/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Products = forwardRef((props, ref) => {
  return (
    <main ref={ref} className="mx-auto">
      <Helmet>
        <title>Pick the Sun</title>
        <meta
          name="description"
          content="No more waste. Et pulvinar nec interdum integer id urna molestie porta nullam."
        />
      </Helmet>

      <motion.section 
        variants={fadeIn("left",0.30)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.7}}
        className="mt-20 lg:mt-40 text-center px-4">
        <p className="text-lg sm:text-xl text-[#D97706] leading-9 font-medium mt-6 lg:mt-10 md:mt-10">
          No more waste
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:font-extrabold md:font-extrabold font-bold text-[#0F172A] mt-4 mb-6">
          Pick the Sun
        </h1>
        <article className="lg:max-w-[900px] lg:mx-auto mx-6 font-normal">
          <p className="lg:text-xl md:text-xl text-base">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
            turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
            sollicitudin.
          </p>
        </article>
      </motion.section>

      <figure className="lg:mt-0">
        <img
          src="Circles-Desktop.png"
          alt="Illustrative image of Pick the Sun"
          className="w-full object-cover"
        />
      </figure>
    </main>
  );
});

export default Products;
