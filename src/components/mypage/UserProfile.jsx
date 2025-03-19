import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';
import { auth } from '../../firebase/firebaseConfig';
import { useUserData } from '../../hooks/useUserData';
import { onAuthStateChanged } from 'firebase/auth';

const UserProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase 인증 상태가 변경될 때마다 호출
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리
    return () => unsubscribe();
  }, []);

  const { data, isLoading, error } = useUserData(user?.uid);

  useEffect(() => {
    if (data) {
      console.log('사용자 정보:', JSON.stringify(data));
    }
  }, [data]);

  if (isLoading) return <>로딩 중..</>;
  if (error) return <>오류</>;

  return (
    <div className="flex px-4 mb-8">
      {/* 프로필사진 */}
      <div className="avatar">
        <div className="w-20 rounded-full">
          {data && data.profile_image ? (
            <img src={data.profile_image} />
          ) : (
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          )}
        </div>
      </div>

      {/* 이름 등 정보 */}
      {data && (
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium ">
              <h3>
                <a href="#">
                  <strong>{data.username}님</strong>
                </a>
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">{data.nickname}</p>
            <p>{data.email}</p>
          </div>
        </div>
      )}

      {/* 개인정보 수정 설정 버튼 */}
      <div>
        <button
          type="button"
          onClick={() => navigate('/profile')}
          className="inline-flex items-center px-2 py-1">
          <BiCog size={24} />
        </button>

        <p className="text-center text-xs">설정</p>
      </div>
    </div>
  );
};

export default UserProfile;
