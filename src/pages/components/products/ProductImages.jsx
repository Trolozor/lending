// ProductImages.jsx
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductImages = ({ 
  productId, 
  productName,
  categoryName,
  onImageClick,
  onThumbnailClick,
  currentImageIndex = 0,
  mode = 'preview',
  frontPreviewImage,
  galleryImages = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const thumbnailsContainerRef = useRef(null);

  useEffect(() => {
    if (mode === 'preview' && frontPreviewImage) {
      setImagesLoaded(true);
    } else if (mode === 'detail' && galleryImages.length > 0) {
      setImagesLoaded(true);
    } else {
      setImagesLoaded(false);
    }
  }, [mode, frontPreviewImage, galleryImages]);

  useEffect(() => {
    if (mode === 'detail' && galleryImages.length > 1 && thumbnailsContainerRef.current) {
      updateScrollButtons();
    }
  }, [mode, galleryImages, currentImageIndex]);

  const updateScrollButtons = () => {
    const container = thumbnailsContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    );
  };

  const handleScroll = () => {
    updateScrollButtons();
  };

  const scrollThumbnails = (direction) => {
    const container = thumbnailsContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const getCurrentImage = useMemo(() => {
    if (mode === 'detail' && galleryImages.length > 0) {
      return galleryImages[currentImageIndex]?.src || '';
    }
    return null;
  }, [mode, galleryImages, currentImageIndex]);

  const getHoverImage = useMemo(() => {
    const rightImage = galleryImages.find(img => img.type === 'right');
    const backImage = galleryImages.find(img => img.type === 'back');
    return rightImage || backImage || frontPreviewImage;
  }, [galleryImages, frontPreviewImage]);

  if (!imagesLoaded) {
    return (
      <div className="w-full h-48 sm:h-56 md:h-72 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-300"></div>
          <span className="text-gray-400 text-sm">Загрузка...</span>
        </div>
      </div>
    );
  }

  if (mode === 'preview') {
    if (!frontPreviewImage) {
      return (
        <div className="w-full h-auto sm:h-56 md:h-72 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Нет изображения</span>
        </div>
      );
    }

    const hoverImage = getHoverImage;

    return (
      <div className="space-y-3 sm:space-y-4">
        {/* Основное изображение для превью */}
        <motion.div 
          className="w-full h-auto sm:h-56 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
          onClick={onImageClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={frontPreviewImage.src}
            alt={productName}
            className="w-full h-full object-cover absolute inset-0"
            style={{ 
              opacity: isHovered ? 0 : 1,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
            loading="lazy"
          />
          {hoverImage && hoverImage.src !== frontPreviewImage.src && (
            <img 
              src={hoverImage.src}
              alt={`${productName} - вид сбоку`}
              className="w-full h-full object-cover absolute inset-0"
              style={{ 
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
              loading="lazy"
            />
          )}
        </motion.div>
      </div>
    );
  }

  // Режим детального просмотра
  if (galleryImages.length === 0) {
    return (
      <div className="w-full h-48 sm:h-56 md:h-72 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Нет изображений</span>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Основное изображение для детального просмотра */}
      <motion.div 
        className="w-full cursor-zoom-in h-auto sm:h-56 md:h-190 rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer max-w-full"
        onClick={onImageClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={getCurrentImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 max-w-full"
          loading="lazy"
        />
      </motion.div>

      {/* Миниатюры для детального просмотра */}
      {galleryImages.length > 1 && (
        <div className="relative">
          {/* Кнопки прокрутки для десктопа */}
          <button
            onClick={() => scrollThumbnails('left')}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md transition-all ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          <button
            onClick={() => scrollThumbnails('right')}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md transition-all ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>

          {/* Контейнер миниатюр с кастомной прокруткой */}
          <div 
            ref={thumbnailsContainerRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-1 -mx-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
                background: transparent;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            
            {galleryImages.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => onThumbnailClick && onThumbnailClick(index)}
                className={`flex-shrink-0 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? 'border-[#d4af37] scale-105'
                    : 'border-transparent hover:border-gray-300'
                }`}
                aria-label={`Миниатюра ${index + 1}`}
                aria-current={currentImageIndex === index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={img.src}
                    alt={`Миниатюра ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 border-2 border-[#d4af37] rounded-lg sm:rounded-xl" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Индикаторы прокрутки для мобильных */}
          <div className="flex justify-center gap-1 mt-2 sm:hidden">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentImageIndex === index
                    ? 'bg-[#d4af37] w-4'
                    : 'bg-gray-300'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImages;