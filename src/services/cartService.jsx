import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// 장바구니에 이미 있는지 확인
const checkCartItemExist = async (cartId) => {
  const cartQuery = query(collection(db, 'carts'), where('id', '==', cartId));
  const cartSnapshot = await getDocs(cartQuery);
  return cartSnapshot;
};

// 장바구니 항목 업데이트
const updateCartItem = async (cartItem, cartId) => {
  const cartSnapshot = await checkCartItemExist(cartId);

  if (!cartSnapshot.empty) {
    const existingCartItem = cartSnapshot.docs[0];
    await updateDoc(doc(db, 'carts', existingCartItem.id), cartItem);
  }
};

// 장바구니 항목 추가
const addNewCartItem = async (cartItem, cartId) => {
  await addDoc(collection(db, 'carts'), {
    ...cartItem,
    id: cartId,
  });
};

// 장바구니에 항목 추가
export const addCartItem = async (cartItem) => {
  try {
    // 숙소 ID, 유저 ID를 조합한 cartId
    const cartId = `${cartItem.accommodation_id}_${cartItem.user_id}`;

    // 장바구니에 아이템의 포함 여부
    const cartSnapshot = await checkCartItemExist(cartId);

    // 데이터가 있으면 업데이트, 없으면 추가
    if (!cartSnapshot.empty) {
      await updateCartItem(cartItem, cartId);
    } else {
      await addNewCartItem(cartItem, cartId);
    }
  } catch (error) {
    console.error('장바구니 항목 추가 오류: ' + error.message);
  }
};
