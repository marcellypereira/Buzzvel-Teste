/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import OutlineButton from "./Button";
import Modal from "./Modal";

export default function Header({ scrollToSection, products, solutions, services, configure }, ref) {
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
      <nav
        className="max-w-[1920px] mx-auto p-4 flex justify-between items-center"
        aria-label="Main Navigation"
      >
        <div className="flex items-center">
          <h1 className="text-black text-3xl font-bold mr-8">
            <a href="#" aria-label="">
              soller
            </a>
          </h1>
          <ul className="flex items-center gap-x-8">
            {navItems.map((item) => (
              <li key={item.label} className="hidden lg:block">
                <a
                  href="#"
                  className="text-[#0F172A] text-base font-medium hover:text-[#581C87]"
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

        <div className="hidden lg:flex items-center gap-4">
          <div
            className="flex items-center gap-3"
            aria-label="Contact Information"
          >
            <img src="Vector.png" alt="Contact icon" />
            <p className="text-base text-[#0369A1]">55 818 282</p>
          </div>
          <OutlineButton
            text="Request a Quote"
            variant="primary"
            onClick={handleOpenModal}
          />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </nav>
    </header>
  );
}