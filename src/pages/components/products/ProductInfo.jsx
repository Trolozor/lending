import { useState, useMemo, useEffect } from 'react';
import { 
  Info, 
  Package, 
  Leaf, 
  Thermometer, 
  Coffee, 
  AlertCircle,
  Scale,
  Clock,
  Apple,
  Droplets,
  Heart,
  ChevronDown,
  ChevronUp,
  Nut,
  Candy,
  Cookie,
  Box,
  Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import tea_info from "../../../assets/catalog/tea/tea_info.json";
import spice_info from "../../../assets/catalog/spice/spice_info.json";
import bar_info from "../../../assets/catalog/bar/bar_info.json";
import oil_info from "../../../assets/catalog/oil/oil_info.json";
import balsam_info from "../../../assets/catalog/balsam/balsam_info.json";
import honey_info from "../../../assets/catalog/honey/honey_info.json";
import balham_info from "../../../assets/catalog/balham/balham_info.json";
import yrbech_info from "../../../assets/catalog/yrbech/yrbech_info.json";
import candys_info from "../../../assets/catalog/candys/candys_info.json";
import kozinak_info from "../../../assets/catalog/kozinak/kozinak_info.json";
import other_info from "../../../assets/catalog/other/other_info.json";

const ProductInfo = ({ product, category }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  
  const productData = useMemo(() => {
    if (category?.name === 'Чай') {
      return tea_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Приправы' || category?.name === 'Специи') {
      return spice_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Батончики') {
      return bar_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Масло') {
      return oil_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Бальзамы') {
      return balsam_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Мед') {
      return honey_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Балхам') {
      return balham_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Урбеч') {
      return yrbech_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Конфеты') {
      return candys_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Козинаки' || category?.name === 'Крокан/Кавказинак') {
      return kozinak_info.find(item => item.id === product.id) || product;
    } else if (category?.name === 'Наборы') {
      return other_info.find(item => item.id === product.id) || product;
    }
    return product;
  }, [category, product]);

  // Сбрасываем состояния при смене продукта
  useEffect(() => {
    setIsDescriptionExpanded(false);
    setSelectedProductIndex(0);
  }, [productData]);

  // Проверяем, является ли продукт набором
  const isSet = category?.name === 'Наборы' && productData.products && Array.isArray(productData.products);
  
  // Получаем текущий продукт (либо основной, либо выбранный продукт из набора)
  const currentProduct = isSet && productData.products[selectedProductIndex] 
    ? productData.products[selectedProductIndex] 
    : productData;

  // Функция для отображения описания с кнопкой раскрытия
  const renderDescriptionText = (text) => {
    if (!text) return null;
    
    const isLongDescription = text.length > 300;
    
    return (
      <div>
        <div className="text-[#5a4a3a] leading-relaxed">
          {isLongDescription && !isDescriptionExpanded 
            ? `${text.slice(0, 300)}...` 
            : text
          }
        </div>
        {isLongDescription && (
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="mt-3 flex items-center text-[#d4af37] hover:text-[#b8941f] transition-colors font-medium cursor-pointer"
          >
            {isDescriptionExpanded ? (
              <>
                <span>Свернуть</span>
                <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                <span>Раскрыть</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  // Форматирование списка состава
  const renderComposition = () => {
    if (!currentProduct.composition || !Array.isArray(currentProduct.composition)) {
      return <p className="text-[#5a4a3a]">Натуральные ингредиенты</p>;
    }
    
    const compositionString = currentProduct.composition.join(', ');
    
    return (
      <div className="relative">
        <div className="text-[#5a4a3a] leading-relaxed">
          {compositionString}
        </div>
      </div>
    );
  };

  // Рендер пищевой ценности
  const renderNutrition = () => {
    if (!currentProduct.nutrition) return null;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <p className='text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center col-span-2 md:col-span-4'>Энергетическая ценность</p>
        <div className="rounded-lg">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-[#3c2d1e]">Калории</span>
          </div>
          <p className="text-[#5a4a3a] text-sm">{currentProduct.nutrition.calories}</p>
        </div>
        <div className="rounded-lg">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-[#3c2d1e]">Белки</span>
          </div>
          <p className="text-[#5a4a3a] text-sm">{currentProduct.nutrition.protein}</p>
        </div>
        <div className="rounded-lg">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-[#3c2d1e]">Жиры</span>
          </div>
          <p className="text-[#5a4a3a] text-sm">{currentProduct.nutrition.fat}</p>
        </div>
        <div className="rounded-lg">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-[#3c2d1e]">Углеводы</span>
          </div>
          <p className="text-[#5a4a3a] text-sm">{currentProduct.nutrition.carbs}</p>
        </div>
      </div>
    );
  };

  // Рендер особенностей продукта
  const renderFeatures = () => {
    if (!productData.features || !Array.isArray(productData.features)) return null;
    
    return (
      <div className="mt-4">
        <h4 className="font-semibold text-[#3c2d1e] mb-2 text-sm">Особенности</h4>
        <div className="flex flex-wrap gap-2">
          {productData.features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Компонент для переключения продуктов в наборе
  const renderProductSwitcher = () => {
    if (!isSet || !productData.products || productData.products.length <= 1) return null;

    return (
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Gift className="w-5 h-5 text-[#d4af37] mr-2" />
          <h3 className="text-lg font-semibold text-[#3c2d1e]">Продукты в наборе</h3>
          <span className="ml-2 px-2 py-1 bg-[#f8f5f0] text-[#5a4a3a] text-xs rounded-full">
            {productData.products.length} шт
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {productData.products.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProductIndex(index)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                selectedProductIndex === index
                  ? 'bg-[#d4af37] text-white shadow-md'
                  : 'bg-gray-100 text-[#5a4a3a] hover:bg-gray-200'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Мобильные вкладки
  const mobileTabs = [
    { id: 'description', label: 'Описание', icon: Info },
    { id: 'composition', label: 'Состав', icon: Leaf },
    { id: 'details', label: 'Детали', icon: Package },
  ];

  const renderMobileContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-4">
            {/* Описание набора (если это набор) */}
            {isSet && productData.description && (
              <div className="bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <Box className="w-5 h-5 mr-2" />
                  О наборе
                </h3>
                {renderDescriptionText(productData.description)}
              </div>
            )}
            
            {/* Описание выбранного продукта */}
            {currentProduct.description && (
              <div className="bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Описание {isSet ? "продукта" : ""}
                </h3>
                {renderDescriptionText(currentProduct.description)}
              </div>
            )}
            
            {/* Применение */}
            {(currentProduct.brewing || currentProduct.usage || (isSet && productData.usage)) && (
              <div className="bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3">
                  Применение
                </h3>
                <div className="space-y-3">
                  {currentProduct.brewing && (
                    <div>
                      <div className="flex items-center mb-1">
                        <Coffee className="w-4 h-4 text-amber-600 mr-2" />
                        <span className="font-medium text-[#3c2d1e]">Способ заваривания</span>
                      </div>
                      <p className="text-[#5a4a3a] text-sm pl-6">{currentProduct.brewing}</p>
                    </div>
                  )}
                  {currentProduct.usage && (
                    <div>
                      <div className="flex items-center mb-1">
                        <Thermometer className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-medium text-[#3c2d1e]">Применение</span>
                      </div>
                      <p className="text-[#5a4a3a] text-sm pl-6">{currentProduct.usage}</p>
                    </div>
                  )}
                  {isSet && productData.usage && !currentProduct.usage && (
                    <div>
                      <div className="flex items-center mb-1">
                        <Thermometer className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-medium text-[#3c2d1e]">Применение</span>
                      </div>
                      <p className="text-[#5a4a3a] text-sm pl-6">{productData.usage}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
        
      case 'composition':
        return (
          <div className="bg-white rounded-xl">
            <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Состав
            </h3>
            {renderComposition()}
            {currentProduct.nutrition && renderNutrition()}
          </div>
        );
        
      case 'details':
        return (
          <div className="bg-white rounded-xl space-y-4">
            {/* Упаковка и характеристики */}
            {(currentProduct.packaging || currentProduct.weight || currentProduct.volume) && (
              <div>
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Упаковка и характеристики
                </h3>
                <div className="space-y-2">
                  {currentProduct.packaging && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#5a4a3a]">Тип упаковки</span>
                      <span className="font-medium text-[#3c2d1e]">{currentProduct.packaging}</span>
                    </div>
                  )}
                  {currentProduct.weight && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#5a4a3a]">Вес</span>
                      <span className="font-medium text-[#3c2d1e]">{currentProduct.weight}</span>
                    </div>
                  )}
                  {currentProduct.volume && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#5a4a3a]">Объем</span>
                      <span className="font-medium text-[#3c2d1e]">{currentProduct.volume}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Хранение и срок годности */}
            {(productData.storage || productData.shelf_life) && (
              <div>
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Хранение
                </h3>
                <div className="space-y-2">
                  {productData.storage && (
                    <div className="py-2 border-b border-gray-100">
                      <div className="flex items-center mb-1">
                        <Package className="w-4 h-4 text-amber-600 mr-2" />
                        <span className="font-medium text-[#3c2d1e]">Условия хранения</span>
                      </div>
                      <p className="text-[#5a4a3a] text-sm pl-6">{productData.storage}</p>
                    </div>
                  )}
                  {productData.shelf_life && (
                    <div className="py-2">
                      <div className="flex items-center mb-1">
                        <Clock className="w-4 h-4 text-amber-600 mr-2" />
                        <span className="font-medium text-[#3c2d1e]">Срок годности</span>
                      </div>
                      <p className="text-[#5a4a3a] text-sm pl-6">{productData.shelf_life}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Особенности */}
            {productData.features && renderFeatures()}
            
            {/* Противопоказания */}
            {(productData.contraindications || productData.contraindication) && (
              <div>
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  Противопоказания
                </h3>
                <div className="rounded-xl">
                  <p className="text-[#5a4a3a] text-sm">{productData.contraindications || productData.contraindication}</p>
                </div>
              </div>
            )}
            
            {/* Примечания */}
            {productData.notes && (
              <div>
                <h3 className="text-lg font-semibold text-[#3c2d1e] mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                  Примечание
                </h3>
                <div className="rounded-xl">
                  <p className="text-[#5a4a3a] text-sm">{productData.notes}</p>
                </div>
              </div>
            )}
            
            {/* Информация о качестве для разных категорий */}
            {category?.name === 'Чай' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Настоящий кавказский травяной чай. Травы собраны в экологически чистых районах 
                      высокогорья Кавказа, высушены и обработаны вручную.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Приправы' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a3a3a] text-sm">
                      Настоящие кавказские приправы. Специи собраны вручную, высушены по традиционным 
                      технологиям и тщательно отобраны для идеального вкуса.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Батончики' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Apple className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральные батончики без сахара. Изготовлены из отборных ингредиентов, 
                      без искусственных добавок и консервантов. Идеальный выбор для здорового перекуса.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Масло' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Droplets className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральное масло холодного отжима. Изготовлено из отборных семян, 
                      без химической обработки и добавок. Сохраняет все полезные свойства.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Бальзамы' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральный травяной бальзам. Изготовлен из отборных лекарственных растений, 
                      собранных в экологически чистых районах Кавказа.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Мед' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральный кавказский мед с добавлением ценных растительных компонентов. 
                      Изготовлен из отборного меда и целебных масел без искусственных добавок.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Балхам' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Традиционный кавказский балхам. Изготовлен из натуральных ингредиентов по 
                      старинным рецептам, сохраняя все полезные свойства.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Урбеч' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Nut className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральный урбеч из отборных орехов и семян. Изготовлен по традиционным 
                      кавказским рецептам, без добавления сахара и консервантов.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Конфеты' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Candy className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральные конфеты из отборных ингредиентов. Изготовлены без искусственных 
                      добавок и консервантов, сохраняя натуральный вкус и пользу.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(category?.name === 'Козинак' || category?.name === 'Крокан/Кавказинак') && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Cookie className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Натуральный козинак из отборных орехов и семян. Изготовлен по традиционным 
                      рецептам, без искусственных добавок и консервантов.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {category?.name === 'Наборы' && (
              <div className="mt-4">
                <div className="flex items-start">
                  <Package className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#3c2d1e] mb-1 text-sm">О качестве продукта</h4>
                    <p className="text-[#5a4a3a] text-sm">
                      Наборы натуральных кавказских продуктов. Изготовлены по традиционным рецептам, 
                      без искусственных добавок и консервантов. Идеальный подарок для заботы о здоровье.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="h-full">
      {/* Десктоп версия */}
      <div className="hidden lg:block space-y-6 md:space-y-8">
        {/* Заголовок и тип */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3c2d1e] leading-tight">
              {productData.name}
            </h1>
            {productData.line && (
              <span className="px-3 py-1 text-[#5a4a3a] rounded-full text-sm bg-[#f8f5f0]">
                {productData.line}
              </span>
            )}
          </div>
        </div>

        {/* Переключатель продуктов для наборов */}
        {renderProductSwitcher()}

        {/* Описание набора (если это набор) */}
        {isSet && productData.description && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Box className="w-5 h-5 mr-2" />
              О наборе
            </h3>
            {renderDescriptionText(productData.description)}
          </div>
        )}

        {/* Описание продукта - отображаем только если есть описание */}
        {currentProduct.description && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Описание {isSet ? "продукта" : ""}
            </h3>
            {renderDescriptionText(currentProduct.description)}
          </div>
        )}

        {/* Состав */}
        <div className="bg-white rounded-xl sm:rounded-2xl ">
          <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
            <Leaf className="w-5 h-5 mr-2" />
            Состав
          </h3>
          {renderComposition()}
          {currentProduct.nutrition && renderNutrition()}
        </div>

        {/* Упаковка и характеристики */}
        {(currentProduct.packaging || currentProduct.weight || currentProduct.volume) && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Упаковка
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentProduct.packaging && (
                <div className="rounded-xl">
                  <p className="font-medium text-[#3c2d1e] mb-1">Тип упаковки</p>
                  <p className="text-[#5a4a3a] text-sm">{currentProduct.packaging}</p>
                </div>
              )}
              {currentProduct.weight && (
                <div className="rounded-xl">
                  <p className="font-medium text-[#3c2d1e] mb-1">Вес</p>
                  <p className="text-[#5a4a3a] text-sm">{currentProduct.weight}</p>
                </div>
              )}
              {currentProduct.volume && (
                <div className="rounded-xl">
                  <p className="font-medium text-[#3c2d1e] mb-1">Объем</p>
                  <p className="text-[#5a4a3a] text-sm">{currentProduct.volume}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Особенности */}
        {productData.features && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Особенности
            </h3>
            <div className="flex flex-wrap gap-2">
              {productData.features.map((feature, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Применение */}
        {(currentProduct.brewing || currentProduct.usage || (isSet && productData.usage)) && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Thermometer className="w-5 h-5 mr-2" />
              Применение
            </h3>
            <div className="rounded-xl">
              <p className="text-[#5a4a3a] leading-relaxed text-sm sm:text-base">
                {currentProduct.brewing || currentProduct.usage || productData.usage}
              </p>
            </div>
          </div>
        )}

        {/* Хранение и срок годности */}
        {(productData.storage || productData.shelf_life) && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Хранение
            </h3>
            <div className="space-y-3">
              {productData.storage && (
                <div className="rounded-xl">
                  <p className="font-medium text-[#3c2d1e] mb-1">Условия хранения</p>
                  <p className="text-[#5a4a3a] text-sm">{productData.storage}</p>
                </div>
              )}
              {productData.shelf_life && (
                <div className="rounded-xl">
                  <p className="font-medium text-[#3c2d1e] mb-1">Срок годности</p>
                  <p className="text-[#5a4a3a] text-sm">{productData.shelf_life}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Противопоказания */}
        {(productData.contraindications || productData.contraindication) && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              Противопоказания
            </h3>
            <div className="rounded-xl">
              <p className="text-[#5a4a3a] leading-relaxed text-sm sm:text-base">
                {productData.contraindications || productData.contraindication}
              </p>
            </div>
          </div>
        )}

        {/* Примечания */}
        {productData.notes && (
          <div className="bg-white rounded-xl sm:rounded-2xl ">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3c2d1e] mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
              Примечание
            </h3>
            <div className="rounded-xl">
              <p className="text-[#5a4a3a] leading-relaxed text-sm sm:text-base">
                {productData.notes}
              </p>
            </div>
          </div>
        )}

        {/* Информация о качестве для разных категорий */}
        {category?.name === 'Чай' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Leaf className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Настоящий кавказский травяной чай. Травы собраны в экологически чистых районах 
                  высокогорья Кавказа, высушены и обработаны вручную. Без искусственных добавок и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Приправы' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Leaf className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Настоящие кавказские приправы. Специи собраны вручную в экологически чистых районах 
                  Кавказа, высушены по традиционным технологиям и тщательно отобраны для идеального вкуса.
                  Без искусственных ароматизаторов и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Батончики' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Apple className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральные батончики без сахара. Изготовлены из отборных ингредиентов, 
                  без искусственных добавок и консервантов. Идеальный выбор для здорового перекуса 
                  в любое время дня.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Масло' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Droplets className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральное масло холодного отжима. Изготовлено из отборных семян, 
                  без химической обработки и добавок. Сохраняет все полезные свойства и витамины.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Бальзамы' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Leaf className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральный травяной бальзам. Изготовлен из отборных лекарственных растений, 
                  собранных в экологически чистых районах Кавказа. Без искусственных добавок 
                  и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Мед' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Heart className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральный кавказский мед с добавлением ценных растительных компонентов. 
                  Изготовлен из отборного меда и целебных масел, собранных в экологически чистых 
                  районах Кавказа. Без искусственных добавок и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Балхам' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Leaf className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Традиционный кавказский балхам. Изготовлен из натуральных ингредиентов по 
                  старинным рецептам, сохраняя все полезные свойства и целебные качества.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Урбеч' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Nut className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральный урбеч из отборных орехов и семян. Изготовлен по традиционным 
                  кавказским рецептам, без добавления сахара и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Конфеты' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Candy className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральные конфеты из отборных ингредиентов. Изготовлены без искусственных 
                  добавок и консервантов, сохраняя натуральный вкус и пользу.
                </p>
              </div>
            </div>
          </div>
        )}

        {(category?.name === 'Козинак' || category?.name === 'Крокан/Кавказинак') && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Cookie className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Натуральный козинак из отборных орехов и семян. Изготовлен по традиционным 
                  рецептам, без искусственных добавок и консервантов.
                </p>
              </div>
            </div>
          </div>
        )}

        {category?.name === 'Наборы' && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-start">
              <Package className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-[#3c2d1e] mb-2 text-base sm:text-lg">
                  О качестве продукта
                </h4>
                <p className="text-[#5a4a3a] text-sm sm:text-base">
                  Наборы натуральных кавказских продуктов. Изготовлены по традиционным рецептам, 
                  без искусственных добавок и консервантов. Идеальный подарок для заботы о здоровье.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Мобильная версия */}
      <div className="lg:hidden">
        <div className="mb-4 flex items-baseline justify-between mb-3">
          <h1 className="text-2xl font-bold text-[#3c2d1e] mb-1">
            {productData.name}
          </h1>
          {productData.line && (
            <span className="inline-block mt-2 px-3 py-1 text-[#5a4a3a] rounded-full text-xs bg-[#f8f5f0]">
              {productData.line}
            </span>
          )}
        </div>

        {/* Переключатель продуктов для наборов (мобильная версия) */}
        {renderProductSwitcher()}

        {/* Мобильные вкладки */}
        <div className="bg-white border-b border-gray-200 mb-4">
          <div className="flex overflow-x-auto">
            {mobileTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-3 flex items-center justify-center space-x-2 transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                    : 'text-[#5a4a3a] hover:text-[#3c2d1e]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Контент мобильных вкладок */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderMobileContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductInfo;