import { motion } from 'framer-motion';

const Philosophy = () => {
  const principles = [
    {
      title: 'Аутентичность',
      desc: 'Традиционные рецепты, переосмысленные с заботой о современном потребителе.',
      illus: 'https://c8.alamy.com/comp/2E0HDC5/georgia-traditional-dessert-with-nuts-and-honey-gozinaki-on-the-plate-white-background-2E0HDC5.jpg',
    },
    {
      title: 'Натуральность',
      desc: 'Отборные орехи, чистейший мёд, свежие ягоды. Без консервантов и искусственных добавок.',
      illus: 'https://thumbs.dreamstime.com/b/traditional-dagestani-paste-urbach-flaxseed-urbech-superfood-vegan-diet-202692394.jpg',
    },
    {
      title: 'Инновации в традициях',
      desc: 'Авторские вкусы, сочетающие классическую основу Кавказа с уникальными добавками.',
      illus: 'https://thumbs.dreamstime.com/b/golden-honey-cliffs-yemen-golden-honeycomb-hanging-edge-steep-cliff-yemen-glowing-under-warm-morning-404567814.jpg',
    },
  ];

  const galleryImages = [
    'https://c8.alamy.com/comp/2E0HDC5/georgia-traditional-dessert-with-nuts-and-honey-gozinaki-on-the-plate-white-background-2E0HDC5.jpg',
    'https://cdn.georgia.to/img/thumbnails/gbXeixUMsps2x3YeKSSRwe_smedium.jpg',
    'https://thumbs.dreamstime.com/b/traditional-dagestani-paste-urbach-flaxseed-urbech-superfood-vegan-diet-202692394.jpg',
    'https://thumbs.dreamstime.com/b/golden-honey-cliffs-yemen-golden-honeycomb-hanging-edge-steep-cliff-yemen-glowing-under-warm-morning-404567814.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f8f5f0' }}>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Заголовок */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3c2d1e] mb-6">Наше призвание</h2>
          <p className="text-lg md:text-xl text-[#5a4a3a] max-w-4xl mx-auto leading-relaxed">
            Мы — «Секреты Кавказа» из сердца Кавказских Минеральных Вод, города Пятигорска.
            Мы создаём продукты, которые бережно хранят вековые гастрономические традиции этого богатого края.
          </p>
        </motion.div>

        {/* Принципы */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-12 mb-24">
          {principles.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              whileHover={{ y: -12 }} 
              className="bg-white rounded-3xl p-10 text-center shadow-md border border-[#e8e0d5] transition-all"
            >
              <img src={item.illus} alt={item.title} className="w-32 h-32 mx-auto object-cover rounded-full mb-6" />
              <h3 className="text-2xl font-semibold text-[#3c2d1e] mb-4">{item.title}</h3>
              <p className="text-[#5a4a3a] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Разделитель */}
        <div className="h-px bg-[#d4b483] my-24 mx-auto max-w-4xl" />

        {/* Галерея производства */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-24">
          <h3 className="text-3xl font-bold text-[#3c2d1e] text-center mb-12">Наше производство</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, i) => (
              <motion.img 
                key={i} 
                whileHover={{ scale: 1.05 }} 
                src={src} 
                alt="Производство" 
                className="rounded-2xl shadow-md object-cover h-64 w-full transition-transform" 
              />
            ))}
          </div>
        </motion.div>

        {/* Преимущества для партнёров */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-12 shadow-md border border-[#e8e0d5]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#3c2d1e] mb-8">Ключевые преимущества для партнёров</h3>
              <ul className="space-y-6 text-lg text-[#5a4a3a]">
                <li className="flex">
                  <span className="text-[#8b6b46] mr-4 text-2xl">•</span> 
                  <span><strong>Уникальное позиционирование:</strong> Этно-продукт здорового питания из туристического региона.</span>
                </li>
                <li className="flex">
                  <span className="text-[#8b6b46] mr-4 text-2xl">•</span> 
                  <span><strong>Чистый состав:</strong> Без консервантов и искусственных добавок.</span>
                </li>
                <li className="flex">
                  <span className="text-[#8b6b46] mr-4 text-2xl">•</span> 
                  <span><strong>Гибкость:</strong> Индивидуальные вкусы и фасовка.</span>
                </li>
                <li className="flex">
                  <span className="text-[#8b6b46] mr-4 text-2xl">•</span> 
                  <span><strong>Региональный бренд:</strong> Пятигорск — маркер подлинности.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://mf.b37mrtl.ru/rbthmedia/images/2022.09/original/631d91742ba4ec3f520e93e4.jpg" 
                alt="Производство в Пятигорске" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;