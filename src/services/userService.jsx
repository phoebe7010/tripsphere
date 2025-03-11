import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// 사용자 정보 쿼리
export const fetchUserData = async (uid) => {
  if (!uid) return;

  const userDoc = doc(db, 'users', uid);
  const userSnap = await getDoc(userDoc);

  return userSnap.exists() ? userSnap.data() : null;
};
