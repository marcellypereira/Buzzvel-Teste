import React, { useRef, Suspense, lazy } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Loading from "./Animations/Loading";
import { LayoutGroup } from "framer-motion";

const Products = lazy(() => import("./sections/Products"));
const Service = lazy(() => import("./sections/Services"));
const Solutions = lazy(() => import("./sections/Solutions"));
const Configure = lazy(() => import("./sections/Configure"));
const Hero = lazy(() => import("./sections/Hero"));
const SunCollectors = lazy(() => import("./sections/SunCollectors"));
const Footer = lazy(() => import("./sections/Footer"));

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
      <LayoutGroup>
        <Suspense fallback={<Loading />}>
          <Hero />
          <Products ref={products} />
          <Service ref={services} />
          <Solutions ref={solutions} />
          <SunCollectors />
          <Configure ref={configure} />
          <Footer />
        </Suspense>
      </LayoutGroup>
    </div>
  );
}

export default App;
