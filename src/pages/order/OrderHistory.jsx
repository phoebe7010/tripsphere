import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderList from '../../components/order/orderList';

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

const OrderHistory = () => {
  const navigate = useNavigate();

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

      {/* 주문 내역 */}
      <OrderList data={orders} />
    </div>
  );
};

export default OrderHistory;
