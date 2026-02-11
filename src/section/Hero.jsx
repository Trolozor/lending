import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone, ShoppingBag, Leaf, Package, MapPin, Heart } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import mountainsLogo from '../assets/logo-mountation.png';
import textLogo from '../assets/logo.png';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#product-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToCatalog = () => {
    navigate('/catalog');
  };

  const goToContacts = () => {
    navigate('/contacts');
  };

  // Единая анимация появления для всего контентного блока
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0, // лёгкий каскад для дочерних элементов, можно убрать в 0
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фон с горами */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(60, 45, 30, 0.6), rgba(60, 45, 30, 0.7)), url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Оверлей */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-[#3c2d1e]/30"
      />

      {/* Весь контент — единый блок */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center"
      >
        {/* Логотип гор */}
        <motion.div variants={childVariants} className="mb-0 mt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="w-48 h-48 mx-auto bg-white/15 rounded-full flex items-center justify-center p-8 border border-white/25"
          >
            <div className="text-white text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="mb-2"
              >
                <img
                  src={mountainsLogo}
                  alt="Горы Кавказа"
                  className="w-64 h-16 mx-auto object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="mb-2"
              >
                <img
                  src={textLogo}
                  alt="Секреты Кавказа"
                  className="w-64 h-auto mx-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Текстовый логотип */}
        <motion.div variants={childVariants} className="mb-5">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white">
            Секреты Кавказа
          </h1>
        </motion.div>

        {/* Заголовок и подзаголовок */}
        <motion.div variants={childVariants}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-white mb-6 font-normal"
          >
            Аутентичные продукты горного Кавказа
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Натуральные сладости, приправы и мёд ручной работы
            <br />
            из самого сердца Пятигорска
          </motion.p>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          variants={childVariants}
          className="block max-[500px]:hidden flex flex-col sm:flex-row gap-4 justify-center mb-24"
        >
          {[
            {
              icon: <ShoppingBag className="w-5 h-5 mr-3" />,
              text: 'Смотреть каталог',
              onClick: goToCatalog,
              className:
                'bg-[#8b6b46] text-white hover:bg-[#a17e54] shadow-lg cursor-pointer',
            },
            {
              icon: <Phone className="w-5 h-5 mr-3" />,
              text: '+7 (968) 269-52-77',
              onClick: goToContacts,
              className:
                'bg-white/20 border border-white/30 text-white hover:bg-white/30 cursor-pointer',
            },
          ].map((button, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              onClick={button.onClick}
              className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center ${button.className}`}
            >
              {button.icon}
              {button.text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Преимущества внизу — всегда видны, появляются вместе с контентом */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-5 left-0 right-0"
      >
        <div className="container mx-auto px-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {/* Два преимущества слева (десктоп) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:flex flex-row gap-5 col-span-2"
            >
              {[
                {
                  icon: <Leaf className="w-6 h-6 mr-1 text-[#d4b483]" />,
                  text: '100% натуральные ингредиенты',
                },
                {
                  icon: <Package className="w-6 h-6 mr-1 text-[#d4b483]" />,
                  text: 'Без искусственных добавок',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex items-center p-4 bg-white/15 rounded-xl border border-white/25"
                >
                  {item.icon}
                  <span className="text-base text-white/90 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Кнопка "Узнать больше" по центру */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className="hidden md:flex justify-center col-span-1"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={scrollToNextSection}
              >
                <div className="flex flex-col items-center">
                  <span className="text-white/90 text-sm mb-3 tracking-wider font-medium">
                    Узнать больше
                  </span>
                  <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center bg-white/10">
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Два преимущества справа (десктоп) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:flex flex-row gap-6 col-span-2"
            >
              {[
                {
                  icon: <Heart className="w-6 h-6 ml-1 text-[#d4b483]" />,
                  text: 'Ручное производство',
                },
                {
                  icon: <MapPin className="w-6 h-6 ml-1 text-[#d4b483]" />,
                  text: 'Сделано в Пятигорске',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex items-center p-4 bg-white/15 rounded-xl border border-white/25"
                >
                  <span className="text-base text-white/90 font-medium text-right">
                    {item.text}
                  </span>
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Мобильная версия: все 4 преимущества в сетке 2x2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:hidden grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Leaf className="w-5 h-5 mx-auto mb-2 text-[#d4b483]" />,
                  text: 'Натуральные ингредиенты',
                },
                {
                  icon: <Package className="w-5 h-5 mx-auto mb-2 text-[#d4b483]" />,
                  text: 'Без добавок',
                },
                {
                  icon: <Heart className="w-5 h-5 mx-auto mb-2 text-[#d4b483]" />,
                  text: 'Ручная работа',
                },
                {
                  icon: <MapPin className="w-5 h-5 mx-auto mb-2 text-[#d4b483]" />,
                  text: 'Пятигорск',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="text-center p-3 bg-white/10 rounded-xl border border-white/20"
                >
                  {item.icon}
                  <div className="text-xs text-white/90 font-medium">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;