import React from 'react';
import { BiCalendarAlt, BiTrash, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { calculateDiscountedPrice } from '../../utils/discountedPrice';
import { formatNumber } from '../../utils/format';

const ProductCard = ({ index, product }) => {
  function bulidingType({ product }) {
    let message;

    switch (product.type) {
      case 'hotel':
        message = '호텔';
        break;
      case 'pension':
        message = '펜션';
        break;
      case 'guesthouse':
        message = '게스트하우스';
        break;
      case 'camping':
        message = '캠핑';
        break;
      default:
        message = '';
        break;
    }

    return message;
  }

  return (
    <Link to="/product/0">
      {/* 각 여행패키지 정보*/}
      <article className="flex flex-col items-start group card bg-base-100 transition-shadow gap-[20px]">
        {/* 패키지 사진 영역*/}
        <figure>
          <div className="h-full relative">
            <div className="h-[200px] rounded-md overflow-hidden">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full object-cover"
              />
            </div>
          </div>
          {/* <figcaption>여행 패키지 상품 사진</figcaption> */}
        </figure>

        <button className="btn btn-square btn-ghost indicator-item badge absolute top-2 right-2 transition opacity-0 hover:scale-110 group-hover:opacity-100 ">
          <BiTrash className="size-[1.2em]" />
        </button>

        <div className="card-body w-full py-0 px-0 gap-0">
          {/* 패키지 이름 */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="badge badge-soft badge-primary text-xs">
                {bulidingType({ product })}
              </div>

              <div className="badge badge-soft badge-info text-xs">
                {product.location.place_name}
              </div>
            </div>
          </div>

          <h2
            className="mt-2 transition-colors card-title text-lg pb-3.5"
            title="여행 패키지 이름">
            <div className="line-clamp-1">{product.name}</div>
          </h2>

          {/* 가격정보 */}
          <div className="flex flex-col border-b-1 border-gray-200 pb-3.5">
            <div className="flex items-center gap-2">
              <div className="text-gray-400">{product.discount_rate}%</div>
              <div
                className="line-through text-gray-400"
                title="정가">
                {formatNumber(product.original_price)}원
              </div>
            </div>

            <div
              className="font-bold text-lg text-red-600"
              title="할인가">
              {formatNumber(
                calculateDiscountedPrice(
                  product.original_price,
                  product.discount,
                ),
              )}
              원
            </div>
          </div>

          {/* 패키지 정보 */}
          <div
            className=""
            title="패키지 상세정보들">
            <div className="py-4 pr-4">
              <div className="">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <BiCalendarAlt className="text-base" />
                    <p className="font-bold">체크인</p>
                  </div>
                  <time dateTime={product.check_in}>{product.check_in}</time>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <BiCalendarAlt className="text-base" />
                    <p className="font-bold">체크아웃</p>
                  </div>
                  <time dateTime={product.check_out}>{product.check_out}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
