import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts = () => {
  const heroBg = 'https://thumbs.dreamstime.com/b/majestic-caucasus-mountains-silhouetted-against-breathtaking-sunset-sky-panoramic-view-dramatic-clouds-witness-awe-356026840.jpg';

  const cityImages = [
    'https://thumbs.dreamstime.com/z/landscape-pyatigorsk-sunset-view-city-beshtau-mount-background-russia-mountain-landmark-stavropol-krai-scenic-253221561.jpg',
    'https://thumbs.dreamstime.com/b/landscape-pyatigorsk-sunset-view-mashuk-mount-russia-beautiful-scenery-dramatic-evening-sky-scenic-panorama-night-253221562.jpg',
    'https://www.shutterstock.com/shutterstock/photos/1878062776/display_1500/stock-photo-colorful-sunset-in-the-mountains-beshtau-mountains-pyatigorsk-russia-1878062776.jpg',
    'https://thumbs.dreamstime.com/b/mountain-valley-covered-clouds-sunset-view-above-small-scarlet-cloud-floating-above-rocks-lagonaki-caucasus-russia-89529657.jpg',
  ];

  return (
    <section className="relative bg-[#f8f5f0]">
      <div className="py-16 px-4 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
          {/* Левая колонка с контактами */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 md:mt-0 space-y-6 md:space-y-8 lg:space-y-12"
          >
            {/* Адрес */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 lg:w-12 lg:h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3c2d1e] mb-2">Адрес</h3>
                  <p className="text-lg md:text-xl text-[#5a4a3a]">г. Пятигорск, Ставропольский край, Россия</p>
                </div>
              </div>
            </div>

            {/* Телефон */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center shrink-0">
                  <Phone className="w-8 h-8 lg:w-12 lg:h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3c2d1e] mb-2">Телефон</h3>
                  <a href="tel:+79682695277" className="text-xl md:text-2xl text-[#5a4a3a] hover:text-[#d4af37] block break-words">
                    +7 (968) 269-52-77
                  </a>
                  <p className="text-base md:text-xl text-[#5a4a3a] mt-1">WhatsApp • Дейнеко Татьяна Владимировна</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 lg:w-12 lg:h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3c2d1e] mb-2">Email</h3>
                  <a href="mailto:info@secretskavkaza.ru" className="text-xl md:text-2xl text-[#5a4a3a] hover:text-[#d4af37] block break-words">
                    info@secretskavkaza.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Режим работы */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center shrink-0">
                  <Clock className="w-8 h-8 lg:w-12 lg:h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3c2d1e] mb-2">Режим работы</h3>
                  <p className="text-lg md:text-xl text-[#5a4a3a]">Пн–Пт: 09:00–18:00</p>
                  <p className="text-lg md:text-xl text-[#5a4a3a]">Сб–Вс: по договорённости</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка с формой */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl border border-[#e8e0d5]"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3c2d1e] mb-6 md:mb-8 lg:mb-12">
              Напишите нам
            </h2>
            <form className="space-y-4 md:space-y-6 lg:space-y-8">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-base md:text-lg lg:text-xl outline-none transition"
              />
              <input
                type="text"
                placeholder="Телефон или email"
                className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-base md:text-lg lg:text-xl outline-none transition"
              />
              <textarea
                rows={6}
                placeholder="Сообщение"
                className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-base md:text-lg lg:text-xl outline-none transition resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer py-4 md:py-5 lg:py-6 bg-[#d4af37] text-white text-xl md:text-2xl font-bold rounded-3xl shadow-2xl hover:bg-[#b89b72] transition-colors"
              >
                Отправить
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;