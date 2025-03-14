import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// 여러 숙소들 정보 쿼리
export const fetchAccomListData = async (accomRegion, priceRange) => {
  const querySnapshot = await getDocs(collection(db, 'accommodations')); // 조건 없이 모든 숙소 정보를 쿼리함

  let array = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.data());
    array.push(doc.data());
  });

  // console.log(array.toString);

  return !querySnapshot ? null : array;
};
