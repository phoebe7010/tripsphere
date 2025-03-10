import React from 'react';
import { BiUser, BiCalendarAlt } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/format';

const OrderHistory = ({ orderInfo }) => {
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

      {orderInfo.map(order => (
        <li className="list-row flex-col flex">
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>{order.order_date}</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-20 rounded-box"
                src={order.accommodation.images[0]}
                alt={order.accommodation.name}
              />

              <div className="flex flex-col">
                <h2 className="text-md font-bold">
                  {order.accommodation.name}
                </h2>
                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : {order.id}
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2 text-xs">
                    <BiUser />
                    <div className="mr-1 text-xs">
                      인원수 {order.guest_count}
                    </div>
                    <div>
                      (성인: {order.adults}명 소아: {order.children}명)
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>{order.check_in}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>{order.check_out}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>{formatNumber(order.total_price)}원</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistory;
