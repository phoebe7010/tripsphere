import { useMutation } from '@tanstack/react-query';
import { addCart } from '../services/cartService';

// 장바구니 추가
export const useAddCart = (showToast) => {
  return useMutation({
    mutationFn: (accommodationId) => addCart(accommodationId),
    onSuccess: () => {
      showToast('success', '장바구니에 항목이 추가되었습니다.');
    },
    onError: (error) => {
      showToast('error', '장바구니에 항목 추가 오류');
      console.error('장바구니에 항목 추가 오류:', error.message);
    },
  });
};
