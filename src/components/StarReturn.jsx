import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const starReturn = ratingScore => {
  const rating = Math.floor(ratingScore * 10);
  const star = Math.floor(rating / 10); // 정수 별 개수
  const half = rating % 10 >= 5; // 반개 별 여부 (5 이상이면 true)

  return (
    <>
      {/* 정수 개수만큼 별 생성 */}
      {[...Array(star)].map((_, i) => (
        <FaStar key={i} />
      ))}

      {/* 반 개 별 추가 (조건부 렌더링) */}
      {half && <FaStarHalfAlt />}
    </>
  );
};

export default starReturn;
