import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Импорт изображений для категорий
import teaPreview from '../assets/catalog/tea/tea_preview.jpg';
import spicePreview from '../assets/catalog/spice/spice_preview.jpg';
import barPreview from '../assets/catalog/bar/bar_preview.jpg';
import oilPreview from '../assets/catalog/oil/oil_preview.jpg';
import balhamPreview from '../assets/catalog/balham/balham_preview.jpg';
import balsamPreview from '../assets/catalog/balsam/balsam_preview.jpg';
import honeyPreview from '../assets/catalog/honey/honey_preview.jpg';
import kozinakPreview from '../assets/catalog/kozinak/kozinak_preview.png';
import otherPreview from '../assets/catalog/other/other_preview.jpg';
import candyPreview from '../assets/catalog/candys/candy_preview.jpg';
import yrbechPreview from '../assets/catalog/yrbech/yrbech_preview.jpg';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const CategoriesRoulette = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentName, setCurrentName] = useState('Чай');
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Чай',
      description: 'Травы собраны в высокогорьях Кавказа (Домбай, Приэльбрусье) во время цветения, высушены и обработаны вручную. Экологически чистое сырьё.',
      count: 11,
      image: teaPreview,
    },
    {
      id: 2,
      name: 'Приправы',
      description: 'Традиционные кавказские приправы и соли с натуральными травами и специями.',
      count: 8,
      image: spicePreview,
    },
    {
      id: 3,
      name: 'Батончики',
      description: 'Энергетические батончики без сахара с натуральными ингредиентами.',
      count: 6,
      image: barPreview,
    },
    {
      id: 4,
      name: 'Масло',
      description: 'Масла холодного отжима из отборных семян и орехов.',
      count: 6,
      image: oilPreview,
    },
    {
      id: 5,
      name: 'Бальзамы',
      description: 'Безалкогольные травяные бальзамы с целебными свойствами.',
      count: 8,
      image: balsamPreview,
    },
    {
      id: 6,
      name: 'Мед',
      description: 'Натуральный кавказский мёд с добавлением ценных растительных компонентов.',
      count: 6,
      image: honeyPreview,
    },
    {
      id: 7,
      name: 'Балхам',
      description: 'Традиционные кавказские средства по старинным рецептам.',
      count: 9,
      image: balhamPreview,
    },
    {
      id: 8,
      name: 'Урбеч',
      description: '100% натуральная паста из перетертых семян или орехов между каменными жерновами.',
      count: 10,
      image: yrbechPreview,
    },
    {
      id: 9,
      name: 'Конфеты АУФФ!',
      description: 'Натуральные конфеты с урбечем и сухофруктами без искусственных компонентов.',
      count: 15,
      image: candyPreview,
    },
    {
      id: 10,
      name: 'Козинаки',
      description: 'Натуральные козинаки из семян и орехов на натуральном сиропе.',
      count: 8,
      image: kozinakPreview,
    },
    {
      id: 11,
      name: 'Наборы',
      description: 'Подарочные наборы натуральных кавказских продуктов.',
      count: 6,
      image: otherPreview,
    },
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const updateCurrentName = (newName) => {
    setCurrentName(newName);
  };

  const goToCategory = (categoryId) => {
    navigate(`/catalog?category=${categoryId}`);
  };

  useEffect(() => {
    let interval;
    const startAutoplay = () => {
      interval = setInterval(() => {
        goNext();
      }, 4000);
    };

    const stopAutoplay = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    startAutoplay();

    const swiperEl = document.querySelector('.swiper-container');
    if (swiperEl) {
      swiperEl.addEventListener('mouseenter', stopAutoplay);
      swiperEl.addEventListener('mouseleave', startAutoplay);
    }

    return () => {
      stopAutoplay();
      if (swiperEl) {
        swiperEl.removeEventListener('mouseenter', stopAutoplay);
        swiperEl.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, []);

  return (
    <section className="overflow-hidden pb-16 h-[85vh] md:h-full bg-[#f8f5f0] overflow-x-hidden w-full">
      <div className="w-full px-4">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3c2d1e] mb-4">
            Категории продукции
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-[2px] bg-[#8b6b46] mx-auto mb-4"
          />
          <p className="text-lg text-[#5a4a3a] max-w-2xl mx-auto">
            Откройте для себя всё разнообразие кавказских деликатесов
          </p>
        </motion.div>

        {/* Кастомные кнопки навигации */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            ref={navigationPrevRef}
            onClick={goPrev}
            className="w-14 invisible md:visible h-14 flex-shrink-0 cursor-pointer rounded-full bg-white border border-[#e0d5c5] flex items-center justify-center hover:bg-[#f8f5f0] transition-all group disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            aria-label="Предыдущая категория"
          >
            <ChevronLeft className="w-6 h-6 cursor-pointer text-[#5a4a3a] group-hover:text-[#8b6b46] transition-colors" />
          </button>

          {/* Центральный блок с фиксированной шириной */}
          <div className="min-w-[320px] max-w-[400px] mx-4 px-6 py-4 bg-white rounded-xl border border-[#e0d5c5] shadow-sm">
            <div className="text-center">
              <motion.div
                key={currentName}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-medium  text-[#3c2d1e] mb-1 truncate"
              >
                {currentName}
              </motion.div>
             
            </div>
          </div>

          <button
            ref={navigationNextRef}
            onClick={goNext}
            className="w-14 invisible md:visible h-14 flex-shrink-0 cursor-pointer rounded-full bg-white border border-[#e0d5c5] flex items-center justify-center hover:bg-[#f8f5f0] transition-all group disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            aria-label="Следующая категория"
          >
            <ChevronRight className="w-6 h-6 cursor-pointer text-[#5a4a3a] group-hover:text-[#8b6b46] transition-colors" />
          </button>
        </div>

        {/* Swiper карусель */}
        <div className="swiper-container relative w-full overflow-visible">
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={10}
            loop={true}
            speed={800}
            initialSlide={activeIndex}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
              updateCurrentName(categories[realIndex]?.name);
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -60,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            className="!pb-12 w-full !overflow-visible"
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -40,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              640: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                coverflowEffect: {
                  rotate: 3,
                  stretch: -50,
                  depth: 150,
                  modifier: 1.2,
                  slideShadows: false,
                },
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 6,
                  stretch: -60,
                  depth: 180,
                  modifier: 1.3,
                  slideShadows: false,
                },
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 25,
                coverflowEffect: {
                  rotate: 9,
                  stretch: -70,
                  depth: 200,
                  modifier: 1.5,
                  slideShadows: false,
                },
              },
              1440: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -80,
                  depth: 250,
                  modifier: 1.8,
                  slideShadows: false,
                },
              },
            }}
          >
            {categories.map((category, index) => {
              const isActive = activeIndex === index;
              
              return (
                <SwiperSlide 
                  key={category.id}
                  className={`
                    !w-[280px] md:!w-[320px] lg:!w-[380px] xl:!w-[420px] 
                    !h-[350px] md:!h-[520px] lg:!h-[450px] xl:!h-[500px]
                    transition-all duration-500
                    ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}
                  `}
                  onClick={() => goToCategory(category.id)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative h-full rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    {/* Фото категории */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    </div>

                    {/* Контент карточки */}
                    <div className="relative h-full flex flex-col p-6 md:p-8">
                      {/* Верхняя часть с названием */}
                      <div className="flex-1 flex flex-col justify-end">
                        <div className="mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-2">
                            {category.name}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base line-clamp-3">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Кнопка перехода */}
                      <div className="pt-4 border-t border-white/20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToCategory(category.id);
                          }}
                          className="w-full cursor-pointer py-3 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          Смотреть все
                        </button>
                      </div>
                    </div>

                    {/* Акцентная рамка для активной карточки */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-[#8b6b46] rounded-3xl pointer-events-none" />
                    )}
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Индикаторы прогресса */}
          <div className="mt-8 flex justify-center gap-1 md:gap-2 overflow-x-auto max-w-full px-4 py-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideToLoop(index);
                  }
                }}
                className={`
                  flex-shrink-0 cursor-pointer w-2 h-2 md:w-3 md:h-3 rounded-full transition-all
                  ${index === activeIndex 
                    ? 'w-6 md:w-8 bg-[#8b6b46]' 
                    : 'bg-[#8b6b46]/30 hover:bg-[#8b6b46]/50'
                  }
                `}
                aria-label={`Перейти к категории ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesRoulette;