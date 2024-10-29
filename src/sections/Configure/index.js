import React, { forwardRef, useState } from "react";
import { Helmet } from "react-helmet";
import OutlineButton from "../../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import Text from "../../components/Text";
import Modal from "../../components/Modal";

const Configure = forwardRef((props, ref) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header
      ref={ref}
      className="lg:bg-[#7E22CE] md:bg-[#7E22CE] bg-[#581C87] mx-auto"
    >
      <Helmet>
        <title>Get the Sun to power your home</title>
        <meta
          name="description"
          content="All the power that you need for your house is now available"
        />
      </Helmet>

      <section className="gap-10 items-center lg:bg-[#7E22CE] md:bg-[#7E22CE] bg-[#581C87]">
        <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse">
          <div className="flex flex-col items-center">
            <figure className="lg:flex md:flex lg:items-center md:items-center lg:justify-center md:justify-center relative">
              <img
                src="Ellipse1.png"
                alt="Imagem ilustrativa"
                className="hidden lg:block md:block w-[782px]"
              />
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="lg:absolute md:absolute hidden md:flex flex-col items-center justify-center"
              >
                <OutlineButton
                  text="Request a Quote"
                  variant="secondary"
                  onClick={handleOpenModal}
                />
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                <p className="mt-2 text-center text-[#FFFFFF] font-normal">
                  Egestas fringilla aliquam leo
                </p>
              </motion.div>
            </figure>
          </div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col justify-center px-4 lg:text-left mx-auto w-full lg:w-auto"
          >
            <Text
              variant="p-medium"
              className="text-center lg:text-left md:text-left text-[#FCD34D] mt-20 md:ml-10"
            >
              Get the Sun to power your home
            </Text>
            <Text
              variant="h1"
              className="mb-20 text-[#FFFFFF] lg:max-w-[894px] md:max-w-[500px] max-w-[358px] mx-auto text-center lg:text-left md:text-left md:ml-10"
            >
              All the power that you need for your house is now available
            </Text>
            <div className="flex flex-col items-center justify-center mt-2 md:hidden">
              <OutlineButton text="Request a Quote" variant="secondary" />
              <p className="lg:mt-2 mt-4 mb-16 text-center text-[#FFFFFF] lg:text-lg md:text-lg text-base	font-normal lg:leading-[28.8px] md:leading-[28.8px] leading-[22.4px]">
                Egestas fringilla aliquam leo
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <figure className="lg:-mt-24 md:-mt-22 lg:mb-0 md:mb-0 -mb-40">
            <img
              src="Macbook.png"
              alt="Ilustração de um MacBook"
              className="pt-8 w-full object-cover"
            />
          </figure>
        </motion.div>

        <figure className="md:hidden lg:hidden flex justify-start">
          <img src="Ellipse2.png" alt="Imagem decorativa" />
        </figure>
      </section>
    </header>
  );
});

export default Configure;
