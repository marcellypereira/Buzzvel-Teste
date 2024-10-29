import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import { Title, SubTitle, Description, H2, P } from "../../Components/Text";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RectangleMobile from "../../Assets/Rectangle-Mobile2.png";

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
              <SubTitle
                text="System features"
                className="text-[#D97706] mt-24"
              />
              <Title text="Powerful features" className="text-[#0F172A]" />
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
              <H2 text="Erat sit" className="text-[#0F172A]" />
              <P
                text="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
                className="text-[#0F172A]"
              />
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Et pellentesque" className="text-[#0F172A" />
              <P
                text="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
                className="text-[#0F172A]"
              />
            </article>
            <article className="lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Ullamcorper arcu" className="text-[#0F172A]" />
              <P
                text="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
                className="text-[#0F172A]"
              />
            </article>
            <article className="mt-12 lg:mt-6 md:mt-6 lg:mx-0 md:mx-0	mx-auto">
              <H2 text="Amet egestas" className="text-[#0F172A]" />
              <P
                text="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis."
                className="text-[#0F172A]"
              />
            </article>
          </motion.section>
        </div>

        <motion.figure
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex justify-end order-2 md:order-2"
        >
          <LazyLoadImage
            src={RectangleMobile}
            alt="Descrição da imagem"
            className="w-full md:max-w-xl max-w-[344px]"
          />
        </motion.figure>
      </section>
    </main>
  );
});

export default Solutions;
