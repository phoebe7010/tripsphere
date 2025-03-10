import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderState from '../../components/order/orderConfirmation/OrderConfirmState';
import SwiperComponent from '../../components/recommand/SwiperComponent';

const orderInfo = {
  order_id: 1,
  user_id: '주문한 사용자 UID',
  accommodation_id: '숙소 ID',
  check_in: '체크인 날짜',
  check_out: '체크아웃 날짜',
  guest_count: {
    adults: 2,
    children: 2,
  },
  total_price: 160000,
  payment_status:
    //'canceled',
    // 'pending',
    'completed', //결제 상태 (pending, completed, canceled)
  order_date: '주문 날짜',
  used_points: 160000,
};

const products = [
  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://i.imgur.com/ni513Ct.jpeg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://i.imgur.com/q8ifdCe.jpeg',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 4.8,
    reviews_count: 15,
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 4.6,
    reviews_count: 15,
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 4.2,
    reviews_count: 15,
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 3.8,
    reviews_count: 15,
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 3.3,
    reviews_count: 15,
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    type: 'pension',
    // location: '양평군, 경기도, 한국',
    location: {
      latitude: 123.123,
      longitude: 123.123,
      place_name: '양평군, 경기도, 한국',
    },
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    original_price: 120000,

    discount_rate: 40,
    final_price: 80000,

    check_in: '0900',
    check_out: '1200',
    capacity: {
      adult: 3,
      children: 3,
    },

    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],

    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        alt: 'Model wearing plain black basic tee.',
      },
    ],
    host: {
      name: '홍길동',
      experience: '호텔리어 15년 경력',
      contact: '010-0000-0000',
    },
    rating: 1.8,
    reviews_count: 15,
  },
];

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto py-[40px] flex flex-col justify-start items-center gap-12">
      <div className="flex flex-col items-center">
        {/* 주문 문구 */}
        <OrderState order={orderInfo} />

        <div className="flex justify-center gap-x-2">
          {/* 홈으로 이동*/}
          <div className="">
            <button
              type="submit"
              onClick={() => navigate('/')}
              className="rounded-md border-1 border-stone-300 px-3 py-2 text-sm font-semibold text-black hover:shadow-xs hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              홈으로 이동
            </button>
          </div>

          {/* 마이페이지로 이동 버튼 */}
          <div className="">
            <button
              type="submit"
              onClick={() => navigate('/mypage')}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              마이페이지로 이동
            </button>
          </div>
        </div>
      </div>

      {/* 추천 여행 숙소 */}
      <div className="w-full p-3 flex flex-col gap-3">
        <h3>추천 여행 숙소</h3>
        <div className="max-w-[1200px]">
          <SwiperComponent products={products} />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
