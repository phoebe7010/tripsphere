import React from 'react';
import { Outlet } from 'react-router-dom';

const SubLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-4xl px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SubLayout;
