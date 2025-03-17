import { useQuery } from '@tanstack/react-query';
// import { fetchAccomListData } from '../services/productListService';
import { getAllAccomData } from '../services/productListService';

// 숙소 리스트 조회
export const useAccomListData = (accomRegion, priceRange) => {
  return useQuery({
    queryKey: ['accommodation', accomRegion, priceRange],
    // queryFn: () => fetchAccomListData(accomRegion, priceRange),
    queryFn: () => getAllAccomData(accomRegion, priceRange),
    enabled: [!!accomRegion, !!priceRange],
  });
};
