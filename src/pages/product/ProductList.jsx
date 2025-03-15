import { useEffect, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import Pagination from '../../components/productlist/Pagination';
import ProductCard from '../../components/productlist/ProductCard';
import SideFilter from '../../components/productlist/SideFilter';
import useFilterStore from '../../stores/useFilterStore';
import usePriceStore from '../../stores/usePriceStore';

const products = [
  {
    id: '1',
    type: 'pension',
    location: {
      place_name: '양평군, 경기도, 한국',
    },
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
    ],
  },
  {
    id: '2',
    type: 'pension',
    location: {
      place_name: '양평군, 경기도, 한국',
    },
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
    ],
  },
];

const breadcrumb = [
  { link: '/', text: '홈' },
  { link: '/products', text: '여행 검색 결과 목록' },
];

/*
const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/

const ProductList = () => {
  // 팀장님
  const {
    selectedCity,
    selectedSubCity,
    adultCount,
    childrenCount,
    checkIn,
    checkOut,
  } = useFilterStore();
  // 팀장님

  // 박세진
  const [list, setList] = useState([]);

  const { range, rangeLimit } = usePriceStore();

  useEffect(() => {
    // let listInfo = async () => {
    //   await fetchAccomListData();
    // };

    setList(products);
  }, []);

  // 숙소 정보
  // const {
  //   data: accomList,
  //   isLoading: regionsLoading,
  //   error: accomListError,
  // } = useRegionStore(regions);
  // 박세진

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <div className="inline-block py-4 px-4 bg-gray-100 rounded-md">
        selectedCity: {selectedCity} <br />
        selectedSubCity: {selectedSubCity} <br />
        adultCount: {adultCount} <br />
        childrenCount: {childrenCount} <br />
        checkIn: {checkIn} <br />
        checkOut: {checkOut}
      </div>

      <div className="inline-block py-4 px-4 bg-gray-100 rounded-md">
        nowMin: {range.min} <br />
        nowMax: {range.max} <br />
        rangeLow : {rangeLimit.min}
        <br />
        rangeHigh : {rangeLimit.max}
        <br />
      </div>

      <PageHeader
        title="여행 숙소 검색 결과"
        breadcrumb={breadcrumb}
      />

      <div
        id="container"
        className="flex items-start gap-10">
        <SideFilter />

        <article className="content flex-1">
          <ul>
            {list.map((product, index, array) => (
              <ProductCard
                key={index}
                index={index}
                product={product}
                arrayLength={array.length}
              />
            ))}
          </ul>

          <Pagination />
        </article>
      </div>
    </div>
  );
};

export default ProductList;
