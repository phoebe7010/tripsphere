import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserProfile = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {
          displayName = '회원',
          email = '이메일 없음',
          nickname = '회원',
        } = user;
        setUserInfo({ displayName, email, nickname });
      } else {
        // 로그아웃 상태: userInfo를 null로 설정
        setUserInfo(null);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!userInfo) return <></>;

  return (
    <div className="flex px-4 mb-8">
      {/* 프로필사진 */}
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      {/* 이름 등 정보 */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium ">
            <h3>
              <a href="#">
                <strong>{userInfo.displayName}님</strong>
              </a>
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">{userInfo.nickname}</p>
          <p>{userInfo.email}</p>
        </div>
      </div>

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
