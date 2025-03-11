import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const fetchUserData = async uid => {
  if (!uid) return;

  const userDoc = doc(db, 'users', uid);
  const userSnap = await getDoc(userDoc);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.log('유저 정보 fetch error');
  }
};
