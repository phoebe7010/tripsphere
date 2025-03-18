import { useQuery } from '@tanstack/react-query';
import { getPoints } from '../services/pointService';

export const usePointData = (userId) => {
  return useQuery({
    queryKey: ['points'],
    queryFn: () => getPoints(userId),
    enabled: !!userId,
  });
};
