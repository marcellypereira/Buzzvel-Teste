/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, forwardRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import OutlineButton from "../../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Card from "../../components/Cards";

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
      image: "User2.png",
      name: "Jane Cooper",
      power: "10KWh",
    },
    {
      id: 2,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User3.png",
      name: "John Doe",
      power: "15KWh",
    },
    {
      id: 3,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User1.png",
      name: "Alice Smith",
      power: "12KWh",
    },
    {
      id: 4,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User2.png",
      name: "Michael Johnson",
      power: "20KWh",
    },
    {
      id: 5,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User3.png",
      name: "Emma Brown",
      power: "8KWh",
    },
    {
      id: 6,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User4.png",
      name: "Lucas White",
      power: "18KWh",
    },
    {
      id: 7,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User1.png",
      name: "Olivia Green",
      power: "9KWh",
    },
    {
      id: 8,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User2.png",
      name: "Sophia Blue",
      power: "11KWh",
    },
    {
      id: 9,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "User3.png",
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
            <p className="text-lg sm:text-xl text-[#FCD34D] leading-9 font-medium mt-6 lg:mt-10">
              Join other Sun harvesters
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:font-extrabold md:font-extrabold font-bold text-[#FFFFFF] mt-4 mb-6">
              Make something awesome
            </h1>
          </header>
          <article className="font-normal">
            <p className="text-xl text-[#FFFFFF] max-w-[814px]">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </article>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="mt-10 lg:mt-0 flex justify-center lg:justify-start lg:flex-none"
        >
          <OutlineButton text="Request a Quote" variant="secondary" />
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
        <div className="flex carousel-track lg:ml-20 md:ml-20">
          {cards.map(({ id, text, image, name, power }) => (
            <Card
              key={id}
              text={text}
              image={image}
              name={name}
              power={power}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-center lg:justify-start mx-4 mt-4 space-x-4 pt-8 lg:mx-20 md:mx-20"
      >
        <button
          onClick={showPreviousCard}
          className="bg-gray-800 border-2 border-[#FCD34D] rounded-full w-10 h-10 flex items-center justify-center nav-button"
          aria-label="Previous"
        >
          <img src="Prev.png" alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={showNextCard}
          className="bg-gray-800 border-2 border-[#FCD34D] rounded-full w-10 h-10 flex items-center justify-center nav-button"
          aria-label="Next"
        >
          <img src="Next.png" alt="Next" className="w-5 h-5" />
        </button>
      </motion.div>
    </main>
  );
});

export default SunCollectors;
