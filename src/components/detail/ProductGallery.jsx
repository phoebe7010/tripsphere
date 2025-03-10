import React from 'react';

const ProductGallery = ({ product }) => {
  return (
    <div className="pt-6">
      <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-2">
        <img
          alt={product.name}
          src={product.images[0]}
          className="hidden size-full rounded-l-lg object-cover lg:block"
        />
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
          <img
            alt={product.name}
            src={product.images[1]}
            className="aspect-3/2 w-full object-cover"
          />
          <img
            alt={product.name}
            src={product.images[2]}
            className="aspect-3/2 w-full object-cover"
          />
        </div>
        <img
          alt={product.name}
          src={product.images[3]}
          className="aspect-4/5 size-full object-cover sm:rounded-r-lg lg:aspect-auto"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
