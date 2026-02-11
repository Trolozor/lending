import { useState, useCallback, useMemo } from 'react';
import { Info, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import ProductImages from "./components/products/ProductImages.jsx";
import ProductInfo from "./components/products/ProductInfo";
import ImageModal from "./components/products/ImageModal.jsx";

import tea_images from "../assets/catalog/tea/tea_images.json";
import spice_images from "../assets/catalog/spice/spice_images.json";
import bar_images from "../assets/catalog/bar/bar_images.json";
import oil_images from "../assets/catalog/oil/oil_images.json";
import balsam_images from "../assets/catalog/balsam/balsam_images.json";
import honey_images from "../assets/catalog/honey/honey_images.json";
import balham_images from "../assets/catalog/balham/balham_images.json";
import yrbech_images from "../assets/catalog/yrbech/yrbech_images.json";
import candys_images from "../assets/catalog/candys/candys_images.json";
import kozinak_images from "../assets/catalog/kozinak/kozinak_images.json";
import other_images from "../assets/catalog/other/other_images.json";

const Product = ({ product, category, mode = 'preview', onProductClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageNavigation, setShowImageNavigation] = useState(false);
  
  
  const productImagesData = useMemo(() => {
    if (category?.name === 'Чай') {
      return tea_images.tea_images || {};
    } else if (category?.name === 'Приправы' || category?.name === 'Специи') {
      return spice_images.spice_images || {};
    } else if (category?.name === 'Батончики') {
      return bar_images.bar_images || {};
    } else if (category?.name === 'Масло') {
      return oil_images.oil_images || {};
    } else if (category?.name === 'Бальзамы') {
      return balsam_images.balsam_images || {};
    } else if (category?.name === 'Мед') {
      return honey_images.honey_images || {};
    } else if (category?.name === 'Балхам') {
      return balham_images.balham_images || {};
    } else if (category?.name === 'Урбеч') {
      return yrbech_images.yrbech_images || {};
    } else if (category?.name === 'Конфеты АУФФ!') {
      return candys_images.candy_images || {};
    } else if (category?.name === 'Козинаки') {
      return kozinak_images.kozinak_images || {};
    } else if (category?.name === 'Наборы') {
      return other_images.other_images || {};
    }
    return {};
  }, [category]);
  
  
  const allProductImages = useMemo(() => {
    return productImagesData[product.id] || [];
  }, [productImagesData, product.id]);
  
  
  const galleryImages = useMemo(() => {
    return allProductImages.filter(img => img.type !== 'front_preview');
  }, [allProductImages]);
  
  
  const frontPreviewImage = useMemo(() => {
    return allProductImages.find(img => img.type === 'front_preview');
  }, [allProductImages]);

  
  const previewImage = useMemo(() => {
    if (frontPreviewImage) return frontPreviewImage;
    
    return allProductImages.find(img => img.type === 'front') || allProductImages[0];
  }, [frontPreviewImage, allProductImages]);

  const handleProductClick = useCallback(() => {
    if (mode === 'preview' && onProductClick) {
      onProductClick();
    }
  }, [mode, onProductClick]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  const handleNextImage = useCallback(() => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [galleryImages]);

  const handlePrevImage = useCallback(() => {
    if (galleryImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  }, [galleryImages]);

  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: false,
    preventScrollOnSwipe: true
  });

  
  if (mode === 'preview') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -5 }}
        onClick={handleProductClick}
        className="bg-white rounded-2xl border border-[#e0d5c5] overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full w-full"
      >
        <div className="p-4 sm:p-5 h-full flex flex-col">
          <div className="w-full h-48 sm:h-56 md:h-64 mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl relative">
            <ProductImages 
              productId={product.id}
              productName={product.name}
              categoryName={category?.name}
              onImageClick={handleProductClick}
              mode="preview"
              frontPreviewImage={previewImage}
              galleryImages={galleryImages}
            />
          </div>
          
          <div className="flex-grow">
            <h4 className="text-base sm:text-lg font-semibold text-[#3c2d1e] mb-1 sm:mb-2 line-clamp-2">
              {product.name}
            </h4>
            <p className="text-[#5a4a3a] text-xs sm:text-sm line-clamp-3 leading-relaxed">
              {product.description || 'Натуральный продукт высшего качества'}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl w-full max-w-full"
      >
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Левая колонка - изображения */}
            <div 
              {...swipeHandlers} 
              className="relative overflow-hidden"
              onMouseEnter={() => setShowImageNavigation(true)}
              onMouseLeave={() => setShowImageNavigation(false)}
            >
              <div className="w-full max-w-full">
                <ProductImages 
                  productId={product.id}
                  productName={product.name}
                  categoryName={category?.name}
                  onImageClick={openModal}
                  onThumbnailClick={handleThumbnailClick}
                  currentImageIndex={currentImageIndex}
                  mode="detail"
                  frontPreviewImage={previewImage}
                  galleryImages={galleryImages}
                />
              </div>
            </div>

            {/* Правая колонка - информация */}
            <div className="lg:pl-0">
              <ProductInfo 
                product={product}
                category={category}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Модальное окно для изображений */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={galleryImages}
        currentIndex={currentImageIndex}
        productName={product.name}
      />
    </>
  );
};

export default Product;