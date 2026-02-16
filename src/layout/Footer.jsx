import { 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles
} from 'lucide-react';
import mountainsLogo from '../assets/logo-mountation.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#3c2d1e] text-white py-16">
      <div className="mx-5 md:mx-25 px-4">
        <div className="grid justify-between grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className='col-span-2'>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                <img
                  src={mountainsLogo}
                  alt="Секреты Кавказа"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <Link to="/" className="hover:opacity-90 transition-opacity">
                  <h2 className="text-xl md:text-3xl text-white">Секреты Кавказа</h2>
                  <p className="text-sm text-gray-400">Пятигорск • Ставропольский край</p>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-md mb-8">
              Аутентичные кавказские сладости, приправы и мёд на натуральной основе.
            </p>
          </div>

          
          <div className='col-span-2 md:col-span-1'>
            <h3 className="text-xl text-white mb-6">Навигация</h3>
            <ul className="space-y-4">
              {[
                { name: 'Главная', path: '/' },
                { name: 'Каталог', path: '/catalog' },
                { name: 'О нас', path: '/about' },
                { name: 'Производство', path: '/production' },
                { name: 'Партнёрам', path: '/partners' },
                { name: 'Контакты', path: '/contacts' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#d4af37]" />
              <div>
                <p className="text-gray-400">Адрес</p>
                <p className="hover:text-[#d4af37] transition-colors cursor-pointer">
                  г. Пятигорск, Ставропольский край
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#d4af37]" />
              <div>
                <p className="text-gray-400">Телефон</p>
                <Link 
                  to="/contacts" 
                  className="hover:text-[#d4af37] transition-colors"
                >
                  +7 (968) 269-52-77
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#d4af37]" />
              <div>
                <p className="text-gray-400">Email</p>
                <a 
                  href="mailto:info@secretskavkaza.ru" 
                  className="hover:text-[#d4af37] transition-colors"
                >
                  info@secretskavkaza.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} «Секреты Кавказа». Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;