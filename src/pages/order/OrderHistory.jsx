import React from 'react';
import OrderList from '../../components/order/orderList';
import PageHeader from '../../components/common/PageHeader';

const orderInfo = [
  {
    id: '1',
    user_id: 'user1',
    accommodation_id: '1',
    check_in: '2025.03.11',
    check_out: '2025.03.13',
    guest_count: '4',
    adults: '3',
    children: '1',
    total_price: '10000',
    payment_status: 'completed',
    order_date: '2025.03.11',
    accommodation: {
      id: '1',
      type: 'pension',
      name: '양평 독채 풀빌라 스테이호은',
      check_in: '2025.03.11',
      check_out: '2025.03.13',
      description:
        '예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. 호젓한 은신처를 의미하는 호은.',
      original_price: '80000',
      discount_rate: '20',
      final_price: '64000',
      images: [
        'https://ak-d.tripcdn.com/images/220713000000ubfbb2422_R_600_400_R5.webp',
        'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
        'https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174',
        'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
        'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500',
      ],
      host: {
        name: '홍길동',
        experience: '3',
        contact: '010-1234-5678',
      },
      services: ['wifi', 'parking', 'tv', 'breakfast', 'barbecue'],
      location: {
        latitude: '33.450701',
        longitude: '126.570667',
        place_name: '양평군, 경기도, 한국',
      },
    },
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
      <OrderList orderInfo={orderInfo} />
    </div>
  );
};

export default OrderHistory;
