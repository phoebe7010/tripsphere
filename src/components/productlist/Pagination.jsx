import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-5">
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
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs ">
            <a
              href="#"
              className=" inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
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
            {[2, 3, '...', 9, 10].map(ele => (
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 dark:hover:bg-gray-50 hover:bg-gray-300 hover:text-white dark:hover:text-black ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                {ele}
              </a>
            ))}
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
  );
};

export default Pagination;
