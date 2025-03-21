import React, { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LiaCoinsSolid } from 'react-icons/lia';

import PointModal from './PointModal';
import { auth } from '../../firebase/firebaseConfig';
import { useUserData } from '../../hooks/useUserData';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserOrders } from '../../hooks/useOrderData';
const UserStats = () => {
  const [user, setUser] = useState(null);
  //포인트 모달 열기
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Firebase 인증 상태가 변경될 때마다 호출
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리
    return () => unsubscribe();
  }, []);

  const { data: orderInfo } = useUserOrders(user?.uid);

  const { data, isLoading, error } = useUserData(user?.uid);

  useEffect(() => {
    if (data) {
      console.log('사용자 정보:', JSON.stringify(data));
    }
  }, [data]);

  if (isLoading) return <>로딩 중...</>;
  if (error) return <>에러</>;

  return (
    <div className="stats bg-base-100 border border-base-300  flex justify-between">
      {/* 포인트 박스  */}
      <div className="stat place-items-center">
        <Link to="/pointhistory">
          <div className="stat-title  flex-none flex gap-2 items-center">
            <LiaCoinsSolid size={30} />
            <div>포인트</div>
          </div>
          <div className="stat-value text-center">{data && data.points}</div>
        </Link>
        <div className="stat-actions mt-2">
          <button
            onClick={handleOpen}
            className="btn btn-soft btn-primary">
            충전
          </button>
        </div>
        {isOpen && (
          <PointModal
            onClose={handleClose}
            data={data}
          />
        )}
      </div>

      {/* 주문내역 박스  */}
      <div className="stat place-items-center">
        <Link to="/orderhistory">
          <div className="stat-title flex-none flex gap-2 items-center">
            <HiOutlineTicket size={30} />
            <div>주문 내역</div>
          </div>
          <div className="stat-value text-center">{orderInfo?.length}</div>
        </Link>
      </div>
      {/* 찜내역 박스  */}
      <div className="stat place-items-center">
        <Link to="/favorite">
          <div className="stat-title flex-none flex gap-2 items-center">
            <BiHeart size={30} />
            <div>찜</div>
          </div>

          <div className="stat-value text-center">
            {data && data.wishlist.length}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserStats;
