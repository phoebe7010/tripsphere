import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { fetchAccomData } from './productService.';

// 주문 내역 조회
export const getOrderData = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.log('사용자가 없습니다.');
    return;
  }

  try {
    const q = query(collection(db, 'orders'), where('user_id', '==', user.uid));
    const querySnapShot = await getDocs(q);

    return querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log('주문 내역 조회 오류', error);
  }
};

// 주문 내역 숙소 조회
export const getOrderAccomm = async () => {
  const orderData = await getOrderData();

  const accomPromises = orderData.map(async (item) => {
    return fetchAccomData(item.accommodation_id);
  });

  const accommodations = await Promise.all(accomPromises);

  return accommodations.filter((accom) => accom !== null);
};
