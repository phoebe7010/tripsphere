import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCartItem } from '../services/cartService';

// 장바구니에 항목 추가
export const useAddCarts = (userId, showToast) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cartItem) => addCartItem(cartItem),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', userId]);
      showToast('success', '장바구니에 해당 항목을 추가했습니다.');
    },
    onError: () => {
      showToast('error', '장바구니에 항목 추가가 실패했습니다.');
    },
  });
};
