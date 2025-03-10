import PageHeader from '../../components/common/PageHeader';
import Pagination from '../../components/productlist/Pagination';
import ProductCard from '../../components/productlist/ProductCard';
import SideFilter from '../../components/productlist/SideFilter';

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
    rating: 4.8,
    reviews_count: 15,
  },
];

const breadcrumb = [
  { link: '/', text: '홈' },
  { link: '/products', text: '여행 검색 결과 목록' },
];

const ProductList = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <PageHeader
        title="여행 패키지 검색 결과"
        breadcrumb={breadcrumb}
      />

      <div
        id="container"
        className="flex items-start gap-10">
        <SideFilter />

        <div className="content flex-1">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              index={index}
              product={product}
            />
          ))}

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
