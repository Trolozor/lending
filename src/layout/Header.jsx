import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import mountainsLogo from '../assets/logo-mountation.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCatalogOrContacts = location.pathname === '/catalog' || location.pathname === '/contacts';
  const shouldBeDark = isScrolled || isCatalogOrContacts;

  const navItems = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'О нас', href: '/about' },
    { name: 'Производство', href: '/production' },
    { name: 'Партнёрам', href: '/partners' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldBeDark ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-sm ${
                shouldBeDark 
                  ? 'bg-[#f8f5f0]/90 border-[#8b6b46]/30' 
                  : 'bg-white/10 backdrop-blur-sm border-white/20'
              }`}>
                <img
                  src={mountainsLogo}
                  alt="Секреты Кавказа"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className={`text-2xl font-bold transition-colors ${
                shouldBeDark ? 'text-[#3c2d1e]' : 'text-white'
              }`}>
                Секреты Кавказа
              </span>
            </Link>
          </motion.div>

          
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems?.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium transition-colors ${
                  shouldBeDark ? 'text-[#3c2d1e] hover:text-[#8b6b46]' : 'text-white hover:text-[#8b6b46]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          
          <button
            className={`lg:hidden p-3 transition-colors ${
              shouldBeDark ? 'text-[#3c2d1e]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8 mr-4" /> : <Menu className="w-8 h-8 mr-4" />}
          </button>
        </div>

        
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-md"
          >
            <div className="flex flex-col space-y-6 px-6 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-medium text-[#3c2d1e] hover:text-[#8b6b46] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;