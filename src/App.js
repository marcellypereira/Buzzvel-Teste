import React, { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Products from "./sections/Products";
import Service from "./sections/Services";
import Solutions from "./sections/Solutions";
import Configure from "./sections/Configure";
import Hero from "./sections/Hero";
import SunCollectors from "./sections/SunCollectors";
import Footer from "./sections/Footer";

function App() {
  const products = useRef(null);
  const solutions = useRef(null);
  const services = useRef(null);
  const configure = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn("Attempted to scroll to a null reference.");
    }
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        scrollToSection={scrollToSection}
        products={products}
        solutions={solutions}
        services={services}
        configure={configure}
      />
      <Hero />
      <Products ref={products} />
      <Service ref={services} />
      <Solutions ref={solutions} />
      <SunCollectors />
      <Configure ref={configure} />
      <Footer />
    </div>
  );
}

export default App;
