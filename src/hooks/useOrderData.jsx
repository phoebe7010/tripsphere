import { useQuery } from '@tanstack/react-query';
import { fetchOrderData } from '../services/orderService';

// 숙소 정보 조회
export const useOrderData = (userId) => {
  return useQuery({
    queryKey: ['orders', userId],
    queryFn: () => fetchOrderData(userId),
    enabled: !!userId,
  });
};
