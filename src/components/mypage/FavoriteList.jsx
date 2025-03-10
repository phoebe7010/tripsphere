import React from 'react';
import { Link } from 'react-router-dom';
import { BiHeart, BiCalendarAlt } from 'react-icons/bi';

const FavoriteList = () => {
  return (
    <ul className="mt-8 list bg-base-100 rounded-box shadow-md mb-10">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
        <p className="flex items-center gap-2">
          <BiHeart /> 찜 목록
        </p>

        <Link
          to="/favorite"
          className="text-primary font-bold">
          더 보기
        </Link>
      </li>

      <li className="list-row flex-col flex">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500"
              alt="서울 코리아나호텔"
            />

            <div className="flex flex-col">
              <h2 className="text-md font-bold mb-2">서울 코리아나호텔</h2>

              <div className="flex gap-2">
                <div className="badge badge-soft badge-primary text-xs">
                  펜션
                </div>

                <div className="badge badge-soft badge-info text-xs">
                  양평군, 경기도
                </div>
              </div>

              <div className="flex-col flex gap-[4px] mt-auto">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2 text-xs">
                    <BiCalendarAlt />
                    <span>체크인:</span> <span>2024년 04월 01일</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <BiCalendarAlt />
                    <span>체크아웃:</span> <span>2024년 04월 04일</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>1,200,000원</div>
        </div>
      </li>
    </ul>
  );
};

export default FavoriteList;
