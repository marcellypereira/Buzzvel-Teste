import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/variants";

const Solutions = forwardRef((props, ref) => {
  return (
    <main ref={ref} className="mx-auto">
      <Helmet>
        <title>Powerful features</title>
        <meta
          name="description"
          content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        />
      </Helmet>

      <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-6 items-center lg:mt-40 g:ml-20 md:ml-20">
        <div className="flex flex-col lg:text-start md:text-start text-center px-4 order-1 md:order-1">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <header>
              <p className="text-lg sm:text-xl text-[#D97706] leading-9 font-medium mt-6 lg:mt-10">
                System features
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:font-extrabold md:font-extrabold font-bold text-[#0F172A] mt-4 mb-6">
                Powerful features
              </h1>
            </header>

            <article className="font-normal">
              <p className="lg:text-xl md:text-xl text-base text-[#0F172A]">
                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
                et. Auctor turpis semper id sit ornare maecenas lectus sed.
              </p>
            </article>
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="grid grid-rows-2 grid-flow-col lg:gap-12 md:gap-12 gap-4 items-stretch mt-36"
          >
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">Erat sit</h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida
                consectetur. Nunc convallis fringilla nisl magna sagittis.
              </p>
            </article>
            <article className="mt-20 lg:mt-0 md:mt-0">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Et pellentesque
              </h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Mi vitae, massa eu molestie massa euismod volutpat condimentum.
                Blandit molestie ullamcorper hendrerit purus lorem vulputate.
              </p>
            </article>
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Ullamcorper arcu
              </h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
                auctor habitant duis dictum.
              </p>
            </article>
            <article className="mt-20 lg:mt-0 md:mt-0">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Amet egestas
              </h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
                velit et, ullamcorper malesuada amet, felis.
              </p>
            </article>
          </motion.section>
        </div>

        <motion.figure
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex justify-end order-2 md:order-2">
          <img
            src="Rectangle-Mobile2.png"
            alt="Descrição da imagem"
            className="w-full md:max-w-xl max-w-[344px]"
          />
        </motion.figure>
      </section>
    </main>
  );
});

export default Solutions;
