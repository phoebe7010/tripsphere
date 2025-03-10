import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const SearchButton = () => (
  <div className="w-full">
    <label
      htmlFor="peopleCount"
      className="opacity-0 mb-2 block text-sm font-medium text-gray-700 text-left">
      인원수
    </label>
    <Link
      to="/products"
      className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <BiSearch /> 검색
    </Link>
  </div>
);

export default SearchButton;
