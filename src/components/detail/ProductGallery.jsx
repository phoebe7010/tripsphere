import React from 'react';

const ProductGallery = ({ product }) => {
  return (
    <div className="pt-6">
      <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-2">
        <img
          alt={product.images[0].alt}
          src={product.images[0].src}
          className="hidden size-full rounded-l-lg object-cover lg:block"
        />
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
          <img
            alt={product.images[1].alt}
            src={product.images[1].src}
            className="aspect-3/2 w-full object-cover"
          />
          <img
            alt={product.images[2].alt}
            src={product.images[2].src}
            className="aspect-3/2 w-full object-cover"
          />
        </div>
        <img
          alt={product.images[3].alt}
          src={product.images[3].src}
          className="aspect-4/5 size-full object-cover sm:rounded-r-lg lg:aspect-auto"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
