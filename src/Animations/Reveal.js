import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Fundo from "../Assets/Fundo.png"

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      backgroundControls.start("visible");
    }
  }, [isInView, mainControls, backgroundControls]);

  const containerStyle = `relative overflow-hidden`;

  return (
    <div ref={ref} className={containerStyle}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { scale: 1.2, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        initial="hidden"
        animate={backgroundControls}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <img 
          src={Fundo} 
          alt="Fundo" 
          className="w-[673px] h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Reveal;
