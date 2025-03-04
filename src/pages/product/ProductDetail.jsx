import { BiTv, BiMap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BiShareAlt, BiCart, BiHeart } from 'react-icons/bi';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            여행 상품 제목
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiShareAlt
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              공유하기
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiCart
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              장바구니
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiHeart
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              찜하기
            </button>
          </span>
        </div>
      </div>
      <div>
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2   lg:max-w-7xl">
              {product.breadcrumbs.map(breadcrumb => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300">
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* 이미지 갤러리*/}
          <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 ">
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <img
                alt={product.images[1].alt}
                src={product.images[1].src}
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <img
                alt={product.images[2].alt}
                src={product.images[2].src}
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
            </div>
            <img
              alt={product.images[3].alt}
              src={product.images[3].src}
              className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
            />
          </div>
        </div>
      </div>

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
              <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
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
                <button
                  type="submit"
                  onClick={() => navigate('/checkout')}
                  class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  주문하기
                </button>
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
