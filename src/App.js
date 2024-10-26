import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Products from './sections/Products.js';
import Services from './sections/Services/index.js';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Services />
    </>
  );
}

export default App;
