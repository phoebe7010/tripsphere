import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const fetchOrderData = async (userId) => {
  try {
    const q = query(collection(db, 'orders'), where('user_id', '==', userId));
    const querySnapshot = await getDocs(q);

    const orders = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot) => {
        const orderData = docSnapshot.data();
        const accommodationRef = doc(
          db,
          'accommodations',
          orderData.accommodation_id,
        );
        const accommodationSnap = await getDoc(accommodationRef);

        return {
          id: docSnapshot.id,
          ...orderData,
          images: accommodationSnap.exists()
            ? accommodationSnap.data().images
            : null,
        };
      }),
    );

    return orders;
  } catch (error) {
    console.error('주문 데이터 조회 오류:', error);
    return [];
  }
};
