import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/detail/ProductDetails';
import ProductGallery from '../../components/detail/ProductGallery';
import ProductHeader from '../../components/detail/ProductHeader';
import ProductLocation from '../../components/detail/ProductLocation';
import ProductReview from '../../components/detail/ProductReview';
import { useAccomData } from '../../hooks/useProductData';
import { useReviewData } from '../../hooks/useReviewData';

const ProductDetail = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  // const [productId, setProductId] = useState('fhxC2un7evQDrgz0wWuP');

  // useEffect(() => {
  //   setProductId(id);
  // }, [id]);

  // 숙소 정보
  const {
    data: accommodation,
    isLoading: isAccommodationLoading,
    error: accomodationError,
  } = useAccomData(productId);

  // 리뷰 정보
  const {
    data: reviews,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useReviewData(productId);

  if (isAccommodationLoading && isReviewLoading) return <>로딩 중...</>;
  if (accomodationError && reviewError) return <>에러</>;

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
