import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star, Check, Leaf, Shield } from 'lucide-react';

// Импортируем все ваши фотографии
import yrbechMain from "../assets/ProductShowcase/yrbech.png";
import yrbechContext from "../assets/ProductShowcase/yrbech_context.png";
import yrbechPackaging from "../assets/ProductShowcase/yrbech_packaging.png";
import yrbechTexture from "../assets/ProductShowcase/yrbech_texture.png";

import konfetMain from "../assets/ProductShowcase/konfet.png";
import konfetContext from "../assets/ProductShowcase/konfet_context.png";
import konfetPackaging from "../assets/ProductShowcase/konfet_packaging.png";
import konfetTexture from "../assets/ProductShowcase/konfet_texture.png";

import honeyMain from "../assets/ProductShowcase/honey_main.png";
import honeyContext from "../assets/ProductShowcase/honey_context.png";
import honeyPackaging from "../assets/ProductShowcase/honey_packaging.png";
import honeyTexture from "../assets/ProductShowcase/honey_texture.png";

const ProductShowcase = ({ id }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  const products = [
    {
      id: 1,
      name: 'Урбеч из семян конопли',
      description: 'Густая питательная паста из перетертых семян конопли холодного отжима. Источник энергии и полезных элементов. Без сахара, без консервантов. Идеально подходит для здорового питания и быстрых перекусов.',
      price: '520 ₽',
      oldPrice: '650 ₽',
      weight: '250 г',
      image: yrbechMain,
      features: ['100% натурально', 'Без сахара', 'Холодный отжим', 'Без консервантов', 'Источник Омега-3'],
      benefits: [
        { icon: <Leaf size={16} />, text: 'Натуральный продукт' },
        { icon: <Shield size={16} />, text: 'Без ГМО' },
        { icon: <Check size={16} />, text: 'Сертифицировано' }
      ],
      badge: 'Хит продаж',
      rating: 4.9,
      reviews: 127,
      additionalImages: [
        yrbechContext,
        yrbechPackaging,
        yrbechTexture
      ]
    },
    {
      id: 2,
      name: 'Конфеты «АУФФ!» Ассорти',
      description: 'Набор из 7 авторских конфет с разными вкусами. Созданы по традиционным кавказским рецептам с добавлением сухофруктов и орехов. Каждая конфета - уникальное сочетание натуральных ингредиентов.',
      price: '850 ₽',
      weight: '450 г',
      image: konfetMain,
      features: ['7 разных вкусов', 'Ручная работа', 'Натуральные ингредиенты', 'Без искусственных красителей', 'Идеальный подарок'],
      benefits: [
        { icon: <Star size={16} />, text: 'Премиум качество' },
        { icon: <Check size={16} />, text: 'Ручная сборка' },
        { icon: <Leaf size={16} />, text: 'Эко-упаковка' }
      ],
      badge: 'Новинка',
      rating: 4.8,
      reviews: 89,
      additionalImages: [
        konfetContext,
        konfetPackaging,
        konfetTexture
      ]
    },
    {
      id: 3,
      name: 'Мёд с маслом расторопши',
      description: 'Натуральный горный мёд, обогащенный маслом расторопши холодного отжима. Уникальное сочетание для поддержания здоровья и иммунитета. Собран в экологически чистых горных районах Кавказа.',
      price: '1450 ₽',
      oldPrice: '1800 ₽',
      weight: '500 г',
      image: honeyMain,
      features: ['Премиум качество', 'С целебными добавками', 'Горное происхождение', 'Натуральный продукт', 'Лечебные свойства'],
      benefits: [
        { icon: <Shield size={16} />, text: 'Без обработки' },
        { icon: <Leaf size={16} />, text: 'Дикий мёд' },
        { icon: <Check size={16} />, text: 'Медовый стандарт' }
      ],
      badge: 'Скидка 20%',
      rating: 5.0,
      reviews: 156,
      additionalImages: [
        honeyContext,
        honeyPackaging,
        honeyTexture
      ]
    }
  ];

  const handleImageClick = (productId, imageIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }));
  };

  return (
    <section id={id} className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#f8f5f0' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#3c2d1e] mb-4"
          >
            Наши товары лучшего качества
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-32 h-[2px] bg-[#8b6b46] mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#5a4a3a] max-w-2xl mx-auto leading-relaxed"
          >
            Натуральные продукты, созданные по традиционным рецептам с заботой о вашем здоровье
          </motion.p>
        </div>

        {/* Продукты */}
        <div className="space-y-32">
          {products.map((product, index) => {
            const isImageLeft = index % 2 === 0;
            const ref = [ref1, ref2, ref3][index];
            const isInView = [isInView1, isInView2, isInView3][index];
            const currentImageIndex = activeImageIndex[product.id];
            const currentImage = currentImageIndex === 0 ? product.image : product.additionalImages[currentImageIndex - 1];

            return (
              <motion.div
                key={product.id}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`bg-white rounded-2xl overflow-hidden border border-[#e0d5c5] shadow-md ${
                  index > 0 ? 'mt-16' : ''
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Акцентная полоска сверху */}
                <div className="h-1 bg-[#8b6b46]"></div>
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${
                  isImageLeft ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Изображение */}
                  <div className={`relative ${isImageLeft ? '' : 'lg:col-start-2'}`}>
                    <div className="relative group">
                      {/* Основное изображение */}
                      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-[#e0d5c5]">
                        <div className="aspect-square p-6 md:p-10 bg-[#f8f5f0]">
                          <motion.img 
                            src={currentImage} 
                            alt={product.name}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      {/* Дополнительные миниатюры */}
                      <div className="flex gap-3 mt-6 justify-center">
                        <button
                          onClick={() => handleImageClick(product.id, 0)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            currentImageIndex === 0 
                              ? 'border-[#8b6b46] scale-110' 
                              : 'border-[#e0d5c5] hover:border-[#8b6b46]'
                          }`}
                        >
                          <img src={product.image} alt="Основное" className="w-full h-full object-cover" />
                        </button>
                        {product.additionalImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleImageClick(product.id, idx + 1)}
                            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              currentImageIndex === idx + 1 
                                ? 'border-[#8b6b46] scale-110' 
                                : 'border-[#e0d5c5] hover:border-[#8b6b46]'
                            }`}
                          >
                            <img src={img} alt={`Фото ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Описание продукта */}
                  <div className={`space-y-6 ${isImageLeft ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    {/* Заголовок и цена */}
                    <div className="space-y-3">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-[#3c2d1e]"
                      >
                        {product.name}
                      </motion.h3>
                    </div>

                    {/* Описание */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="text-base text-[#5a4a3a] leading-relaxed">
                        {product.description}
                      </div>
                      
                      {/* Преимущества */}
                      <div className="pt-2">
                        <div className="text-sm font-medium text-[#5a4a3a] mb-2">Преимущества:</div>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 px-3 py-2 bg-[#f8f5f0] rounded-lg border border-[#e0d5c5]"
                            >
                              <div className="text-[#8b6b46]">{benefit.icon}</div>
                              <span className="text-sm text-[#5a4a3a]">{benefit.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Теги */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="pt-4"
                    >
                      <div className="text-sm font-medium text-[#5a4a3a] mb-3">Особенности:</div>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-[#f8f5f0] text-[#5a4a3a] text-sm rounded-full border border-[#e0d5c5]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Разделительная линия внизу */}
                {index < products.length - 1 && (
                  <div className="h-px bg-[#e0d5c5] mx-8"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;