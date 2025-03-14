import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { fetchUserData } from './userService';

// 특정 숙소에 대한 리뷰 전체 내용 쿼리
export const fetchAllReviewData = async (accomId) => {
  if (!accomId) return;

  // 숙소 문서 ID와 일치하는 리뷰 조회
  const reviewsCollection = collection(db, 'reviews');
  const reviewsQuery = query(
    reviewsCollection,
    where('accommodation_id', '==', accomId),
    orderBy('created_at', 'desc'),
  );
  const reviewSnapshot = await getDocs(reviewsQuery);

  if (reviewSnapshot.empty) {
    return null;
  }

  // 해당 reviews 컬렉션의 user_id를 사용하여 사용자 정보 조회 및 포함
  const reviewsWithUserInfo = [];

  for (const doc of reviewSnapshot.docs) {
    const reviewData = doc.data();
    const userInfo = await fetchUserData(reviewData.user_id);

    if (userInfo) {
      reviewsWithUserInfo.push({
        ...reviewData,
        userInfo,
      });
    }
  }

  return reviewsWithUserInfo;
};

export const addReview = async (review) => {
  try {
    const newReview = {
      ...review,
      created_at: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, 'reviews'), newReview);
    return docRef;
  } catch (error) {
    throw new Error('리뷰 추가 중 오류 발생: ' + error.message);
  }
};
