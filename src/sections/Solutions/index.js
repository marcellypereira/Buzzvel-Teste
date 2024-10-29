import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import Text from "../../components/Text";

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
              <Text
              variant="p-medium"
              className="text-[#D97706] mt-24">
                System features
              </Text>
              <Text
              variant="h1"
              className="text-[#0F172A]">
                Powerful features
              </Text>
            </header>

            <article className="font-normal">
              <Text
                variant="p-description"
                className="text-[#0F172A] lg:max-w-[1180px] md:max-w-[1180px] max-w-[343px] lg:m-0 md:m-0	mx-auto">
                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
                et. Auctor turpis semper id sit ornare maecenas lectus sed.
              </Text>
            </article>
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="grid grid-rows-2 grid-flow-col lg:gap-12 md:gap-12 gap-4 items-stretch mt-24"
          >
            <article className="lg:m-0 md:m-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">Erat sit</Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida
                consectetur. Nunc convallis fringilla nisl magna sagittis.
              </Text>
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A">
                Et pellentesque
              </Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Mi vitae, massa eu molestie massa euismod volutpat condimentum.
                Blandit molestie ullamcorper hendrerit purus lorem vulputate.
              </Text>
            </article>
            <article className="lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">
                Ullamcorper arcu
              </Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
                auctor habitant duis dictum.
              </Text>
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">
                Amet egestas
              </Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
                velit et, ullamcorper malesuada amet, felis.
              </Text>
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
