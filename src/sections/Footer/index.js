import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="mx-auto lg:mx-20 md:mx-20">
      <section className="flex flex-col md:flex-row justify-between items-center py-8 text-center md:text-left">
        
        <figure className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-4 md:mb-0">
          <img src="Logo.png" alt="Logo da Soller" />
          <figcaption className="text-[#0F172A] text-base leading-[22.4px] font-normal">
            @ 2023 Soller, Inc. All rights reserved.
          </figcaption>
        </figure>

        <nav className="flex gap-6 text-[#0F172A] cursor-pointer font-normal leading-[22.4px]">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Support</p>
        </nav>
      </section>
    </footer>
  );
});

export default Footer;
