import React from 'react';
import { BiCalendarAlt, BiChevronRight, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/format';

const OrderList = ({ orderInfo }) => {
  const navigate = useNavigate();

  return (
    <ul className="list bg-base-100 rounded-box shadow-md py-5">
      {orderInfo?.map((order, index) => (
        <li
          className="list-row flex-col flex my-3 mx-5 border-gray-200 list-row"
          key={index}>
          <div className="border-b border-stone-200 flex justify-between items-center">
            <div>{order.order_date}</div>

            <button
              type="button"
              onClick={() => navigate('/product/0')}>
              <BiChevronRight className="size-6" />
            </button>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-24 rounded-box"
                src={order.accommodation.images[0]}
                alt={order.accommodation.name}
              />

              <div className="flex flex-col">
                <h2 className="text-lg font-bold">
                  {order.accommodation.name}
                </h2>

                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : {order.id}
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2">
                    <BiUser />
                    <div className="mr-1 text-sm">
                      인원수 {order.guest_count}
                    </div>

                    <div>
                      (성인: {order.adults}명 미성년자: {order.children}명)
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>{order.check_in}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>{order.check_out}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>{formatNumber(order.total_price)}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
