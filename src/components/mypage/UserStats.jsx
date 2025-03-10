import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LiaCoinsSolid } from 'react-icons/lia';

const UserStats = () => {
  return (
    <div className="flex divide-x-1 divide-solid divide-gray-300 border-t border-b border-gray-300 ">
      {/* 포인트 박스  */}
      <Link
        to="/pointhistory"
        className="flex-1 flex items-center gap-2 justify-around  py-4">
        <div className="flex-none flex gap-2 items-center">
          <LiaCoinsSolid size={30} />
          <div>포인트</div>
        </div>
        <div>
          <strong className="stat-value text-primary">722</strong> 포인트
        </div>
      </Link>

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
