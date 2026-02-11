import { motion } from 'framer-motion';

import first from "../assets/AboutProduction/first.jpg"
import second from "../assets/AboutProduction/second.jpg"
import third from "../assets/AboutProduction/third.jpg"
import fourth from "../assets/AboutProduction/fourth.jpg"

const AboutProduction = () => {
  
  const regionImages = [
    'https://thumbs.dreamstime.com/b/landscape-pyatigorsk-view-beshtau-mount-under-beautiful-clouds-russia-mountain-landmark-stavropol-krai-scenery-blue-253221570.jpg', 
    'https://thumbs.dreamstime.com/b/mashuk-mount-mist-pyatigorsk-stavropol-krai-russia-landscape-mountain-slope-foggy-view-forest-theme-nature-caucasus-misty-253729417.jpg', 
    'https://thumbs.dreamstime.com/b/landscape-pyatigorsk-view-city-beshtau-mount-background-russia-mountain-landmark-stavropol-krai-scenic-panorama-253221552.jpg', 
    'https://media.istockphoto.com/id/1147088792/photo/five-headed-mountain-beshtau-in-the-city-of-pyatigorsk-caucasus-russia.jpg?s=1024x1024&w=is&k=20&c=Y-pvrQDyHMbBioO8Mn2KVEPjijlfflJBFNvPloW5MM0=', 
  ];

  
  const productionImages = [ first, second, third, fourth];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${regionImages[0]})` }}>
      <div className="absolute inset-0 bg-[#f5f0e6]/90" /> {/* Бежевый overlay для читаемости */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Основной блок: текст + галерея производства */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Текст слева */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3d301f] mb-8">
              Производство в Пятигорске
            </h2>
            <div className="space-y-6 text-lg text-[#5c4033]/90 leading-relaxed">
              <p>
                Мы находимся в самом сердце Кавказских Минеральных Вод — в городе Пятигорске, у подножия величественных гор.
                Чистый горный воздух, родниковая вода и богатые дары природы — основа наших продуктов.
              </p>
              <p>
                Производство сочетает вековые кавказские традиции ручного труда с современными стандартами чистоты и качества.
                Каждая партия создаётся небольшими объёмами, чтобы сохранить подлинный вкус и пользу.
              </p>
            </div>

            {/* Преимущества в карточках */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <motion.div whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#e8e0d5] text-center">
                <div className="text-4xl mb-4">✋</div>
                <div className="text-xl font-semibold text-[#4a3c2a]">Ручная работа</div>
                <div className="text-sm text-[#5c4033]/70 mt-2">С душой и вниманием к деталям</div>
              </motion.div>
              <motion.div whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#e8e0d5] text-center">
                <div className="text-4xl mb-4">🌿</div>
                <div className="text-xl font-semibold text-[#4a3c2a]">Экологичность</div>
                <div className="text-sm text-[#5c4033]/70 mt-2">Бережём природу Кавказа</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Галерея производства справа */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {productionImages.map((src, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                src={src} 
                alt="Производство Секреты Кавказа" 
                className="rounded-2xl shadow-xl object-cover h-64 w-full transition-transform duration-500"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-20" />

        {/* CTA блок */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#e8e0d5] max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-[#4a3c2a] mb-6">
            Заинтересованы в долгосрочном сотрудничестве?
          </h3>
          <p className="text-lg text-[#5c4033]/90 mb-10 max-w-2xl mx-auto">
            Мы открыты для партнёрства с розничными сетями, магазинами здорового питания, 
            отелями курортного региона, сувенирными лавками и корпоративными клиентами.
            Предлагаем гибкие условия, эксклюзивные вкусы и надёжные поставки.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(212,175,55,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contacts')}
            className="px-10 cursor-pointer py-4 bg-[#d4af37] text-white text-lg font-semibold rounded-xl hover:bg-[#b89b72] transition-all shadow-lg"
          >
            Обсудить сотрудничество
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProduction;