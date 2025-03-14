import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

// 장바구니 추가
export const addCart = async (accommodationId) => {
  const user = auth.currentUser;

  if (!user) {
    console.log('사용자가 없습니다.');
    return;
  }

  try {
    const userDocRef = doc(db, 'users', user.uid);

    await updateDoc(userDocRef, {
      cart: arrayUnion(accommodationId),
    });
  } catch (error) {
    console.error('장바구니 항목 추가 오류: ' + error.message);
  }
};
