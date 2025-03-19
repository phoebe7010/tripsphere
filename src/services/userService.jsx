import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

// 사용자 정보 쿼리
export const fetchUserData = async (uid) => {
  if (!uid) return;

  const userDoc = doc(db, 'users', uid);
  const userSnap = await getDoc(userDoc);

  return userSnap.exists() ? userSnap.data() : null;
};

// 사용자 정보 수정 쿼리
export const editUserData = async (uid, updatedData) => {
  if (!uid) return;

  const userDoc = doc(db, 'users', uid);
  await updateDoc(userDoc, updatedData);
};

// 본인 인증 (비밀번호 확인)
export const verifyPassword = async (password) => {
  if (!auth.currentUser) return;

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password,
  );
  return reauthenticateWithCredential(auth.currentUser, credential);
};
