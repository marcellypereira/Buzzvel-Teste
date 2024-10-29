import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import Text from "../../components/Text";

const Service = forwardRef((props, ref) => {
  return (
    <main ref={ref} className="mx-auto">
      <Helmet>
        <title>Personalized Services</title>
        <meta
          name="description"
          content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        />
      </Helmet>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-6 items-center lg:mt-40 mt-20">
        <motion.figure
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="lg:max-w-xl md:max-w-xl max-w-[344px] flex justify-center order-2 md:order-1"
        >
          <img
            src="Rectangle-Mobile1.png"
            alt="Descrição da imagem"
            className="w-full"
          />
        </motion.figure>

        <div className="flex flex-col lg:text-start md:text-start text-center order-1 md:order-2 lg:mr-20 md:mr-20 px-4">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <header>
              <Text
                variant="p-medium"
                className="text-[#D97706]"
              >
                Services
              </Text>
              <Text
                variant="h1"
                className="text-[#0F172A]">
                Personalized Services
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
                className="text-[#0F172A]">Et mauris</Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique.
              </Text>
            </article>
            <article className="mt-16 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">
                Imperdiet pellentesque
              </Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Platea arcu dapibus non magna cursus lectus id sollicitudin.
                Enim viverra parturient tristique nulla.
              </Text>
            </article>
            <article className="lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">Eget sit</Text>
              <Text
                variant="p"
                className="text-[#0F172A] ">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </Text>
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <Text
                variant="h2"
                className="text-[#0F172A]">Non libero</Text>
              <Text
                variant="p"
                className="text-[#0F172A]">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                purus ut sed eros, consectetur viverra.
              </Text>
            </article>
          </motion.section>
        </div>
      </section>
    </main>
  );
});

export default Service;
