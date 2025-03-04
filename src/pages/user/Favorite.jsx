import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';

const Favorite = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <h2 className="text-base/7 font-semibold text-gray-900 mb-10">찜 목록</h2>

      {/* 찜 목록 */}
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
          <button className="btn btn-square btn-ghost">
            <BiTrash className="size-[1.2em]" />
          </button>
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
          <button className="btn btn-square btn-ghost">
            <BiTrash className="size-[1.2em]" />
          </button>
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
          <button className="btn btn-square btn-ghost">
            <BiTrash className="size-[1.2em]" />
          </button>
        </li>
      </ul>

      {/* 뒤로 가기 버튼 */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
          className="text-sm/6 font-semibold text-gray-900">
          뒤로 가기
        </button>
      </div>
    </div>
  );
};

export default Favorite;
