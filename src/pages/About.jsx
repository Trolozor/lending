import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Heart, Sparkles, ChevronDown } from 'lucide-react';

import first from "../assets/about/first_about.jpg"
import second from "../assets/about/second_about.jpg"
import third from "../assets/about/third_about.jpg"

import first_prod from "../assets/about/products/first_krokan.png"
import second_prod from "../assets/about/products/second_konfet.png"
import third_prod from "../assets/about/products/third.png"
import fourth_prod from "../assets/about/products/fourth_tea.png"
import fifth_prod from "../assets/about/products/fifth.png"
import sixth_prod from "../assets/about/products/sixth.png"

const About = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const heroBg = 'https://resize.tripster.ru/Fc0X9SMZoiogiQVBc5M4W-l6jZo=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/b79d1ba6-2769-4f5e-92fe-1d13caadcb90.jpg';

  const principles = [
    {
      title: 'Аутентичность',
      desc: 'Мы используем традиционные рецепты, переосмысленные с заботой о современном потребителе. Каждый продукт — это история, бережно передаваемая из поколения в поколение.',
      icon: <Sparkles className="w-12 h-12 text-[#d4af37]" />,
      color: 'from-[#f0e8dc] to-[#e8dcc8]',
      image: first
    },
    {
      title: 'Натуральность',
      desc: 'В основе всех продуктов — отборные орехи, чистейший мёд, свежие ягоды. Без консервантов и искусственных добавок. Мы используем только то, что дарит нам природа Кавказа.',
      icon: <Leaf className="w-12 h-12 text-[#d4af37]" />,
      color: 'from-[#e8f5e8] to-[#d4e8d4]',
      image: second
    },
    {
      title: 'Инновации в традициях',
      desc: 'Создаём авторские вкусы, умело сочетая классическую основу Кавказа с уникальными добавками. Мы уважаем традиции, но не боимся экспериментировать.',
      icon: <Heart className="w-12 h-12 text-[#d4af37]" />,
      color: 'from-[#f5e8e8] to-[#e8d4d4]',
      image: third
    },
  ];

  const productImages = [first_prod, second_prod, third_prod, fourth_prod, fifth_prod, sixth_prod];

  const containerRef = useRef(null);
  const principlesSectionRef = useRef(null);
  
  
  const { scrollYProgress } = useScroll({
    target: principlesSectionRef,
    offset: ["start start", "end end"]
  });

  
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2]
  );

  useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      setActivePrinciple(Math.floor(latest));
    });
    return () => unsubscribe();
  }, []);

  const handlePrincipleClick = (index) => {
    setActivePrinciple(index);
    if (principlesSectionRef.current) {
      const sectionHeight = principlesSectionRef.current.offsetHeight;
      const scrollTo = principlesSectionRef.current.offsetTop + (sectionHeight * index / principles.length);
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-[#f8f5f0]" ref={containerRef}>
      {/* Hero блок */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20 }}
          className="absolute inset-0 blur-xs"
          style={{ 
            backgroundImage: `url('${heroBg}')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        <div className="absolute inset-0 bg-[#3c2d1e]/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl text-white font-bold mb-8"
          >
            О нас
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-1xl leading-relaxed"
          >
            Мы — производственная компания «Секреты Кавказа» из сердца Кавказских Минеральных Вод, города Пятигорска.<br/>
            Наше призвание — создавать продукты, которые бережно хранят и раскрывают вековые гастрономические традиции этого богатого края.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white" />
          </motion.div>
        </div>
      </div>

      {/* Секция с принципами - занимает 300% высоты экрана */}
      <div 
        ref={principlesSectionRef} 
        className="relative"
      >
        {/* Sticky блок - ВАЖНО: sticky работает только если у родителя нет overflow: hidden */}
        <div className="sticky top-0 h-screen w-full overflow-visible">
          {/* Фон для текущего принципа */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${principles[activePrinciple].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="absolute inset-0 bg-[#3c2d1e]/70" />
          </div>

          {/* Контент принципа */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <motion.div
                key={activePrinciple}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className={`max-w-4xl mx-auto bg-gradient-to-br ${principles[activePrinciple].color} backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl md:text-5xl font-bold text-[#3c2d1e] mb-6">
                      {principles[activePrinciple].title}
                    </h3>
                    <p className="text-xl text-[#5a4a3a] leading-relaxed">
                      {principles[activePrinciple].desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Навигация */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/80 text-sm">
                    Прокрутите вниз, чтобы увидеть больше
                  </div>
                  <div className="text-white font-medium">
                    {activePrinciple + 1}/{principles.length}
                  </div>
                </div>
                
                {/* Прогресс-бар */}
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full bg-[#d4af37]"
                    initial={false}
                    animate={{ 
                      width: `${((activePrinciple + 1) / principles.length) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Индикаторы */}
                <div className="flex justify-center gap-4">
                  {principles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePrincipleClick(index)}
                      className={`w-10 h-2 rounded-full transition-all duration-300 ${
                        index === activePrinciple 
                          ? 'bg-[#d4af37]' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Перейти к принципу ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Пустое пространство для скролла */}
        <div className="h-[300vh]"></div>
      </div>

      {/* Галерея продуктов */}
      <div className="py-32 px-4 bg-[#3c2d1e]/5">
        <div className="mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#3c2d1e] text-center mb-20"
          >
            Наши продукты — вкус Кавказа
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-350">
            {productImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
              >
                <img 
                  src={src} 
                  alt="Продукты" 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;