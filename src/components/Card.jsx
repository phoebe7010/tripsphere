import React from 'react';
import { Link } from 'react-router-dom';
import { BiShareAlt, BiCart } from 'react-icons/bi';

const Card = () => {
  return (
    <Link to="/product/0">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <div className="badge badge-secondary">NEW</div>
            Card Title
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                <BiShareAlt
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </button>
            </span>

            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                <BiCart
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </button>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
