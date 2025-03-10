import React from 'react';
import { BiUser, BiCalendarAlt } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  return (
    <ul className="mt-8 list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
        <p className="flex items-center gap-2">
          <HiOutlineTicket /> 주문 내역
        </p>

        <Link
          to="/orderhistory"
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
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174"
              alt="서울 코리아나호텔"
            />

            <div className="flex flex-col">
              <h2 className="text-md font-bold">서울 코리아나호텔</h2>
              <div className="mb-4 text-xs uppercase opacity-60">
                예약번호 : 12121212
              </div>

              <div className="flex-col flex gap-[4px] mt-auto">
                <div className="flex items-center gap-2 text-xs">
                  <BiUser />
                  <div className="mr-1 text-xs">인원수 4</div>
                  <div>(성인: 2명 소아: 2명)</div>
                </div>

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

      <li className="list-row flex-col flex">
        <div className="py-2 border-b border-stone-200 flex justify-between items-center">
          <div>2024년 12월 20일</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6">
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500"
              alt="서울 코리아나호텔"
            />

            <div className="flex flex-col">
              <h2 className="text-md font-bold">서울 코리아나호텔</h2>
              <div className="mb-4 text-xs uppercase opacity-60">
                예약번호 : 12121212
              </div>

              <div className="flex-col flex gap-[4px] mt-auto">
                <div className="flex items-center gap-2 text-xs">
                  <BiUser />
                  <div className="mr-1 text-xs">인원수 4</div>
                  <div>(성인: 2명 소아: 2명)</div>
                </div>

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

      <li className="list-row flex-col flex">
        <div className="py-2 border-b border-stone-200 flex justify-between items-center">
          <div>2024년 12월 20일</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6">
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500
"
              alt="서울 코리아나호텔"
            />

            <div className="flex flex-col">
              <h2 className="text-md font-bold">서울 코리아나호텔</h2>
              <div className="mb-4 text-xs uppercase opacity-60">
                예약번호 : 12121212
              </div>

              <div className="flex-col flex gap-[4px] mt-auto">
                <div className="flex items-center gap-2 text-xs">
                  <BiUser />
                  <div className="mr-1 text-xs">인원수 4</div>
                  <div>(성인: 2명 소아: 2명)</div>
                </div>

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

export default OrderHistory;
