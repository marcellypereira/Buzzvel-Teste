import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <Helmet>
        <title>Personalized Services</title>
        <meta 
          name="description" 
          content="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed." 
        />
      </Helmet>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-6 items-center lg:mt-40 mt-20">
        
        <figure className="lg:max-w-xl md:max-w-xl max-w-[344px] flex justify-center order-2 md:order-1">
          <img 
            src="Rectangle-Mobile1.png" 
            alt="Rectangle-Mobile1" 
            className="w-full" 
          />
        </figure>

        <div className="flex flex-col lg:text-start md:text-start text-center px-4 order-1 md:order-2">
          <header>
            <p className="text-lg sm:text-xl text-[#D97706] leading-9 font-medium mt-6 lg:mt-10">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mt-4 mb-6">
              Personalized Services
            </h1>
          </header>

          <article className="font-normal">
            <p className="text-xl text-[#0F172A]">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </article>

          <section className="grid grid-rows-2 grid-flow-col gap-12 items-stretch mt-36">
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">Et mauris</h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
              </p>
            </article>
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">Imperdiet pellentesque</h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
              </p>
            </article>
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">Eget sit</h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </article>
            <article>
              <h2 className="text-[#0F172A] text-2xl font-bold">Non libero</h2>
              <p className="text-[#0F172A] text-lg mt-4 font-normal">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Services;
