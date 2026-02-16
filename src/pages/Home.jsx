import Hero from '../section/Hero';
import ProductShowcase from '../section/ProductShowcase';
import CategoriesRoulette from '../section/CategoriesRoulette';
import Philosophy from '../section/Philosophy';
import AboutProduction from '../section/AboutProduction';

const Home = () => {
  return (
    <>
      <main className="w-full">
        
        <Hero />
        
        
        <ProductShowcase id="product-showcase"/>
        
        
        <CategoriesRoulette />
        
        
        <AboutProduction />
        
      </main>
    </>
  );
};

export default Home;