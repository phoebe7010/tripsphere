import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const SwiperComponent = ({ products }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 -left-4 z-1 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full p-2">
        <BiChevronLeft className="size-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-4 z-1 transform -translate-y-1/2 bg-white text-black shadow-lg rounded-full p-2">
        <BiChevronRight className="size-6" />
      </button>
    </div>
  );
};

export default SwiperComponent;
