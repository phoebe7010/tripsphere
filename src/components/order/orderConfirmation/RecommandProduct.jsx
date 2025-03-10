import { Link } from 'react-router-dom';
import { calculateDiscountedPrice } from '../../../utils/discountedPrice';
import { formatNumber } from '../../../utils/format';
import starReturn from '../../StarReturn';

const RecommandProduct = ({ products }) => {
  return (
    <ul className="flex w-full gap-10 max-lg:grid max-lg:grid-cols-4 max-[53rem]:grid-cols-2">
      {products.map((product, index) => (
        <Link to="/">
          <li
            key={index}
            className="group w-50 max-[53rem]:w-full shadow-lg rounded-2xl p-3 flex flex-col gap-3 hover:-translate-1 transition-transform hover:cursor-pointer
            dark:shadow-gray-700 hover:shadow-2xl dark:hover:shadow-gray-500">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="object-cover h-40 rounded-2xl"
            />
            <div className="flex flex-col gap-1.5 font-semibold">
              <p className="group-hover:font-extrabold">{product.name}</p>
              <div className="flex flex-col justify-between max-[53rem]:flex-row">
                <div className="flex justify-between max-[53rem]:flex-col max-[53rem]:justify-around mb-1">
                  <div className="flex justify-start items-center text-yellow-500 max-[53rem]:text-2xl ">
                    {starReturn(product.rating)}
                  </div>
                  <div className="max-[53rem]:text-2xl max-[53rem]:font-bold font-bold">
                    평점 : {product.rating}
                  </div>
                </div>

                <div
                  title="가격정보"
                  className="flex flex-col justify-start items-end">
                  <p
                    className="line-through text-red-600"
                    title="정가">
                    {formatNumber(product.original_price)}원
                  </p>
                  <span> -{product.discount_rate}% </span>
                  <p
                    className="underline font-bold text-2xl transition-colors"
                    title="할인가">
                    {formatNumber(
                      calculateDiscountedPrice(
                        product.original_price,
                        product.discount,
                      ),
                    )}
                    원
                  </p>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default RecommandProduct;
