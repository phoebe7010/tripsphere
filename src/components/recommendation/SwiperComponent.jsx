import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const SwiperComponent = ({ products }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      swiperInstance.on('slideChange', () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);

  const handlePrev = () => {
    if (!isBeginning) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!isEnd) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => {
          swiperRef.current = { swiper };
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          });
        }}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={handlePrev}
        disabled={isBeginning}
        className={`absolute top-1/2 -left-4 z-1 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full p-2 ${
          isBeginning ? 'opacity-0' : ''
        }`}>
        <BiChevronLeft className="size-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={isEnd}
        className={`absolute top-1/2 -right-4 z-1 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full p-2 ${
          isEnd ? 'opacity-0' : ''
        }`}>
        <BiChevronRight className="size-6" />
      </button>
    </div>
  );
};

export default SwiperComponent;
