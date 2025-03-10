import React from 'react';
import { LiaCoinsSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const PointHistory = () => {
  return (
    <ul className="mt-8 list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
        <p className="flex items-center gap-2">
          <LiaCoinsSolid /> 포인트 내역
        </p>

        <Link
          to="/pointhistory"
          className="text-primary font-bold">
          더 보기
        </Link>
      </li>

      <li className="list-row flex-col flex">
        <div className="py-2 border-b border-stone-200 flex justify-between items-center">
          <div>2024년 12월 20일</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <h2 className="text-md font-bold">신규 가입 지급 포인트🎉</h2>
              <div className="mb-4 text-xs uppercase opacity-60">
                신규 가입을 축하드립니다!
              </div>
            </div>
          </div>

          <div className="text-secondary">+10 포인트</div>
        </div>
      </li>
    </ul>
  );
};

export default PointHistory;
