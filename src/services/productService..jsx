import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const fetchAccom = async (accomId) => {
  const accomDoc = await getDoc(doc(db, 'accommodations', accomId));
  return accomDoc.exists() ? { id: accomDoc.id, ...accomDoc.data() } : null;
};
