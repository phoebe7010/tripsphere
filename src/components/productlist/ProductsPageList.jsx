import { useEffect, useState } from 'react';
// import { fetchAccomListData } from '../../services/productListService';
import { useSearchParams } from 'react-router-dom';
import { getAllAccomData } from '../../services/productListService';
import useFilterStore from '../../stores/useFilterStore';
import usePageStore from '../../stores/usePageStore';
import usePriceStore from '../../stores/usePriceStore';
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

  const { pageIndex } = usePageStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const initPageNumber = Number(searchParams.get('page')) || 1;

  const { range, rangeLimit } = usePriceStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 박세진
  const [list, setList] = useState([]);
  /*
  const { data, isLoaindg, error } = useAccomListData();

  // 박세진
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('상품 목록' + JSON.stringify(data));
    setList(data);
*/

  useEffect(() => {
    let listInfo = async () => {
      try {
        // console.log('데이터 로딩 시작');
        setLoading(true);
        setError(null);

        const data = await getAllAccomData(useFilterStore);
        // console.log('데이터 로딩 종료');
        setList(data);
        // console.log(data);
        // console.log('데이터 삽입');

        console.log((initPageNumber - 1) * 10);
        console.log((initPageNumber - 1) * 10 + 10);
      } catch (error) {
        if (error !== null) console.error(error);
      } finally {
        setLoading(false);
      }
    };
    listInfo();
  }, [
    selectedCity,
    selectedSubCity,
    adultCount,
    childrenCount,
    checkIn,
    checkOut,
    range.min,
    range.max,
    searchParams,
  ]);

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
