import React from 'react';
import Filter from './Filter';

const Banner = () => {
  return (
    <div className="flex min-h-[calc(100vh-120px)] flex-col justify-center px-6 py-12 lg:px-8 bg-[url(/banner.jpg)]">
      <div className="mx-auto max-w-[1000px]">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="rounded-full px-3 py-1 text-sm text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            TRIPSPHERE와 함께하는 특별한 여행{' '}
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white ">
            TRIPSPHERE와 함께 꿈의 여행을 떠나세요
          </h1>

          <p className="mt-8 text-sm font-medium text-gray-50">
            지금 예약하고, 평생 잊지 못할 여행을 시작하세요. 다양한 여행지,
            특별한 경험이 여러분을 기다리고 있습니다. 지금 바로 여행 예약을 통해
            최고의 여행을 만나보세요!
          </p>

          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Banner;
