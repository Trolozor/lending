import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

const ImageModal = ({ 
  isOpen, 
  onClose, 
  images = [], 
  currentIndex = 0,
  productName 
}) => {
  const [modalImageIndex, setModalImageIndex] = useState(currentIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [lastTouchTime, setLastTouchTime] = useState(0);

  const imageContainerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setModalImageIndex(currentIndex);
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
      setLastTouchTime(0);
    }
  }, [isOpen, currentIndex]);

  
  const handleTouchStart = useCallback((e) => {
    if (zoomLevel > 1) return; 
    
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    });
  }, [zoomLevel]);

  const handleTouchMove = useCallback((e) => {
    if (zoomLevel > 1 || !touchStart) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    
    
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  }, [zoomLevel, touchStart]);

  const handleTouchEnd = useCallback((e) => {
    if (zoomLevel > 1 || !touchStart) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaTime = Date.now() - touchStart.time;
    
    
    if (Math.abs(deltaX) > 50 && deltaTime < 300) {
      if (deltaX > 0) {
        
        setModalImageIndex(prev => 
          prev === 0 ? images.length - 1 : prev - 1
        );
      } else {
        
        setModalImageIndex(prev => 
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
    }
    
    setTouchStart(null);
  }, [zoomLevel, touchStart, images.length]);

  
  const handleDoubleTap = useCallback((e) => {
    e.preventDefault();
    
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTouchTime;
    
    if (timeDiff < 300) {
      
      if (zoomLevel === 1) {
        
        const rect = imageContainerRef.current?.getBoundingClientRect();
        if (rect) {
          const touch = e.touches ? e.touches[0] : e;
          const tapX = touch.clientX - rect.left;
          const tapY = touch.clientY - rect.top;
          
          const containerCenterX = rect.width / 2;
          const containerCenterY = rect.height / 2;
          
          const newZoom = 2;
          const scaleChange = newZoom - zoomLevel;
          
          
          setImagePosition({
            x: -((tapX - containerCenterX) * (scaleChange / newZoom)),
            y: -((tapY - containerCenterY) * (scaleChange / newZoom))
          });
          
          setZoomLevel(newZoom);
        }
      } else {
        
        setZoomLevel(1);
        setImagePosition({ x: 0, y: 0 });
      }
      
      setLastTouchTime(0);
    } else {
      
      setLastTouchTime(currentTime);
    }
  }, [zoomLevel, lastTouchTime]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    if (!isOpen) return;
    
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.max(1, Math.min(4, zoomLevel + delta));
    
    if (newZoom !== zoomLevel) {
      const rect = imageContainerRef.current?.getBoundingClientRect();
      if (rect) {
        const containerCenterX = rect.width / 2;
        const containerCenterY = rect.height / 2;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const scaleChange = newZoom - zoomLevel;
        
        setImagePosition(prev => ({
          x: prev.x - (mouseX - containerCenterX) * (scaleChange / newZoom),
          y: prev.y - (mouseY - containerCenterY) * (scaleChange / newZoom)
        }));
      }
      
      setZoomLevel(newZoom);
    }
  }, [isOpen, zoomLevel]);

  const handleModalClick = useCallback((e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  }, [onClose]);

  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 1, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  }, []);

  
  const handleMouseDown = useCallback((e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  }, [zoomLevel, imagePosition]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging && zoomLevel > 1) {
      const x = e.clientX - dragStart.x;
      const y = e.clientY - dragStart.y;
      setImagePosition({ x, y });
    }
  }, [isDragging, dragStart, zoomLevel]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  
  const handleTouchStartDrag = useCallback((e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - imagePosition.x,
        y: touch.clientY - imagePosition.y
      });
    }
  }, [zoomLevel, imagePosition]);

  const handleTouchMoveDrag = useCallback((e) => {
    if (isDragging && zoomLevel > 1) {
      const touch = e.touches[0];
      const x = touch.clientX - dragStart.x;
      const y = touch.clientY - dragStart.y;
      setImagePosition({ x, y });
    }
  }, [isDragging, dragStart, zoomLevel]);

  useEffect(() => {
    const handleGlobalWheel = (e) => {
      if (isOpen && imageContainerRef.current?.contains(e.target)) {
        handleWheel(e);
      }
    };

    document.addEventListener('wheel', handleGlobalWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleGlobalWheel);
    };
  }, [isOpen, handleWheel]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleModalClick}
        ref={modalRef}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-auto max-w-7xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 cursor-pointer right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div 
            className="relative w-full h-auto lg:h-[80vh] overflow-hidden rounded-2xl"
            ref={imageContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={(e) => {
              if (zoomLevel > 1) {
                handleTouchStartDrag(e);
              } else {
                handleTouchStart(e);
                
                handleDoubleTap(e);
              }
            }}
            onTouchMove={(e) => {
              if (zoomLevel > 1) {
                handleTouchMoveDrag(e);
              } else {
                handleTouchMove(e);
              }
            }}
            onTouchEnd={(e) => {
              setIsDragging(false);
              if (zoomLevel === 1) {
                handleTouchEnd(e);
              }
            }}
            onTouchCancel={() => setIsDragging(false)}
          >
            <div
              className="relative w-full h-auto lg:h-full flex items-center justify-center cursor-move"
              style={{
                transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                cursor: zoomLevel > 1 ? 'move' : 'default',
                transition: isDragging ? 'none' : 'transform 0.2s ease'
              }}
            >
              <img
                src={images[modalImageIndex]?.src}
                alt={`${productName} - изображение ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain select-none touch-none"
                draggable="false"
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-3">
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Уменьшить"
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={handleResetZoom}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm transition-colors cursor-pointer"
            >
              {zoomLevel.toFixed(1)}x
            </button>
            
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Увеличить"
              disabled={zoomLevel >= 4}
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {modalImageIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Миниатюры в модальном окне */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => {
                setModalImageIndex(index);
                setZoomLevel(1);
                setImagePosition({ x: 0, y: 0 });
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                modalImageIndex === index
                  ? 'border-white'
                  : 'border-transparent hover:border-white/50'
              }`}
              aria-label={`Миниатюра ${index + 1}`}
            >
              <img
                src={img.src}
                alt={`Миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;