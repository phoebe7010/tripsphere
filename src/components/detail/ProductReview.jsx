import ReviewItem from '../ReviewItem';

const reviews = [
  {
    id: 1,
    name: '김혜란',
    date: '2025년 3월 10일',
    review: '정말 좋아요',
    image: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
  },
  {
    id: 2,
    name: '박세진',
    date: '2025년 3월 10일',
    review: '깔끔해요',
    image: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
  },
  {
    id: 3,
    name: '형주희',
    date: '2025년 3월 10일',
    review: '멋져요',
    image: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
  },
  {
    id: 4,
    name: '최승이',
    date: '2025년 3월 10일',
    review: '좋아요',
    image: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
  },
];

const ProductReview = () => {
  return (
    <div>
      <div className="flex space-y-6 gap-10 max-w-[1200px] mx-auto py-[20px] px-[20px]">
        <div className="w-full">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">리뷰</h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              방문자들의 솔직한 리뷰
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <div className="divide-y divide-gray-100">
              <div className="py-4">
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
