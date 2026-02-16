import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Product from './Product';


import teaPreview from '../assets/catalog/tea/tea_preview.jpg';
import spicePreview from '../assets/catalog/spice/spice_preview.png';
import barPreview from '../assets/catalog/bar/bar_preview.png';
import oilPreview from '../assets/catalog/oil/oil_preview.png';
import balhamPreview from '../assets/catalog/balham/balham_preview.png';
import balsamPreview from '../assets/catalog/balsam/balsam_preview.png';
import honeyPreview from '../assets/catalog/honey/honey_preview.png';
import kozinakPreview from '../assets/catalog/kozinak/kozinak_preview.png';
import otherPreview from '../assets/catalog/other/other_preview.png';
import candyPreview from '../assets/catalog/candys/candy_preview.png';
import yrbechPreview from '../assets/catalog/yrbech/yrbech_preview.png';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const catalogRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryId = searchParams.get('category');
    const productId = searchParams.get('product');
    
    if (categoryId) {
      const category = categories.find(cat => cat.id === parseInt(categoryId));
      if (category) {
        setSelectedCategory(category);
        setFilteredProducts(category.products);
        
        
        if (productId) {
          const product = category.products.find(p => p.id === parseInt(productId));
          if (product) {
            setSelectedProduct(product);
          }
        }
      }
    }
  }, [location.search]);

  const categories = [
    {
      id: 1,
      name: 'Чай',
      description: 'Травы собраны в высокогорьях Кавказа (Домбай, Приэльбрусье) во время цветения, высушены и обработаны вручную. Экологически чистое сырьё.',
      icon: 'Чай',
      image: teaPreview,
      products: [
        { "id": 1, "name": "Антистресс", "description": "Успокаивающий травяной сбор для снятия напряжения" },
        { "id": 2, "name": "Грудной", "description": "Травяной сбор для здоровья дыхательной системы" },
        { "id": 3, "name": "Домбайский", "description": "Энергетический горный чай для бодрости" },
        { "id": 4, "name": "Приэльбрусье", "description": "Тонизирующий горный сбор для иммунитета" },
        { "id": 5, "name": "Здоровый сон", "description": "Успокаивающий чай для крепкого сна" },
        { "id": 6, "name": "Домбайский чай", "description": "Ароматный горный чай для энергии" },
        { "id": 7, "name": "Кавказское долголетие", "description": "Сбор трав для здоровья и долголетия" },
        { "id": 8, "name": "Легенда Кавказа", "description": "Фирменный травяной чай для настроения" },
        { "id": 9, "name": "Горный чай", "description": "Повседневный чай для ежедневного употребления" },
        { "id": 10, "name": "Горный аромат", "description": "Бодрящий утренний чай для начала дня" },
        { "id": 11, "name": "Чай для баньки", "description": "Травяной чай для расслабления в бане" }
      ]
    },
    {
      id: 2,
      name: 'Приправы',
      description: 'Приправы Кавказа предлагают уникальную возможность познакомиться с богатством и разнообразием кулинарных традиций этого удивительного региона. Каждая приправа - это не просто набор ингредиентов, а целая история, которая передается из поколения в поколение. Здесь ценят натуральные, свежие и ароматные специи, которые способны раскрыть всю гамму вкусов: от острых и ярких до нежных и утонченных. Мы стремимся сохранить традиционные рецепты и методы производства, чтобы каждая баночка наших приправ приносила вам радость и вдохновение',
      icon: 'Приправы',
      image: spicePreview,
      products: [
        { id: 12, name: 'Аджика', description: 'Острая красная приправа' },
        { id: 13, name: 'Гранатовая соль', description: 'Ароматная соль к столу' },
        { id: 14, name: 'Для плова', description: 'Специальная приправа для плова' },
        { id: 15, name: 'Для рыбы', description: 'Приправа для рыбных блюд' },
        { id: 16, name: 'Ореховая', description: 'Ароматная ореховая приправа' },
        { id: 17, name: 'Орехово-чесночная', description: 'Орехово-чесночная смесь' },
        { id: 18, name: 'Саванская', description: 'Традиционная кавказская соль' },
        { id: 19, name: 'Универсальная', description: 'Универсальная приправа для любых блюд' }
      ]
    },
    {
      id: 3,
      name: 'Батончики',
      description: 'Энергетические батончики без сахара',
      icon: 'Батончики',
      image: barPreview,
      products: [
        { id: 20, name: 'Будь в теме', description: 'Энергетический батончик для активных' },
        { id: 21, name: 'Внатуре', description: 'Натуральный батончик без добавок' },
        { id: 22, name: 'Делай вещи', description: 'Батончик для продуктивности' },
        { id: 23, name: 'Кипишь', description: 'Энергетический батончик с орехами' },
        { id: 24, name: 'На суте', description: 'Батончик для спортивного питания' },
        { id: 25, name: 'Нежданчик', description: 'Батончик с сюрпризом внутри' }
      ]
    },
    {
      id: 4,
      name: 'Масло',
      description: 'Масла холодного отжима',
      icon: 'Масло',
      image: oilPreview,
      products: [
        { id: 26, name: 'Масло конопли', description: 'Конопляное масло холодного отжима' },
        { id: 27, name: 'Масло кунжутное', description: 'Кунжутное масло для кулинарии' },
        { id: 28, name: 'Масло льняное', description: 'Льняное масло, богатое Омега-3' },
        { id: 29, name: 'Масло расторопши', description: 'Масло расторопши для печени' },
        { id: 30, name: 'Масло черного тмина', description: 'Масло черного тмина для иммунитета' },
        { id: 31, name: 'Тыквенное масло', description: 'Тыквенное масло холодного отжима' }
      ]
    },
    {
      id: 5,
      name: 'Бальзамы',
      description: 'Безалкогольные травяные бальзамы',
      icon: 'Бальзамы',
      image: balsamPreview,
      products: [
        { id: 32, name: 'Архыз', description: 'Травяный бальзам для тонуса' },
        { id: 33, name: 'Домбай', description: 'Энергетический бальзам' },
        { id: 34, name: 'Казбек', description: 'Бальзам для чистых сосудов' },
        { id: 35, name: 'Легенда кавказа', description: 'Фирменный травяный бальзам' },
        { id: 36, name: 'Машук', description: 'Бальзам для здоровья' },
        { id: 37, name: 'Пятигорчанин', description: 'Бальзам для жителей Кавказа' },
        { id: 38, name: 'Чугуш', description: 'Женский травяный бальзам' },
        { id: 39, name: 'Эльбрус', description: 'Бальзам для здорового сна' }
      ]
    },
    {
      id: 6,
      name: 'Мед',
      description: 'Компания «Секреты Кавказа» поставляет только натуральный кавказский мёд высокого качества, который ценится в России и за её пределами. Экологически чистый район, богатая природа Домбая и Эльбруса - всё это позволяет собирать разные сорта мёда, которые обладают целебными свойствами.',
      icon: 'Мед',
      image: honeyPreview,
      products: [
        { id: 40, name: 'Аксакал', description: 'Мед с добавлением трутневого молока' },
        { id: 41, name: 'Бештау', description: 'Натуральный мед с прополисом, пергой и пчелиным подмором' },
        { id: 42, name: 'Дикий мёд', description: 'Дикий горный мед с альпийских лугов' },
        { id: 43, name: 'Диморфант', description: 'Редкий сорт меда с диморфанта' },
        { id: 44, name: 'Сувнаш', description: 'Высокогорный мед для поддержания женского здоровья' },
        { id: 45, name: 'Эльбрус', description: 'Горный цветочный мед' }
      ]
    },
    {
      id: 7,
      name: 'Балхам',
      description: 'Традиционные кавказские средства',
      icon: 'Балхам',
      image: balhamPreview,
      products: [
        { id: 46, name: 'Балхам с живицей', description: 'Халяльный балхам для здоровья' },
        { id: 47, name: 'Балхам без меда', description: 'Балхам для тех, кто не употребляет мед' },
        { id: 48, name: 'Балхам большой', description: 'Большая упаковка балхама' },
        { id: 49, name: 'Балхам с солодкой', description: 'Балхам с солодкой для дыхания' },
        { id: 50, name: 'Балхам усиленный', description: 'Усиленная формула балхама' },
        { id: 51, name: 'Балхам', description: 'Классический балхам' },
        { id: 52, name: 'Балхам с барсучим и медвежим жиром с медом', description: 'Смесь жиров с медом для иммунитета' },
        { id: 53, name: 'Балхам для детей', description: 'Детский балхам с мягкой формулой' },
        { id: 54, name: 'Балхам классический', description: 'Классический рецепт балхама' }
      ]
    },
    {
      id: 8,
      name: 'Урбеч',
      description: 'Урбеч - это 100% натуральная паста, которую получают путём перетирания сырых семян или орехов между каменными жерновами до состояния выделения масляной основы. Рекомендуется размешивать урбеч с мёдом в соотношении 1:1 либо с другими подсластителями (сироп топинамбура, патока, эритрит и др.)',
      icon: 'Урбеч',
      image: yrbechPreview,
      products: [
        { id: 50, name: 'Урбеч ореховое ассорти', description: 'Смесь ореховых паст' },
        { id: 51, name: 'Урбеч из грецкого ореха', description: 'Паста из грецкого ореха' },
        { id: 52, name: 'Урбеч из кунжута', description: 'Богат кальцием' },
        { id: 53, name: 'Урбеч из льна', description: 'Источник Омега-3' },
        { id: 54, name: 'Урбеч из миндаля', description: 'Миндальная паста' },
        { id: 55, name: 'Урбеч из расторопши', description: 'Поддержка для печени' },
        { id: 56, name: 'Урбеч из семян конопли', description: 'Богат белком' },
        { id: 57, name: 'Урбеч из тыквы', description: 'Тыквенная семечковая паста' },
        { id: 58, name: 'Урбеч из косточек абрикоса', description: 'Паста из абрикосовых косточек' },
        { id: 59, name: 'Урбеч из черного тмина', description: 'Для иммунитета' }
      ]
    },
    {
      id: 9,
      name: 'Конфеты АУФФ!',
      description: 'При производстве наших конфет мы не добавляем искусственные компоненты. Используются натуральные ингредиенты, которые проходят строгий контроль качества. Конфеты "АУФФ" подарят вам те эмоции и впечатления, которые вы запомните навсегда !!!',
      icon: 'Конфеты',
      image: candyPreview,
      products: [
        { id: 61, name: 'Четкие', description: 'Виноград и орех — жестко!' },
        { id: 62, name: 'Ништяки', description: 'Курага + миндаль = кайф' },
        { id: 63, name: 'Дооон', description: 'Фундук и шоколад — мощь!' },
        { id: 64, name: 'Это космос', description: 'Клюква и кокос — вау!' },
        { id: 65, name: 'По-братски', description: 'Финик и арахис — угар!' },
        { id: 66, name: 'От-души', description: 'Какао и лён — ништяк' },
        { id: 67, name: 'Бомба есть же', description: 'Кунжут и ананас — агонь' },
        { id: 68, name: 'Бомба есть же Max', description: 'Мега энергия! Ешь и рули!' },
        { id: 69, name: 'Дооон Max', description: 'Фундук премиум — респект' },
        { id: 70, name: 'Конфеты ассорти', description: 'Классика кавказа — уважуха' },
        { id: 71, name: 'От души Max', description: 'Какао и лён — максимум' },
        { id: 72, name: 'По братски Max', description: 'Финик — сытно и четко' },
        { id: 73, name: 'Ништяки Max', description: 'Энергия для движа' },
        { id: 74, name: 'Четкие виноград Max', description: 'Орех + виноград — ап!' },
        { id: 75, name: 'Это космос Max', description: 'Экзотика — полный улет' }
      ]
    },
    {
      id: 10,
      name: 'Козинаки',
      description: 'Натуральные козинаки из семян и орехов',
      icon: 'Козинаки',
      image: kozinakPreview,
      products: [
        { id: 79, name: 'Крокан с тыквой и клюквой', description: 'Тыква, клюква, без сахара' },
        { id: 80, name: 'Кавказинак конопляный', description: 'Конопля, абрикос, без сахара' },
        { id: 81, name: 'Кавказинак грецкий', description: 'Грецкий орех, без сахара' },
        { id: 82, name: 'Кавказинак льняной', description: 'Лён, изюм, без сахара' },
        { id: 83, name: 'Кавказинак кунжутный', description: 'Кунжут, без сахара' },
        { id: 84, name: 'Крокан мультизлаковый', description: 'Злаки, кешью, без сахара' },
        { id: 85, name: 'Пасти-ролл с черносливом', description: 'Грецкий орех, чернослив' },
        { id: 86, name: 'Пасти-ролл с курагой', description: 'Миндаль, курага, без сахара' }
      ]
    },
    {
      id: 11,
      name: 'Наборы',
      description: 'Подарочные наборы и другие продукты',
      icon: 'Наборы',
      image: otherPreview,
      products: [
        { id: 87, name: 'Тайна горцев', description: 'Тройная сила Кавказа' },
        { id: 88, name: 'Секреты долголетия', description: 'Эликсир здоровья горцев' },
        { id: 89, name: 'Урбеч 3 вида из орехов', description: 'Три ореховых богатыря' },
        { id: 90, name: 'Урбеч 3 вида из семян', description: 'Три источника силы' },
        { id: 91, name: 'Урбеч 6 видов из орехов', description: 'Шесть ореховых королей' },
        { id: 92, name: 'Урбеч 6 видов из семян', description: 'Шесть семенных сокровищ' }
      ]
    }
  ];

useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryId = searchParams.get('category');
    const productId = searchParams.get('product');
    
    if (categoryId) {
      const category = categories.find(cat => cat.id === parseInt(categoryId));
      if (category) {
        setSelectedCategory(category);
        setFilteredProducts(category.products);
        
        
        if (productId) {
          const product = category.products.find(p => p.id === parseInt(productId));
          if (product) {
            setSelectedProduct(product);
          }
        } else {
          setSelectedProduct(null);
        }
      }
    } else {
      setSelectedCategory(null);
      setSelectedProduct(null);
    }
  }, [location.search]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCategories(categories);
      if (selectedCategory) {
        setFilteredProducts(selectedCategory.products);
      }
      return;
    }

    const results = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.products.some(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredCategories(results);
    
    
    if (selectedCategory) {
      const filtered = selectedCategory.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    setFilteredCategories(categories);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setFilteredProducts(category.products);
    setSearchTerm('');
    navigate(`/catalog?category=${category.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
    setSearchTerm('');
    navigate('/catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/catalog?category=${selectedCategory.id}&product=${product.id}`);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    navigate(`/catalog?category=${selectedCategory.id}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const totalProducts = categories.reduce((sum, cat) => sum + cat.products.length, 0);

  return (
    <section id="products" className="py-32 px-4 md:px-8 bg-[#f8f5f0]" ref={catalogRef}>
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-6xl text-[#3c2d1e] mb-2">
              Каталог продукции
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mb-4" />
            <p className="text-lg text-[#5a4a3a]">
              Натуральные продукты «Секреты Кавказа»
            </p>
            {(selectedCategory || selectedProduct) && (
              <button
                onClick={selectedProduct ? handleCloseProduct : handleBackToCategories}
                className="mt-4 flex items-center cursor-pointer text-[#5a4a3a] hover:text-[#3c2d1e] transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-2 cursor-pointer" />
                {selectedProduct ? 'Назад к товарам' : 'Вернуться к категориям'}
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4a3a] w-5 h-5" />
              <input
                type="text"
                placeholder={
                  selectedProduct 
                    ? `Поиск других товаров...` 
                    : selectedCategory
                    ? `Поиск в ${selectedCategory.name.toLowerCase()}...` 
                    : "Поиск по каталогу..."
                }
                value={searchTerm}
                onChange={handleSearch}
                className="w-full md:w-80 pl-12 pr-10 py-3 bg-white rounded-lg border border-[#e0d5c5] text-[#3c2d1e] placeholder-[#5a4a3a]/60 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a4a3a] hover:text-[#3c2d1e] text-xl"
                >
                  ×
                </button>
              )}
            </div>
            {!selectedCategory && !selectedProduct && (
              <p className="mt-2 text-sm text-[#5a4a3a] text-right">
                {categories.length} категорий • {totalProducts} товаров
              </p>
            )}
          </motion.div>
        </div>

        
        <AnimatePresence mode="wait">
          {selectedProduct ? (
            
            <motion.div
              key="product-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Product
                product={selectedProduct}
                category={selectedCategory}
                mode="detail"
                onProductClick={handleCloseProduct}
              />
            </motion.div>
          ) : !selectedCategory ? (
            
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-[#e0d5c5] overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="h-auto overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#3c2d1e] mb-2 group-hover:text-[#2c2115] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[#5a4a3a] text-sm mb-4 truncate">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#5a4a3a] group-hover:text-[#3c2d1e] transition-colors">
                        Смотреть все →
                      </span>
                      <span className="text-sm text-[#5a4a3a] bg-[#f0e8dc] px-2 py-1 rounded">
                        {category.products.length} товаров
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            
            <motion.div
              key="products-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-[#3c2d1e] mb-2">
                        {selectedCategory.name}
                      </h3>
                      <p className="text-[#5a4a3a]">
                        {selectedCategory.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Product
                      key={product.id}
                      product={product}
                      category={selectedCategory}
                      mode="preview"
                      onProductClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#f0e8dc] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-[#5a4a3a]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#3c2d1e] mb-2">
                    Товары не найдены
                  </h4>
                  <p className="text-[#5a4a3a]">
                    Попробуйте изменить запрос или выберите другую категорию
                  </p>
                  <button
                    onClick={handleBackToCategories}
                    className="mt-4 px-6 py-2 bg-[#f0e8dc] text-[#3c2d1e] font-medium rounded-lg hover:bg-[#e8dcc8] transition-colors"
                  >
                    Вернуться к категориям
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Catalog;