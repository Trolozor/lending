import Hero from '../section/Hero';
import ProductShowcase from '../section/ProductShowcase';
import CategoriesRoulette from '../section/CategoriesRoulette';
import Philosophy from '../section/Philosophy';
import AboutProduction from '../section/AboutProduction';

const Home = () => {
  return (
    <>
      <main className="w-full">
        {/* Герой с красивым фото продуктов */}
        <Hero />
        
        {/* Основной показ товаров (главные хиты) */}
        <ProductShowcase id="product-showcase"/>
        
        {/* Все категории товаров в сетке */}
        <CategoriesRoulette />
        
        {/* О производстве */}
        <AboutProduction />
        
      </main>
    </>
  );
};

export default Home;