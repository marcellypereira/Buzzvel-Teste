/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import OutlineButton from "./Button";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../Animations/Variants";
import Vector from "../Assets/Vector.png"
import SollerLogo from "../Assets/soller.png"

export default function Header(
  { scrollToSection, products, solutions, services, configure },
  ref
) {
  const navItems = [
    { label: "Products", ref: products },
    { label: "Solutions", ref: solutions },
    { label: "Services", ref: services },
    { label: "Configure", ref: configure },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="mx-auto p-4 flex justify-between items-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="flex items-center lg:ml-20 md:ml-20 ml-4 mt-4">
            <h1 className="text-black text-[32px] leading-[35.2px] font-bold mr-8">
              <img src={SollerLogo} alt="" className="max-w-[81px] max-h-[36px]" />
            </h1>
            <ul className="flex items-center gap-x-7">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="hidden lg:block relative text-base font-medium leading-6"
                >
                  <a
                    href="#"
                    className="relative text-black after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[1px] after:bg-[#0F172A] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:origin-left"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.ref.current) {
                        scrollToSection(item.ref);
                      } else {
                        console.warn("Reference is null for:", item.label);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.30)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="hidden lg:flex items-center gap-4 mr-20"
        >
          <div
            className="flex items-center gap-3 ml-6 "
          >
            <img src={Vector} alt="Contact icon" className="w-[20px] h-[19px]" />
            <p className="text-base text-[#0369A1] font-medium leading-6">55 818 282</p>
          </div>
          <OutlineButton
            text="Request a Quote"
            variant="primary"
            onClick={handleOpenModal}
          />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </motion.div>
      </nav>
    </header>
  );
}
