import React from 'react';
import OrderList from '../../components/order/orderList';
import PageHeader from '../../components/common/PageHeader';

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

const breadcrumb = [
  { link: '/mypage', text: '마이페이지' },
  { link: '/orderhistory', text: '주문 내역' },
];

const OrderHistory = () => {
  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <PageHeader
        title="주문 내역"
        breadcrumb={breadcrumb}
        hasBackButton={true}
      />

      {/* 주문 내역 */}
      <OrderList data={orders} />
    </div>
  );
};

export default OrderHistory;
