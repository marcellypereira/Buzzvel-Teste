import React, { forwardRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import OutlineButton from "../../components/Button";
import { fadeIn } from "../../Animations/Variants";
import Reveal from '../../Animations/Reveal';
import Modal from '../../components/Modal';

const Hero = forwardRef((props, ref) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header ref={ref} className="mx-auto relative">
      <Helmet>
        <title>Get the Sun to Power Your Home</title>
        <meta name="description" content="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque." />
      </Helmet>

      <main className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col lg:gap-8 md:grid-cols-2 md:grid-flow-col md:gap-8">
        
        <motion.section 
          variants={fadeIn("down", 0.30)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="lg:ml-20 md:ml-20 flex flex-col items-center lg:items-start md:items-start text-center lg:text-left lg:max-w-[717px] lg:pt-32 mt-8 md:text-left md:max-w-[600px] md:pt-12 px-4 order-2 lg:order-1 md:order-1" 
        >
          <h1 className="lg:text-7xl lg:font-extrabold md:font-extrabold font-bold lg:leading-[79.2px] md:leading-[50px] leading-[44px] lg:max-w-[600px] md:max-w-[400px] max-w-[343px] text-[40px] md:text-4xl text-[#0F172A]">
            Get the Sun to Power Your Home
          </h1>
          <p className="lg:text-2xl md:text-xl font-normal mt-4 lg:mt-8 lg:max-w-[600px] md:max-w-[400px] max-w-[343px] text-lg text-[#0F172A] lg:leading-[38.4px] md:leading-[38.4px] leading-[28.8px]">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
          </p>
          <div className="lg:pt-6 pt-4">
            <OutlineButton text="Request a Quote" variant="primary"onClick={handleOpenModal}/>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>

          <figure className="mt-8 lg:mt-28">
            <blockquote className="font-normal text-left lg:text-lg md:text-lg text-base text-[#0F172A] lg:max-w-[600px] md:max-w-[400px] max-w-[343px] lg:leading-[28.8px] md:leading-[28.8px] leading-[22.4px]">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
            </blockquote>
            <figcaption className="flex flex-wrap gap-2 cursor-pointer mt-7">
              <img src="User1.png" alt="Imagem de Rwanda Melflor" />
              <p className="font-normal text-lg text-[#0F172A] leading-[28.8px]">
                Rwanda Melflor<br />
                <span className="font-normal text-base text-[#475569] leading-[22.4px]">zerowaste.com</span>
              </p>
            </figcaption>
          </figure>
        </motion.section>
        
        <aside className="flex justify-end lg:mt-0 order-1 lg:order-2 md:order-2">
          <Reveal>
            <div className=" max-w-2xl">
              <img 
                src="image.png" 
                alt="Imagem Solar" 
                className="max-w-[307.31px] md:max-w-full lg:max-w-full relative z-10" 
              />
            </div>
          </Reveal>
        </aside>
      </main>
    </header>
  );
});

export default Hero;
