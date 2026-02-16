import { motion } from 'framer-motion';
import { Factory, Mountain, Leaf, Heart, Star, ChevronRight } from 'lucide-react';

import background from "../assets/production/hero/background.jpg"

import first_step from "../assets/production/steps/first_step.jpg"
import second_step from "../assets/production/steps/second_step.jpg"
import third_step from "../assets/production/steps/third_step.jpg"
import fourth_step from "../assets/production/steps/fourth_step.jpg"

import first from "../assets/production/steps/first.jpg"
import second from "../assets/production/steps/second.jpg"
import third from "../assets/production/steps/third.jpg"

const Production = () => {
 const processSteps = [
  {
    number: '01',
    title: 'Отбор сырья',
    description: 'Ручной отбор лучших орехов (грецких, фундука, миндаля) и семян для урбеча. Используем только спелые местные ягоды и фрукты, натуральный мёд с предгорий Кавказа.',
    image: first_step,
  },
  {
    number: '02',
    title: 'Приготовление натуральной основы',
    description: 'Для козинаков и батончиков — медленное уваривание сиропа из топинамбура. Для варений — томление в малых медных котлах. Для урбеча — каменный помол семян и орехов.',
    image: second_step,
  },
  {
    number: '03',
    title: 'Создание вкуса и формы',
    description: 'Ручное смешивание орехов с сиропом для козинаков, формование авторских конфет и батончиков. Пастеризация и розлив варений с сохранением целых ягод.',
    image: third_step,
  },
  {
    number: '04',
    title: 'Естественная подготовка',
    description: 'Контролируемая сушка козинаков и батончиков. Медленное созревание урбеча для раскрытия вкуса. Щадящая пастеризация мёда с добавками для сохранения пользы.',
    image: fourth_step,
  },
];

  const regionHighlights = [
  {
    description: 'Символ Пятигорска. Её склоны дарят нам дикорастущие травы и уникальный микроклимат для пасек, чей мёд лежит в основе наших продуктов.',
    image: first,
  },
  {
    description: 'Уникальный микроклимат и чистейшая экология — идеальные условия для выращивания отборных орехов и семян, которые мы используем в урбечах и козинаках.',
    image: second,
  },
  {
    description: 'Наследие природных источников. Их энергия и чистота вдохновляют нас на создание продуктов без лишнего: только суть, только натуральный вкус.',
    image: third,
  },
];

  return (
    <section className="relative bg-white">
      
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, y: 0 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('${background}')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3c2d1e]/70 via-[#3c2d1e]/50 to-[#3c2d1e]/80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-8 leading-tight"
          >
            Производство<br />в Пятигорске
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            У подножия величественных Кавказских гор рождаются настоящие сладости.
            Чистый воздух, родниковая вода и дары природы — секрет нашего вкуса.
          </motion.p>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight className="w-6 h-6 text-white rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      
      <div className="py-32 px-4 bg-gradient-to-b from-white to-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] font-semibold tracking-widest uppercase">Традиционный процесс</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-[#3c2d1e] mb-8"
            >
              Искусство создания
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-[#5a4a3a] max-w-3xl mx-auto"
            >
              Каждый этап производства — это ритуал, сохраняющий многовековые традиции Кавказа
            </motion.p>
          </div>

          <div>
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  <div className="lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative mt-15"
                    >
                      <div className="text-8xl font-bold text-[#d4af37]/10 absolute -top-8 -left-4">
                        {step.number}
                      </div>
                      <h3 className="text-4xl font-bold text-[#3c2d1e] mb-6 relative">
                        {step.title}
                      </h3>
                      <p className="text-2xl text-[#5a4a3a] leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  
                  <div className="lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      
      <div className="px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 mb-6 mt-5">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] font-semibold tracking-widest uppercase">Природное наследие</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#3c2d1e] mb-8">
              Наш регион —<br />источник вдохновения
            </h2>
            <p className="text-2xl text-[#3c2d1e] max-w-3xl mx-auto">
              Величественные горы, чистейшие источники и особый климат создают уникальные условия
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regionHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <p className="text-lg text-[#3c2d1e]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center pb-10"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-6xl text-[#d4af37] mb-8"
              >
                "
              </motion.div>
              <p className="text-3xl md:text-4xl text-[#3c2d1e] italic leading-relaxed mb-8">
                Вкус наших продуктов — это вкус Кавказских гор, запечатлённый в каждой ореховой нити.
                Здесь природа становится искусством.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-[#d4af37]" />
                <span className="text-[#d4af37] font-semibold">Мастер-производитель</span>
                <div className="h-px w-20 bg-[#d4af37]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Production;