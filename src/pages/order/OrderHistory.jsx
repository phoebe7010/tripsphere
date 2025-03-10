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
          className="text-base/7 font-semibold text-gray-900 mb-10 pr-3 hover:cursor-pointer">
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
            <h3 className="py-4">|</h3>
            <h3 className="p-4">예약 날짜 : 2024년 12월 20일</h3>
          </div>

          <div className="flex mb-3">
            <img
              className="mx-4 size-24 rounded-box"
              src="https://ak-d.tripcdn.com/images/220713000000ubfbb2422_R_600_400_R5.webp"
            />

            <div className="flex flex-col flex-1">
              <div className="flex justify-between mx-5 text-2xl ">
                <div className="font-bold">서울 코리아나호텔 </div>
                <div>1,200,000원</div>
              </div>
              <div className="flex">
                <div className="font-bold ml-5 pt-2">성인 :</div>
                <div className="ml-2 pt-2">2명</div>
                <div className="font-bold ml-5 pt-2">소아 :</div>
                <div className="ml-2 pt-2">0명</div>
              </div>
              <div className="flex">
                <div className="font-bold ml-5 pt-2">체크인 :</div>
                <div className="ml-2 pt-2">2024년 04월 01일</div>
                <div className="font-bold ml-5 pt-2">체크아웃 :</div>
                <div className="ml-2 pt-2">2024년 04월 04일</div>
              </div>
            </div>
          </div>
        </li>

        <li className="flex flex-col mb-2">
          <div className="flex">
            <h3 className="p-4">예약번호 : 12121212</h3>
            <h3 className="py-4">|</h3>
            <h3 className="p-4">예약 날짜 : 2024년 12월 20일</h3>
          </div>

          <div className="flex mb-3">
            <img
              className="mx-4 size-24 rounded-box"
              src="https://ak-d.tripcdn.com/images/02068120009p1pmjr0B63_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
            />

            <div className="flex flex-col flex-1">
              <div className="flex justify-between mx-5 text-2xl">
                <div className="font-bold">아난티 앳 부산 코브</div>
                <div>1,500,000원</div>
              </div>
              <div className="flex">
                <div className="font-bold ml-5 pt-2">성인 :</div>
                <div className="ml-2 pt-2">2명</div>
                <div className="font-bold ml-5 pt-2">소아 :</div>
                <div className="ml-2 pt-2">1명</div>
              </div>
              <div className="flex">
                <div className="font-bold ml-5 pt-2">체크인 :</div>
                <div className="ml-2 pt-2">2024년 04월 01일</div>
                <div className="font-bold ml-5 pt-2">체크아웃 :</div>
                <div className="ml-2 pt-2">2024년 04월 04일</div>
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
