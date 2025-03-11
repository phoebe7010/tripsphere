import { useQuery } from '@tanstack/react-query';
import { fetchAccomData } from '../services/productService.';

// 숙소 정보 조회
export const useAccomData = (accomId) => {
  return useQuery({
    queryKey: ['accommodation', accomId],
    queryFn: () => fetchAccomData(accomId),
    enabled: !!accomId,
  });
};
