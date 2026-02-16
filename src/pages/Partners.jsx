import { motion } from 'framer-motion';
import { Check, Package, HeartHandshake, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import first from "../assets/partners/advantages/first.jpg"
import second from "../assets/partners/advantages/second.jpg"
import third from "../assets/partners/advantages/third.jpg"
import logo from "../assets/partners/advantages/logo.png"

import herobg from "../assets/partners/background.jpg"

const Partners = () => {

  const navigate = useNavigate();

  const advantages = [
    {
      title: 'Уникальное позиционирование',
      desc: 'Этно-продукт категории «здоровое питание» из туристического региона Кавказа.',
      image: first,
      bgColor: 'bg-[#f8f5f0]',
    },
    {
      title: 'Чистый состав',
      desc: 'Отсутствие консервантов и искусственных добавок. Только натуральные ингредиенты.',
      image: second,
      bgColor: 'bg-white',
    },
    {
      title: 'Гибкость и эксклюзив',
      desc: 'Готовность к разработке индивидуальных вкусов и фасовки под запросы партнёров.',
      image: third,
      bgColor: 'bg-[#f8f5f0]',
    },
    {
      title: 'Сильный региональный бренд',
      desc: 'Производство в Пятигорске гарантирует подлинность и выступает маркером качества.',
      image: logo,
      bgColor: 'bg-white',
    },
  ];

  return (
    <section className="relative bg-[#f8f5f0]">
      
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20 }}
          className="absolute inset-0"
          style={{ backgroundImage: `url('${herobg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-[#3c2d1e]/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl text-white md:text-7xl font-bold mb-10"
          >
            Сотрудничество с партнёрами
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-md md:text-xl leading-relaxed"
          >
            Мы заинтересованы в долгосрочном и взаимовыгодном сотрудничестве с розничными сетями, магазинами здорового питания, 
            сувенирными лавками, отелями курортного региона и корпоративными клиентами.
          </motion.p>
        </div>
      </div>

      
      <div>
        {advantages.map((adv, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className={`${adv.bgColor} py-24`}>
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  <div className="lg:w-1/2">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-4xl lg:text-5xl font-bold text-[#3c2d1e] mb-8 text-center lg:text-left"
                    >
                      {adv.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl lg:text-3xl text-[#5a4a3a] leading-relaxed text-center lg:text-left"
                    >
                      {adv.desc}
                    </motion.p>
                  </div>

                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={adv.image}
                          alt={adv.title}
                          className={`w-full h-full ${index === 3 ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3c2d1e]/10 to-transparent" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="py-32 px-4 text-center bg-[#3c2d1e]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-5xl font-bold text-white mb-12">
            Готовы к сотрудничеству?
          </h3>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#b89b72" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contacts')}
            className="px-16 py-6 bg-[#d4af37] text-white text-2xl font-bold rounded-3xl shadow-2xl transition-all cursor-pointer"
          >
            Связаться с нами
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;