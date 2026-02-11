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
      {/* Контакты + форма в одном блоке */}
      <div className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#3c2d1e] mb-3">Адрес</h3>
                  <p className="text-xl text-[#5a4a3a]">г. Пятигорск, Ставропольский край, Россия</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center">
                  <Phone className="w-12 h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#3c2d1e] mb-3">Телефон</h3>
                  <a href="tel:+79682695277" className="text-2xl text-[#5a4a3a] hover:text-[#d4af37] block">+7 (968) 269-52-77</a>
                  <p className="text-xl text-[#5a4a3a] mt-2">WhatsApp • Дейнеко Татьяна Владимировна</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center">
                  <Mail className="w-12 h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#3c2d1e] mb-3">Email</h3>
                  <a href="mailto:info@secretskavkaza.ru" className="text-2xl text-[#5a4a3a] hover:text-[#d4af37] block">info@secretskavkaza.ru</a>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#e8e0d5]">
              <div className="flex items-center space-x-8">
                <div className="w-20 h-20 bg-[#f8f5f0] rounded-3xl flex items-center justify-center">
                  <Clock className="w-12 h-12 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#3c2d1e] mb-3">Режим работы</h3>
                  <p className="text-xl text-[#5a4a3a]">Пн–Пт: 09:00–18:00</p>
                  <p className="text-xl text-[#5a4a3a]">Сб–Вс: по договорённости</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-[#e8e0d5]"
          >
            <h2 className="text-5xl font-bold text-[#3c2d1e] mb-12">Напишите нам</h2>
            <form className="space-y-10">
              <input type="text" placeholder="Ваше имя" className="w-full px-8 py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-xl" />
              <input type="text" placeholder="Телефон или email" className="w-full px-8 py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-xl" />
              <textarea rows={8} placeholder="Сообщение" className="w-full px-8 py-6 rounded-3xl border-2 border-[#e8e0d5] focus:border-[#d4af37] text-xl resize-none" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full cursor-pointer py-6 bg-[#d4af37] text-white text-2xl font-bold rounded-3xl shadow-2xl hover:bg-[#b89b72]"
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