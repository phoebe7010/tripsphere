import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// 장바구니에 이미 있는지 확인
const checkCartItemExist = async (cartId) => {
  const cartDocRef = doc(db, 'carts', cartId);
  const cartSnapshot = await getDoc(cartDocRef);
  return cartSnapshot.exists();
};

// 장바구니 항목 업데이트
const updateCartItem = async (cartItem, cartId) => {
  const cartDocRef = doc(db, 'carts', cartId);
  await updateDoc(cartDocRef, cartItem);
};

// 장바구니 항목 추가
const addNewCartItem = async (cartItem, cartId) => {
  const cartDocRef = doc(db, 'carts', cartId);
  await setDoc(cartDocRef, cartItem);
};

// 장바구니에 항목 추가 및 업데이트
export const addCartItem = async (cartItem) => {
  try {
    // 숙소 ID, 유저 ID를 조합한 cartId
    const cartId = `${cartItem.accommodation_id}_${cartItem.user_id}`;

    // 장바구니에 아이템이 이미 있는지 확인
    const cartExists = await checkCartItemExist(cartId);

    // 데이터가 있으면 업데이트, 없으면 추가
    if (cartExists) {
      await updateCartItem(cartItem, cartId);
    } else {
      await addNewCartItem(cartItem, cartId);
    }
  } catch (error) {
    console.error('장바구니 항목 추가 오류: ' + error.message);
  }
};
