import React from 'react';
import Image from 'next/image';

interface CategoryCardType {
  name: string;
  products: (string | number)[];
  image: string; 
}

const CategoryCard = ({ name, products, image }: CategoryCardType) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
      <Image
        src={image} 
        alt={name}
        width={400} 
        height={400} 
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-black bg-opacity-70 w-full h-[85px] bottom-0 pl-4 pt-4">
        <p className="text-white text-xl font-semibold">{name}</p>
        <p className='text-white text-sm text-opacity-70'>{products} Products</p>
      </div>
    </div>
  );
};

export default CategoryCard;