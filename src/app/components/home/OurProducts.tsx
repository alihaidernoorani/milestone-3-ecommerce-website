import React from "react";
import ProductCard from "../cards/ProductCard";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
  slug: number;
};

interface OurProductsProps {
  products: ProductType[];
};

const OurProducts: React.FC<OurProductsProps> = ({ products }) => {
  return (
    <section className="w-[80%] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType, index: number) => (
            <ProductCard
              key={index}
              product={{
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                onSale: product.onSale,
                isNew: product.isNew,
              }}
            />
          ))}
        </div>
    </section>
  );
};

export default OurProducts;
