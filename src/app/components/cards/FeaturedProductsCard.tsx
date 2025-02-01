import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductType {
  id: string;
  name: string;
  price: number;
  isNew: boolean;
  onSale: boolean;
  image: string;
  slug: number;
};

const FeaturedProductsCard = (product: ProductType) => {
  return (
    <div className='relative shadow-md transition-transform transform hover:scale-105 bg-white rounded-lg flex flex-col items-start space-y-4 mx-auto md:w-1/6 mb-20'>
      <div>
        <Link href={`/product/${product.slug}`}>
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
              New
            </div>
          )}
          {product.onSale && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
              Sale
            </div>
          )}

          <Image
            src={product.image}
            alt={product.name}
            width={180} 
            height={150}  
            className="object-cover mb-4"
          />
        </Link>
      </div>
      <h3 className='text-base font-bold'>{product.name}</h3>
      <p className='text-base leading-6'>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default FeaturedProductsCard;