import PageHeader from '../../components/productlist/PageHeader';
import Pagination from '../../components/productlist/Pagination';
import ProductCard from '../../components/productlist/ProductCard';
import SideFilter from '../../components/productlist/SideFilter';

const products = [
  {
    name: '양평 독채 풀빌라 스테이호은',
    totalPrice: '120000',
    productPrice: '40000',
    serviceFee: '80000',
    discount: '40',
    location: '양평군, 경기도, 한국',
    images: [
      {
        src: 'https://imgur.com/a/PpgWsfW',
        // src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://imgur.com/a/r6B59wX',
        // src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],
    roomConfiguration: '최대 인원 8명침실 2개침대 2개욕실 2개',
    type: '양평군, 한국의 별장 전체',
    host: {
      name: '홍길동',
      career: '3',
    },
  },

  {
    name: '양평 독채 풀빌라 스테이호은',
    totalPrice: '120000',
    productPrice: '40000',
    serviceFee: '80000',
    discount: '40',
    location: '양평군, 경기도, 한국',
    images: [
      {
        src: 'https://i.imgur.com/ni513Ct.jpeg',
        // src: 'https://imgur.com/a/PpgWsfW',
        // src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://i.imgur.com/q8ifdCe.jpeg',
        // src: 'https://imgur.com/a/r6B59wX',
        // src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    description: `예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.`,
    services: [
      { icon: 'tv', text: '최고의 전망' },
      { icon: 'map', text: '최고의 위치' },
    ],
    roomConfiguration: '최대 인원 8명침실 2개침대 2개욕실 2개',
    type: '양평군, 한국의 별장 전체',
    host: {
      name: '홍길동',
      career: '3',
    },
  },
];

const ProductList = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <PageHeader />

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
