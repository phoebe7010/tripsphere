import React from 'react';

const PageHeader = () => {
  return (
    <div className="mb-[48px]">
      <nav
        aria-label="Breadcrumb"
        className="mb-4">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 lg:max-w-7xl">
          <li>
            <div class="flex items-center">
              <a
                href="#"
                class="mr-2 text-sm font-medium text-gray-900">
                Home
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li class="text-sm">
            <a
              href="#"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600">
              Search
            </a>
          </li>
        </ol>
      </nav>

      <h2 className="text-2xl/7 font-bold  sm:truncate sm:text-3xl sm:tracking-tight">
        여행 패키지 검색 결과
      </h2>
    </div>
  );
};

export default PageHeader;
