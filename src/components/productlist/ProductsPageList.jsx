import { useEffect, useState } from 'react';
import { fetchAccomListData } from '../../services/productListService';
import useFilterStore from '../../stores/useFilterStore';
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

  const { range, rangeLimit } = usePriceStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 박세진
  const [list, setList] = useState([]);

  const [selectPageNum, setSelectPageNum] = useState(1);

  useEffect(() => {
    let listInfo = async () => {
      try {
        console.log('데이터 로딩 시작');
        setLoading(true);
        setError(null);

        const data = await fetchAccomListData();
        console.log('데이터 로딩 종료');
        setList(data);
        console.log(data);
        console.log('데이터 삽입');
      } catch (error) {
        if (error !== null) console.error(error);
      } finally {
        setLoading(false);
      }
    };
    listInfo();

    // listInfo().then((ele) => {
    //   setList(ele);
    // });
  }, [
    selectedCity,
    selectedSubCity,
    adultCount,
    childrenCount,
    checkIn,
    checkOut,
    range.min,
    range.max,
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

  return (
    <>
      {/* {list.length} */}
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
    </>
  );
};

export default ProductsPageList;
