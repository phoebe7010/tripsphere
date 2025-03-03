import { BiTv, BiMap } from 'react-icons/bi';
import Heading from '../../components/Heading';
import ProductOverviews from '../../components/ProductOverviews';

const ProductDetail = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      <Heading />

      <ProductOverviews />

      <div className="flex space-y-6 gap-10 py-[30px]">
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              가평군, 한국의 집 전체
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              최대 인원 4명침실 1개침대 1개욕실 1개
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">숙소명</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  가평군/가족/리버뷰/바베큐#29638
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

        <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <label className="fieldset-label">체크인</label>
                <input
                  type="date"
                  className="input"
                />

                <label className="fieldset-label">체크아웃</label>
                <input
                  type="date"
                  className="input"
                />

                <label className="fieldset-label">인원</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                />
              </fieldset>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">예약하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex space-y-6 gap-10 max-w-[1200px] mx-auto py-[20px] px-[20px]">
          <div className="w-full">
            <div className="px-4 sm:px-0">
              <h3 className="text-base/7 font-semibold text-gray-900">위치</h3>
              <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
                가평군, 경기도, 한국
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <div className="divide-y divide-gray-100">
                <div className="py-4">카카오맵</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
