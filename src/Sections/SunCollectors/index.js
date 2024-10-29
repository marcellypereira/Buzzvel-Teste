/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, forwardRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import OutlineButton from "../../Components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../Animations/Variants";
import Card from "../../Components/Cards";
import { Title, SubTitle, Description } from "../../Components/Text";
import Modal from "../../Components/Modal";
import Next from "../../Assets/Next.png";
import Prev from "../../Assets/Prev.png";
import User1 from "../../Assets/User1.png";
import User2 from "../../Assets/User2.png";
import User3 from "../../Assets/User3.png";
import User4 from "../../Assets/User4.png";

const SunCollectors = forwardRef((props, ref) => {
  const carouselRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const Cards = [
    {
      id: 1,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User2,
      name: "Jane Cooper",
      power: "10KWh",
    },
    {
      id: 2,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User3,
      name: "John Doe",
      power: "15KWh",
    },
    {
      id: 3,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User1,
      name: "Alice Smith",
      power: "12KWh",
    },
    {
      id: 4,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User2,
      name: "Michael Johnson",
      power: "20KWh",
    },
    {
      id: 5,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User3,
      name: "Emma Brown",
      power: "8KWh",
    },
    {
      id: 6,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User4,
      name: "Lucas White",
      power: "18KWh",
    },
    {
      id: 7,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User1,
      name: "Olivia Green",
      power: "9KWh",
    },
    {
      id: 8,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User2,
      name: "Sophia Blue",
      power: "11KWh",
    },
    {
      id: 9,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: User3,
      name: "Liam Gray",
      power: "14KWh",
    },
  ];

  const loadMoreCards = () => {
    const newCards = Cards.map((card) => ({
      ...card,
      id: cards.length + card.id,
    }));
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMoreCards();
          }
        });
      },
      { root: carouselRef.current, threshold: 1.0 }
    );

    const lastCard = carouselRef.current?.lastElementChild;
    if (lastCard) {
      observer.observe(lastCard);
    }

    return () => {
      if (lastCard) {
        observer.unobserve(lastCard);
      }
    };
  }, [cards]);

  useEffect(() => {
    setCards(Cards);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const showNextCard = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const showPreviousCard = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="mx-auto bg-[#581C87] pb-14">
      <Helmet>
        <title>Make something awesome</title>
        <meta
          name="description"
          content="Dui euismod iaculis libero, aliquet vitae et elementum porttitor..."
        />
      </Helmet>

      <section className="flex flex-col lg:flex-row justify-between items-center lg:mt-40 mt-20 px-4 pt-8 lg:mx-20 md:mx-20">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center lg:text-left lg:flex-1"
        >
          <header>
            <SubTitle
              text="Join other Sun harvesters"
              className="text-[#FCD34D]"
            />
            <Title
              text="Make something awesome"
              className="text-[#FFFFFF] lg:max-w-[814px] md:max-w-[814px] max-w-[343px] lg:mx-0 md:mx-0 mx-auto"
            />
          </header>
          <article className="font-normal">
            <Description
              text="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
              className="text-[#FFFFFF] lg:max-w-[814px] md:max-w-[814px] max-w-[343px] lg:m-0 md:mx-auto mx-auto"
            />
          </article>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 lg:mt-0 flex justify-center lg:justify-start lg:flex-none"
        >
          <OutlineButton
            text="Request a Quote"
            variant="secondary"
            onClick={handleOpenModal}
          />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </motion.div>
      </section>
      <div
        className="relative overflow-hidden cursor-pointer mt-14"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="flex carousel-track lg:ml-20 md:ml-20"
        >
          {cards.map(({ id, text, image, name, power }) => (
            <Card
              key={id}
              text={text}
              image={image}
              name={name}
              power={power}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-center lg:justify-start mx-4 mt-4 space-x-4 pt-8 lg:mx-20 md:mx-20"
      >
        <motion.button
          onClick={showPreviousCard}
          className="bg-gray-800 border-2 border-[#FCD34D] rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300"
          aria-label="Previous"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Prev} alt="Previous" className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={showNextCard}
          className="bg-gray-800 border-2 border-[#FCD34D] rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300"
          aria-label="Next"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Next} alt="Next" className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </main>
  );
});

export default SunCollectors;
