import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig';

export const fetchOrderData = async (userId) => {
  try {
    const q = query(collection(db, 'orders'), where('user_id', '==', userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('주문 데이터 조회 오류:', error);
  }
};
