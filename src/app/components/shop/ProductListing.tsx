import React from "react";
import ProductCard from "../cards/ProductCard";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: number;
  isNew?: boolean;
  onSale?: boolean;
};

interface ProductListingProps {
  products: ProductType[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  return (
    <div>
      {/* All Products Section */}
      <div className="w-[80%] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">All Products</h2>
        {products.length === 0 ? (
          <p className="text-center">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
