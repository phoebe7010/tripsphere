import { useState } from 'react';
import ProductHeader from '../../components/detail/ProductHeader';
import ProductGallery from '../../components/detail/ProductGallery';
import ProductDetails from '../../components/detail/ProductDetails';
import ProductLocation from '../../components/detail/ProductLocation';
import ProductReview from '../../components/detail/ProductReview';

const accommodation = {
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
};

const reviews = [
  {
    id: 'review1',
    accommodation_id: '1',
    user_id: 'user1',
    rating: '5',
    comment: '정말 좋아요',
    created_at: '2025.03.11',
    user_info: {
      name: '김혜란',
      profile_image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    },
  },
  {
    id: 'review2',
    accommodation_id: '1',
    user_id: 'user2',
    rating: '5',
    comment: '정말 좋아요',
    created_at: '2025.03.11',
    user_info: {
      name: '박세진',
      profile_image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    },
  },
  {
    id: 'review3',
    accommodation_id: '1',
    user_id: 'user3',
    rating: '4.5',
    comment: '정말 좋아요',
    created_at: '2025.03.11',
    user_info: {
      name: '형주희',
      profile_image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    },
  },
  {
    id: 'review4',
    accommodation_id: '1',
    user_id: 'user4',
    rating: '3',
    comment: '정말 좋아요',
    created_at: '2025.03.11',
    user_info: {
      name: '최승이',
      profile_image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    },
  },
  {
    accommodation_id: '1',
    user_id: 'user5',
    rating: '4',
    comment: '정말 좋아요',
    created_at: '2025.03.11',
    user_info: {
      name: '전윤교',
      profile_image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    },
  },
];

const ProductDetail = () => {
  const [productId, setProductId] = useState(0);

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      {/* 상품 헤더 */}
      <ProductHeader
        product={accommodation}
        productId={productId}
      />

      {/* 상품 갤러리 */}
      <ProductGallery product={accommodation} />

      {/* 상품 상세 정보 */}
      <ProductDetails product={accommodation} />

      {/* 위치 */}
      <ProductLocation product={accommodation} />

      {/* 리뷰 */}
      <ProductReview reviews={reviews} />
    </div>
  );
};

export default ProductDetail;
