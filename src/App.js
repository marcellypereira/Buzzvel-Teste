import './App.css';
import Footer from './sections/Footer/Footer.js';
import Header from './components/Header';
import Configure from './sections/Configure/index.js';
import Hero from './sections/Hero';
import Products from './sections/Products.js';
import Services from './sections/Services/index.js';
import Solutions from './sections/Solutions/index.js';
import SunCollectors from './sections/SunCollectors/index.js';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Services />
      <Solutions />
      <SunCollectors />
      <Configure />
      <Footer />
    </>
  );
}

export default App;
