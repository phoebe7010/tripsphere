import { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import { useReviewData } from '../../hooks/useReviewData';

const ProductReview = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const { data, isLoading, error, refetch } = useReviewData(productId);

  useEffect(() => {
    if (data) {
      setReviews(data);
    }
  }, [data]);

  if (isLoading) return <>로딩 중...</>;
  if (error) return <>에러</>;

  const handleReFetch = async () => {
    console.log('리로드');
    await refetch();
  };

  return (
    <div>
      <div className="flex space-y-6 gap-10 max-w-[1200px] mx-auto py-[20px] px-[20px]">
        <div className="w-full">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
              리뷰 ({reviews?.length})
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              방문자들의 솔직한 리뷰
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <div className="divide-y divide-gray-100">
              <div className="py-4">
                <ReviewForm
                  handleNewReview={handleReFetch}
                  productId={productId}
                />

                <ul className="list">
                  <ReviewItem reviews={reviews} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
