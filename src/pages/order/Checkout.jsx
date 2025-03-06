import { BiMap, BiTv } from 'react-icons/bi';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoIosMan } from 'react-icons/io';
import { MdChildCare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      <div className="flex space-y-6 gap-10 py-[30px] max-md:flex-col max-md:items-center">
        {/* 주문 결제 정보 */}
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              주문 결제
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              결제 정보를 확인해 주세요.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-900">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  여행 패키지
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  가평군/가족/리버뷰/바베큐#29638
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  예약 정보
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-start  py-4 pr-5 pl-4 text-sm/6">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                        <span className="text-gray-400">
                          <FaMapLocationDot className="text-2xl" />
                        </span>
                        <span className="font-medium">여행지</span>
                      </div>

                      <div>
                        <span className="font-medium ">가평군</span>
                      </div>
                    </li>

                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center gap-8">
                        <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                          <span className="text-gray-400">
                            <FaRegCalendarAlt className="text-2xl" />
                          </span>
                          <span className="font-medium">시작일자</span>
                        </div>

                        <div className="flex gap-x-4">
                          <time className="font-medium">2025-04-01</time>
                        </div>
                      </div>
                    </li>

                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                          <span className="text-gray-400">
                            <FaRegCalendarAlt className="text-2xl" />
                          </span>
                          <span className="font-medium">종료일자</span>
                        </div>
                        <div className="flex gap-x-4">
                          <time className="font-medium">2025-04-03</time>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm/6 font-medium text-gray-900">
                  예약 인원
                </dt>

                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex justify-between items-center py-4 pl-4 pr-4">
                      <div className="flex flex-1 items-center gap-2 ml-4">
                        <span className="text-gray-400">
                          <IoIosMan className="text-2xl" />
                        </span>
                        <span className="font-medium">성인</span>
                      </div>

                      <div className="flex-1">
                        <span>3만원</span>
                      </div>

                      <div className="flex items-center">
                        <button type="button">
                          <CiCircleMinus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                        <input
                          type="number"
                          className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-gray-900 focus:outline-none"
                          min="0"
                        />
                        <button type="button">
                          <CiCirclePlus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-4 pl-4 pr-4">
                      <div className="flex flex-1 items-center gap-2 ml-4">
                        <span className="text-gray-400">
                          <MdChildCare className="text-2xl" />
                        </span>
                        <span className="font-medium">청소년</span>
                      </div>

                      <div className="flex-1">
                        <span>3만원</span>
                      </div>

                      <div className="flex items-center">
                        <button type="button">
                          <CiCircleMinus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                        <input
                          type="number"
                          className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-gray-900 focus:outline-none"
                          min="0"
                        />
                        <button type="button">
                          <CiCirclePlus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  숙박 장소
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  호텔
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  호스트 연락처
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  020-0000-0000
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">소개</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">서비스</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                          <span className="shrink-0 text-gray-400">
                            <BiTv />
                          </span>
                          <span className="truncate font-medium">
                            최고의 전망
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                          <span className="shrink-0 text-gray-400">
                            <BiMap />
                          </span>
                          <span className="truncate font-medium">
                            최고의 위치
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 최종 결제 금액 */}
        <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-2">최종 결제 금액</h2>

              <div className="flex justify-between py-2">
                <p>주문 금액</p>
                <p className="flex justify-end">26200원</p>
              </div>

              <div className="flex justify-between py-2">
                <p>포인트 금액</p>
                <p className="flex justify-end">-26200원</p>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex justify-between py-4">
                  <p>주문 합계 금액</p>
                  <p className="flex justify-end">26200원</p>
                </div>
              </div>

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  onClick={() => navigate('/orderconfirmation')}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
