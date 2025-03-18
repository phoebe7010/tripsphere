import React, { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LiaCoinsSolid } from 'react-icons/lia';
import { usePointData } from '../../hooks/usePointData';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import PointModal from './PointModal';

const UserStats = () => {
  //포인트 모달 열기
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(null);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //사용자 정보
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const { data, isLoading, error } = usePointData(user?.uid);

  //포인트 정보
  useEffect(() => {
    if (data) {
      console.log('포인트 내역: ', JSON.stringify(data));
      data.map((item) => {
        console.log(item.points);
      });

      setBalance(data[0].points);
    }
  }, [data]);

  if (isLoading) return <>로딩 중...</>;
  if (error) return <>에러</>;

  return (
    <div className="flex divide-x-1 divide-solid divide-gray-300 border-t border-b border-gray-300 ">
      {/* 포인트 박스  */}
      <div className="flex items-center gap-4 px-4">
        <Link
          to="/pointhistory"
          className="flex-1 flex items-center gap-2 justify-around  py-4">
          <div className="flex-none flex gap-2 items-center">
            <LiaCoinsSolid size={30} />
            <div>포인트</div>
          </div>
          <div>
            <strong className="stat-value text-primary">{balance}</strong>
            포인트
          </div>
        </Link>
        <button
          onClick={handleOpen}
          className="btn bg-green-500">
          충전
        </button>
        {isOpen && (
          <PointModal
            onClose={handleClose}
            data={data}
          />
        )}
      </div>

      {/* 주문내역 박스  */}
      <Link
        to="/orderhistory"
        className="flex-1 flex items-center gap-2 justify-around  py-4">
        <div className="flex-none flex gap-2 items-center">
          <HiOutlineTicket size={30} />
          <div>주문 내역</div>
        </div>
        <div className="stat-value text-secondary">3</div>
      </Link>

      {/* 찜내역 박스  */}
      <Link
        to="/favorite"
        className="flex-1 flex items-center gap-2 justify-around  py-4">
        <div className="flex-none flex gap-2 items-center">
          <BiHeart size={30} />
          <div>찜</div>
        </div>

        <div className="stat-value text-accent">25</div>
      </Link>
    </div>
  );
};

export default UserStats;
