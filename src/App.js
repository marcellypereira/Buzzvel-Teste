import React, { useRef, Suspense, lazy, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Loading from "./Animations/Loading";
import { LayoutGroup } from "framer-motion";

const Products = lazy(() =>
  import(/* webpackChunkName: "products" */ "./Sections/Products")
);
const Service = lazy(() =>
  import(/* webpackChunkName: "service" */ "./Sections/Services")
);
const Solutions = lazy(() =>
  import(/* webpackChunkName: "solutions" */ "./Sections/Solutions")
);
const Configure = lazy(() =>
  import(/* webpackChunkName: "configure" */ "./Sections/Configure")
);
const Hero = lazy(() =>
  import(/* webpackChunkName: "hero" */ "./Sections/Hero")
);
const SunCollectors = lazy(() =>
  import(/* webpackChunkName: "suncollectors" */ "./Sections/SunCollectors")
);
const Footer = lazy(() =>
  import(/* webpackChunkName: "footer" */ "./Sections/Footer")
);

const preloadComponent = (component) => {
  import(`./Sections/${component}`);
};

function App() {
  const productsRef = useRef(null);
  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);
  const configureRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn("Attempted to scroll to a null reference.");
    }
  };

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        preloadComponent("Products");
        preloadComponent("Services");
      });
    }
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        scrollToSection={scrollToSection}
        products={productsRef}
        solutions={solutionsRef}
        services={servicesRef}
        configure={configureRef}
      />
      <LayoutGroup>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <Loading />
            </div>
          }
        >
          <Hero />
          <Products ref={productsRef} />
          <Service ref={servicesRef} />
          <Solutions ref={solutionsRef} />
          <SunCollectors />
          <Configure ref={configureRef} />
          <Footer />
        </Suspense>
      </LayoutGroup>
    </div>
  );
}

export default App;
