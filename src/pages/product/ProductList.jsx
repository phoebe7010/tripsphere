import React, { useState } from 'react';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

const ProductList = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="max-w-[1200px] mx-auto py-[20px] px-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductList;
