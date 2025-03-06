import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <div className="flex">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
          className="text-base/7 font-semibold text-gray-900 mb-10 pr-3">
          마이페이지
        </button>
        <h2 className="text-base/7 font-semibold text-gray-900 mb-10 pr-3">
          &gt;
        </h2>
        <h2 className="text-base/7 font-semibold text-gray-900 mb-10">
          내 예약
        </h2>
      </div>
      {/* 주문 내역 목록 */}
      <ul className="list bg-base-100 border-1 border-gray-100 rounded-box shadow-md">
        <li className="flex flex-col mb-2">
          <div className="flex">
            <h3 className="p-4">예약번호 : 12121212</h3>
            <h3 className="p-4">|</h3>
            <h3 className="p-4">예약 날짜 : 2024년 12월 20일</h3>
          </div>

          <div className="flex mb-3">
            <img
              className="mx-4 size-20 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />

            <div className="flex flex-col flex-1">
              <div className="flex justify-between mx-5 text-2xl">
                <div>서울 - 파리</div>
                <div>1,200,000원</div>
              </div>
              <div className="mx-5 pt-7">
                2024년 04월 01일 - 2024년 04월 07일
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col mb-2">
          <div className="flex">
            <h3 className="p-4">예약번호 : 12121212</h3>
            <h3 className="p-4">|</h3>
            <h3 className="p-4">예약 날짜 : 2024년 12월 20일</h3>
          </div>

          <div className="flex mb-3">
            <img
              className="mx-4 size-20 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />

            <div className="flex flex-col flex-1">
              <div className="flex justify-between mx-5 text-2xl">
                <div>서울 - 뉴욕</div>
                <div>1,500,000원</div>
              </div>
              <div className="mx-5 pt-7">
                2024년 04월 01일 - 2024년 04월 07일
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* 뒤로 가기 버튼 */}
    </div>
  );
};

export default OrderHistory;
