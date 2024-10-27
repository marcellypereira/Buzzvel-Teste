import React,{forwardRef} from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="mx-auto lg:mx-20 md:mx-20">
      <section className="flex flex-col md:flex-row justify-between items-center md:items-start py-8 text-center md:text-left">
        <figure className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <img src="Logo.png" alt="Logo da Soller" />
          <figcaption className="text-[#0F172A]">@ 2023 Soller, Inc. All rights reserved.</figcaption>
        </figure>

        <nav className="flex gap-4 text-[#0F172A] cursor-pointer">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Support</p>
        </nav>
      </section>
    </footer>
  );
});

export default Footer;
