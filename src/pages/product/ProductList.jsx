import SideFilter from '../../components/SideFilter';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../components/Pagination';
import PageHeader from '../../components/PageHeader';

const ProductList = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <PageHeader />

      <div
        id="container"
        className="flex items-start gap-10">
        <SideFilter />

        <div className="content flex-1">
          {[1, 2, 3, 4, 5, 6].map((_, index, array) => (
            <ProductCard
              index={index}
              array={array}
            />
          ))}

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
