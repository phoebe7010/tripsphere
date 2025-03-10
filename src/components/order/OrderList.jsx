import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCalendarAlt, BiUser, BiChevronRight } from 'react-icons/bi';

const OrderList = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {data.map((item, index) => (
        <li
          className="list-row flex-col flex"
          key={index}>
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>{item.order_date}</div>

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
                src={item.accommodation.images[0]}
                alt={item.accommodation.name}
              />

              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{item.accommodation.name}</h2>

                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : {item.id}
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2">
                    <BiUser />
                    <div className="mr-1 text-sm">
                      인원수 {item.guest_count}
                    </div>

                    <div>
                      (성인: {item.adults}명 어린이: {item.children}명)
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>{item.check_in}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>{item.check_out}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>{item.total_price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
