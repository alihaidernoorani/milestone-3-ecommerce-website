import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PopularProductCardType {
  img: string;
  name: string;
  price: number;
  onSale: boolean;
  isNew: boolean;
}

const PopularProductCard = ({ img, name, price, isNew, onSale }: PopularProductCardType) => {
  return (
   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <Link href={`/product/${name.split(" ").join("-")}`}>
        <div className="relative w-full h-[250px] overflow-hidden rounded-md">
        {isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
            New
          </div>
        )}
        {onSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm text-sm font-semibold">
            Sale
          </div>
        )}
          <Image
            src={img}
            alt={name || "Product"}
            layout="fill"
            objectFit="cover" // Ensures the image covers the container proportionally
          />
        </div>
        </Link>
        <div className="mt-4 text-center">
          <h3 className="text-base font-semibold">{name}</h3>
          <span className="text-gray-600 text-md">${price.toFixed(2)}</span>
        </div>
      </div>
    
  );
};

export default PopularProductCard;
