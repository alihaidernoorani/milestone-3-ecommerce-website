import React from "react";
import Image from "next/image";

interface ProductType {
  id: string;
  name: string;
  image: string;
  slug: number;
}

interface StyleProductsProps {
  products: ProductType[];
}

const StyleProducts: React.FC<StyleProductsProps> = ({ products }) => {
  // Separate the main image and secondary images
  const mainImage = products.find((product) => product.slug === 1);
   const secondaryImages = products.filter((product) => product !== mainImage);

  return (
    <div className="flex justify-center mt-20">
      {/* Outer Container */}
      <div className="w-[80%] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex w-full md:w-1/2 p-4 relative">
              {/* Vertical Rotated Text */}
              <div className="absolute md:-rotate-90 md:left-[-190px] left-8 top-1 md:top-1/2 text-center transform -translate-y-1/2 text-[10px] md:text-lg lg:text-xl font-semibold">
                EXPLORE NEW AND POPULAR STYLES
              </div>
            {mainImage && (
              <Image
                src={mainImage.image}
                alt="Main Style"
                className="w-full h-auto"
                priority
                width={500}
                height={500}
              />
            )}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 p-4 md:w-1/2">
          {secondaryImages.map((product: ProductType) => (
              <Image
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
                width={250}
                height={250}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleProducts;
