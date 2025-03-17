import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// 여러 숙소들 정보 쿼리
// 지역과, 가격을 조건으로 쿼리를 날려야함.
export const fetchAccomListData = async (accomRegion, priceRange) => {
  const querySnapshot = await getDocs(collection(db, 'accommodations')); // 조건 없이 모든 숙소 정보를 쿼리함

  let array = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.data());
    array.push(doc.data());
  });

  return array.length > 0 ? array : null;
};
