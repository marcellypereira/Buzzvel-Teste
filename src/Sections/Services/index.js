import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import { Title, SubTitle, Description, H2, P } from "../../Components/Text";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RectangleMobile from "../../Assets/Rectangle-Mobile1.png";

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
          <LazyLoadImage
            src={RectangleMobile}
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
              <SubTitle text="Services" className="text-[#D97706]" />
              <Title text="Personalized Services" className="text-[#0F172A]" />
            </header>

            <article className="font-normal">
              <Description
                text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
                className="text-[#0F172A] lg:max-w-[1180px] md:max-w-[1180px] max-w-[343px] lg:m-0 md:m-0	mx-auto"
              />
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
              <H2 text="Et mauris" className="text-[#0F172A]"></H2>
              <P
                text="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                className="text-[#0F172A]"
              ></P>
            </article>
            <article className="mt-16 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Et mauris" className="text-[#0F172A]" />
              <P
                text="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                className="text-[#0F172A]"
              />
            </article>
            <article className="lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Eget sit" className="text-[#0F172A]" />
              <P
                text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                className="text-[#0F172A]"
              />
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Non libero" className="text-[#0F172A]" />
              <P
                text="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
                className="text-[#0F172A]"
              />
            </article>
          </motion.section>
        </div>
      </section>
    </main>
  );
});

export default Service;
