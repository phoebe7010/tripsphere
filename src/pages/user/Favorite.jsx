import { useEffect, useState } from 'react';
import Pagination from '../../components/productlist/Pagination';
import PageHeader from '../../components/common/PageHeader';
import ProductCard from '../../components/favorite/ProductCard';

import { onAuthStateChanged } from 'firebase/auth';
import { useFavoriteAccommData } from '../../hooks/useFavoriteData';
import { auth } from '../../firebase/firebaseConfig';

// [250311] hrkim: firebase 사용하면, users 테이블의 wishlist에 있는 accommodation_id 리스트를 이용하여 아래 정보를 조회해주세요
// const favoriteInfo = [
//   {
//     id: '1',
//     type: 'pension',
//     name: '양평 독채 풀빌라 스테이호은',
//     check_in: '2025.03.11',
//     check_out: '2025.03.13',
//     description:
//       '예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. 호젓한 은신처를 의미하는 호은.',
//     original_price: '80000',
//     discount_rate: '20',
//     final_price: '64000',
//     images: [
//       'https://ak-d.tripcdn.com/images/220713000000ubfbb2422_R_600_400_R5.webp',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
//       'https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500',
//     ],
//     host: {
//       name: '홍길동',
//       experience: '3',
//       contact: '010-1234-5678',
//     },
//     services: ['wifi', 'parking', 'tv', 'breakfast', 'barbecue'],
//     location: {
//       latitude: '33.450701',
//       longitude: '126.570667',
//       place_name: '양평군, 경기도, 한국',
//     },
//   },
//   {
//     id: '2',
//     type: 'pension',
//     name: '양평 독채 풀빌라 스테이호은',
//     check_in: '2025.03.11',
//     check_out: '2025.03.13',
//     description:
//       '예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. 호젓한 은신처를 의미하는 호은.',
//     original_price: '80000',
//     discount_rate: '20',
//     final_price: '64000',
//     images: [
//       'https://ak-d.tripcdn.com/images/220713000000ubfbb2422_R_600_400_R5.webp',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
//       'https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500',
//       'https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500',
//     ],
//     host: {
//       name: '홍길동',
//       experience: '3',
//       contact: '010-1234-5678',
//     },
//     services: ['wifi', 'parking', 'tv', 'breakfast', 'barbecue'],
//     location: {
//       latitude: '33.450701',
//       longitude: '126.570667',
//       place_name: '양평군, 경기도, 한국',
//     },
//   },
// ];

const breadcrumb = [
  { link: '/', text: '홈' },
  { link: '/favorite', text: '찜 목록' },
];

const Favorite = () => {
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchButton = () => {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const { data, isLoading, error } = useFavoriteAccommData(user?.uid);

  useEffect(() => {
    if (data) {
      console.log('찜 목록 내역:', JSON.stringify(data));
    }
  }, [data]);

  if (isLoading) return <>로딩 중..</>;
  if (error) return <>오류</>;

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <PageHeader
        title="찜 목록"
        breadcrumb={breadcrumb}
        hasBackButton={true}
      />

      {/* 검색영역  */}
      <div className="my-8 flex justify-end rounded-2xl">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={handleSearchInput}
          className="input border   border-blue-400 p-4 rounded-l-2xl "
        />
        <button
          type="submit"
          onClick={handleSearchButton}
          className="btn">
          검색
        </button>
      </div>

      {/* 찜목록 출력 */}
      <div className="mb-10 grid grid-cols-4 gap-10">
        {data &&
          data.map((favorite, index) => (
            <ProductCard
              key={index}
              favorite={favorite}
            />
          ))}
      </div>

      <Pagination data={data} />
    </div>
  );
};

export default Favorite;
