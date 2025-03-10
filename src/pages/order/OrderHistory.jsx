import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCalendarAlt, BiUser, BiChevronRight } from 'react-icons/bi';

const OrderHistory = () => {
  const navigate = useNavigate();

  const orders = [
    {
      reservationNumber: '12121212',
      reservationDate: '2024년 12월 20일',
      hotelName: '서울 코리아나호텔',
      price: '1,200,000원',
      adultCount: 2,
      childCount: 2,
      checkIn: '2024년 04월 01일',
      checkOut: '2024년 04월 04일',
      imageUrl:
        'https://ak-d.tripcdn.com/images/220713000000ubfbb2422_R_600_400_R5.webp',
    },
    {
      reservationNumber: '12121212',
      reservationDate: '2024년 12월 20일',
      hotelName: '아난티 앳 부산 코브',
      price: '1,500,000원',
      adultCount: 2,
      childCount: 1,
      checkIn: '2024년 04월 01일',
      checkOut: '2024년 04월 04일',
      imageUrl:
        'https://ak-d.tripcdn.com/images/02068120009p1pmjr0B63_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F',
    },
  ];

  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <div className="flex">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
          className="text-base/7 font-semibold text-gray-900 mb-10 pr-3 hover:cursor-pointer">
          마이페이지
        </button>
        <h2 className="text-base/7 font-semibold text-gray-900 mb-10 pr-3">
          &gt;
        </h2>
        <h2 className="text-base/7 font-semibold text-gray-900 mb-10">
          내 예약
        </h2>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {orders.map((order, index) => (
          <li
            className="list-row flex-col flex"
            key={index}>
            <div className="py-2 border-b border-stone-200 flex justify-between items-center">
              <div>{order.reservationDate}</div>

              <button
                type="button"
                onClick={() => navigate('/product/0')}>
                <BiChevronRight className="size-6" />
              </button>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-6">
                <img
                  className="size-24 rounded-box"
                  src={order.imageUrl}
                  alt={order.hotelName}
                />

                <div className="flex flex-col">
                  <h2 className="text-lg font-bold">{order.hotelName}</h2>
                  <div className="mb-4 text-xs uppercase opacity-60">
                    예약번호 : {order.reservationNumber}
                  </div>

                  <div className="flex-col flex gap-[4px] mt-auto">
                    <div className="flex items-center gap-2">
                      <BiUser />
                      <div className="mr-1 text-sm">
                        인원수 {order.adultCount + order.childCount}
                      </div>
                      <div>
                        (성인: {order.adultCount}명 소아: {order.childCount}명)
                      </div>
                    </div>

                    <div className="flex items-center gap-10">
                      <div className="flex items-center gap-2">
                        <BiCalendarAlt />
                        <span>체크인:</span> <span>{order.checkIn}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <BiCalendarAlt />
                        <span>체크아웃:</span> <span>{order.checkOut}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>{order.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
