import { useQuery } from '@tanstack/react-query';
import { fetchAllReviewData } from '../services/reviewService';

// 특정 숙소에 대한 리뷰 전체 내용 조회
export const useReviewData = (accomId) => {
  return useQuery({
    queryKey: ['review', accomId],
    queryFn: () => fetchAllReviewData(accomId),
    enabled: !!accomId,
  });
};
