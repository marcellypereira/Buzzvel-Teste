import './App.css';
import Header from './components/Header';
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
    </>
  );
}

export default App;
