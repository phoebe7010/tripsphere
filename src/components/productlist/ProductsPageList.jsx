import { useEffect, useState } from 'react';
// import { fetchAccomListData } from '../../services/productListService';
import { useSearchParams } from 'react-router-dom';
import { getAllAccomData } from '../../services/productListService';
import useFilterStore from '../../stores/useFilterStore';
import usePriceStore from '../../stores/usePriceStore';
import useProductListStore from '../../stores/useProductListStore';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ProductsPageList = () => {
  // 팀장님
  const {
    selectedCity,
    selectedSubCity,
    adultCount,
    childrenCount,
    checkIn,
    checkOut,
  } = useFilterStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const initPageNumber = Number(searchParams.get('page')) || 1;
  const { range, rangeLimit } = usePriceStore();
  const { list, setList, resetList } = useProductListStore();

  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('초기 로딩');

    let listInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getAllAccomData(useFilterStore);
        setList(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    listInfo();
  }, []);

  useEffect(() => {
    console.log('도시값이나 체크인,체크아웃 시간이 변경됨');

    console.log('로딩 여부 : ', loading);
    console.log('리스트 길이 : ', list.length);
    console.log('리스트 정보 : ', list);

    let listInfo = async () => {
      try {
        // 데이터 로딩이 페이지 로딩마다 이루어지는데
        // 내가 원하는 데이터 로딩은
        // Product에서 표출할 상품 목록의 정보가 없을 때,
        // 지역 상세정보와 일자가 변경됐을때 (DB에서 쿼리를 다시 해야하는 상황)
        // 이외에는 불러온 데이터의 필터링만 조절해서 수정하는걸 원함.
        //  -> 페이지네이션을 통한 url 변경시 list 길이가 0으로 초기화됨.
        //  useState 사용하면서 발생한 부분이라고 사료됨.
        // 현재 내 역량수준에 맞춰서 시간내에 기능 개발을 우선해야하므로,
        // 이부분을 지금 당장 해결 할 필요는 없음

        // 그 외에도 필터링 선택을 해야함
        // 상품목록에서 상품의 리뷰 평점을 표출 해야하고. (별점 순으로 )

        // console.log('데이터 로딩 시작');
        setLoading(true);
        setError(null);

        const data = await getAllAccomData(useFilterStore);
        // console.log('데이터 로딩 종료');
        setList(data);
        // console.log(data);
        // console.log('데이터 삽입');
      } catch (error) {
        if (error !== null) console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // if (list.length <= 0 || list === null) {
    listInfo();
    // }
  }, [selectedCity, selectedSubCity, checkIn, checkOut]);

  if (loading) return <div>로딩중입니다...</div>;
  if (error)
    return (
      <div>
        에러가 발생했습니다.
        <br /> {error}
        <br /> {error.message}
      </div>
    );
  if (list.length <= 0) return <div>조건에 맞는 숙소가 없습니다.</div>;

  return (
    <>
      <ul>
        {list
          .filter(
            (_, index) =>
              (initPageNumber - 1) * 10 <= index &&
              index < (initPageNumber - 1) * 10 + 10,
          )
          .map((product, index, array) => (
            <ProductCard
              key={index}
              index={index}
              product={product}
              arrayLength={array.length}
            />
          ))}
      </ul>
      <Pagination data={list} />
    </>
  );
};

export default ProductsPageList;
