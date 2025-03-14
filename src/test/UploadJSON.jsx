import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Firebase 설정 파일 import

const UploadJSON = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const uploadToFirestore = async () => {
    if (!file) return alert('파일을 선택해주세요!');

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        if (!event.target?.result) return;
        console.log(event.target.result);
        const jsonData = JSON.parse(event.target.result);

        // Firestore에 저장
        const accommodationsCollection = collection(db, 'accommodations');
        for (const accommodations of jsonData) {
          await addDoc(accommodationsCollection, accommodations);
        }

        alert('데이터 업로드 성공!');
      } catch (error) {
        console.error('업로드 실패:', error);
        alert('업로드 중 오류 발생!');
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
      />
      <button onClick={uploadToFirestore}>업로드</button>
    </div>
  );
};

export default UploadJSON;
