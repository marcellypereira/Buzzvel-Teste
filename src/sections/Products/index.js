/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import Text from "../../components/Text";

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
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="mt-20 lg:mt-40 text-center px-4"
      >
        <Text variant="p-medium" className="text-[#D97706] lg:mt-0 md:mt-0 mt-32">
          No more waste
        </Text>
        <Text variant="h1" className="text-[#0F172A] mt-4 mb-6 text-center">
          Pick the Sun
        </Text>
        <article className="lg:max-w-[900px] lg:mx-auto mx-6 font-normal">
          <Text variant="p-description" className="text-[#0F172A] text-center lg:max-w-[900px] md:max-w-[814px] max-w-[343px] lg:m-0 md:m-auto mx-auto">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar purus maecenas quam a. Erat
            porttitor pharetra sed in mauris elementum sollicitudin.
          </Text>
        </article>
      </motion.section>

      <motion.figure
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="lg:mt-0"
      >
        <img
          src="Circles-Desktop.png"
          alt="Illustrative image of Pick the Sun"
          className="w-full object-cover"
        />
      </motion.figure>
    </main>
  );
});

export default Products;
