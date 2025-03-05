import {
  BiCart,
  BiChevronLeft,
  BiChevronRight,
  BiHeart,
  BiShareAlt,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

import SearchPannel from './ProductListCompo/Aside.jsx';

const ProductList = () => {
  return (
    <div>
      <div
        className="max-w-[1200px] mx-auto py-[20px] px-[20px]"
        style={{ marginBottom: '30px' }}>
        <nav>
          <Link to="/">Home</Link> &gt;&gt; Search
        </nav>
        <div
          title="검색결과"
          style={{ fontSize: '70px' }}>
          여행 패키지 검색 결과
        </div>
      </div>
      {/* 검색 옵션 패널 */}
      <SearchPannel />

      {/* 본문 : 상품페이지 (여행패키지) + 페이지네이션 목록 */}
      <main className="max-w-[1200px] mx-auto py-[20px] px-[20px]">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        {/* 상품 (여행패키지) 페이지 */}
        <section
          className=""
          style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Link to="/product/0">
              {/* 각 여행패키지 정보*/}
              <article
                className="card bg-base-100 shadow-sm"
                // className=""
                style={{
                  width: '100%',
                  // height: '300px',
                  display: 'grid',
                  border: '1px solid black',
                  gridTemplateColumns: '2fr 5fr',
                  gap: '10px',
                }}>
                {/* 패키지 사진 영역*/}
                <figure
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '10px',
                  }}>
                  <div
                    style={{
                      height: '100%',
                      overflow: 'hidden',
                      position: 'relative',
                    }}>
                    <div
                      className="badge badge-secondary"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                      }}>
                      NEW
                    </div>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  {/* <figcaption>여행 패키지 상품 사진</figcaption> */}
                </figure>

                <div
                  className="card-body"
                  style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* 패키지 이름 */}
                  <h2
                    className="card-title"
                    title="여행 패키지 이름"
                    style={{
                      fontSize: '40px',
                      height: '20%',
                      marginBottom: '15px',
                    }}>
                    Trip Package Name Here
                  </h2>

                  {/* 패키지 정보 */}
                  <div
                    className=""
                    title="패키지 상세정보들"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '3fr 1fr',
                      columnGap: '3rem',
                      height: '70%',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                      <div>
                        <span style={{ fontWeight: 'bolder' }}>위치 : </span>
                        <span>천국</span>
                      </div>
                      <div
                        title="일정"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginBottom: '10px',
                        }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <div
                            title="startTime"
                            style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ fontWeight: 'bolder' }}>시작일자</p>
                            <time datetime="2025-04-01">2025-04-01</time>
                          </div>

                          <div
                            title="endTime"
                            style={{ display: 'flex', gap: '10px' }}>
                            <p style={{ fontWeight: 'bolder' }}>종료일자</p>
                            <time datetime="2025-04-03">2025-04-03</time>
                          </div>
                        </div>
                        <div
                        // style={{ display: 'flex' }}
                        >
                          <div>
                            <span style={{ fontWeight: 'bolder' }}>
                              총 소요일수 :{' '}
                            </span>
                            <span>3일</span>
                          </div>
                        </div>
                      </div>

                      <p
                        className=""
                        title="패키지 설명">
                        여행 패키지 설명. 배낭 불필요. 여기는 천국. 파라다이스
                        오래있지마라. 한번오면 빠져나가질 못해. 오지마라
                        오지마라 아무도 오지마라 나만갈거야
                      </p>
                    </div>
                    <div
                      className=""
                      title="여행 패키지 정보"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                      {/* 가격정보 */}
                      <div
                        title="가격정보"
                        style={{ display: 'flex', marginBottom: '10px' }}>
                        <div title="가격할인">
                          <p
                            className=""
                            style={{
                              textDecorationLine: 'line-through',
                              color: 'red',
                            }}
                            title="정가">
                            500000\
                          </p>
                          <p
                            className=""
                            style={{
                              textDecorationLine: 'underline',
                              fontSize: '25px',
                              fontWeight: 'bolder',
                            }}
                            title="할인가">
                            300000\
                          </p>
                        </div>
                        <span> 40% 할인 </span>
                      </div>

                      {/* 참여 가능인원 */}
                      <div>
                        <span>현재 참여 가능인원</span>
                        <div>
                          어른 : <span>15명</span>
                        </div>
                        <div>
                          어린이 : <span>15명</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 소셜미디어 연결 */}
                  <div
                    className="card-actions justify-end"
                    // style={{ height: '20%' }}
                  >
                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiShareAlt
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>

                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiCart
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>

                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiHeart
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <BiChevronLeft
                    aria-hidden="true"
                    className="size-5"
                  />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <BiChevronRight
                    aria-hidden="true"
                    className="size-5"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
