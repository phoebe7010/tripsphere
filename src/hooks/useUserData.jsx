import { useQuery } from '@tanstack/react-query';
import useAuthStore from '../stores/useAuthStore';
import { fetchUserData } from '../services/userService';

// 사용자 정보 조회
export const useUserData = () => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: ['user', user?.uid],
    queryFn: () => fetchUserData(user.uid),
    enabled: !!user?.uid,
  });
};
