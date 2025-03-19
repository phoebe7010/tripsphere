
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../firebase/firebaseConfig';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import { fetchOrderData } from '../services/orderService';

// Timestamp 변환
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.seconds) return '날짜 없음';
  const date = new Date(timestamp.seconds * 1000);
  return date.toISOString().split('T')[0];
};

// 유저의 주문 내역 조회
export const fetchUserOrders = async (userId) => {
  if (!userId) return [];

  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('user_id', '==', userId));
  const ordersSnapshot = await getDocs(q);

  const orders = await Promise.all(
    ordersSnapshot.docs.map(async (orderDoc) => {
      const orderData = orderDoc.data();
      const formattedOrder = {
        ...orderData,
        order_date: formatDate(orderData.order_date),
        check_in: formatDate(orderData.check_in),
        check_out: formatDate(orderData.check_out),
        guest_count: orderData.guest_count || { adults: 0, children: 0 },
      };

      // 숙소 정보 불러오기
      const accomRef = doc(db, 'accommodations', orderData.accommodation_id);
      const accomSnap = await getDoc(accomRef);

      return {
        id: orderDoc.id,
        ...formattedOrder,
        accommodation: accomSnap.exists() ? accomSnap.data() : null,
      };
    }),
  );

  return orders;
};

// 주문내역 조회
export const useUserOrders = (userId) => {
  return useQuery({
    queryKey: ['orders', userId],
    queryFn: () => fetchUserOrders(userId),
    enabled: !!userId,
  });
};

// 주문 취소 (firebase)
export const cancelUserOrder = async ({
  orderId,
  userId,
  usedPoints,
  reason,
}) => {
  const orderRef = doc(db, 'orders', orderId);

  // 주문 상태 업데이트
  await updateDoc(orderRef, {
    payment_status: '결제 취소',
    cancel_reason: reason,
  });

  // 포인트 환불 처리
  if (usedPoints > 0) {
    await addDoc(collection(db, 'points'), {
      user_id: userId,
      points: usedPoints,
      type: 'refund',
      reason: `주문 취소 - ${reason}`,
      created_at: new Date(),
    });

    // users 컬렉션의 포인트 업데이트
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const newPoints = (userData.points || 0) + usedPoints;

      await updateDoc(userRef, {
        points: newPoints, // 유저의 포인트에 환불된 포인트 추가
      });
    }
  }
};

// 주문 취소 (UI)
export const useCancelOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelUserOrder,
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries(['orders', userId]);
    },
  });
};

// 숙소 정보 조회
export const useOrderData = (userId) => {
  return useQuery({
    queryKey: ['orders', userId],
    queryFn: () => fetchOrderData(userId),
    enabled: !!userId,
  });
};
