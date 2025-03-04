import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      {/* 주문 완료 문구 */}
      <div className="flex flex-col items-center gap-4">
        <FcApproval size={50} />
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 ">
          주문이 완료되었습니다.
        </h1>
      </div>

      {/* 주문 리스트 */}
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Remaining Reason
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            "Remaining Reason" became an instant hit, praised for its haunting
            sound and emotional depth. A viral performance brought it widespread
            recognition, making it one of Dio Lupa’s most iconic tracks.
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/4@94.webp"
            />
          </div>
          <div>
            <div>Ellie Beilish</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Bears of a fever
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            "Bears of a Fever" captivated audiences with its intense energy and
            mysterious lyrics. Its popularity skyrocketed after fans shared it
            widely online, earning Ellie critical acclaim.
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/3@94.webp"
            />
          </div>
          <div>
            <div>Sabrino Gardener</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Cappuccino
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            "Cappuccino" quickly gained attention for its smooth melody and
            relatable themes. The song’s success propelled Sabrino into the
            spotlight, solidifying their status as a rising star.
          </p>
        </li>
      </ul>

      {/* 마이페이지로 이동 버튼 */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={() => navigate('/mypage')}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          마이페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
