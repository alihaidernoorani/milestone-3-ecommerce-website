import Image from "next/image";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import toast from 'react-hot-toast';

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: number;
  isNew?: boolean;
  onSale?: boolean;
};

import { useCart } from "@/app/cart/context/CartContext";

const ProductCard = ({ product }: { product: ProductType }) => {
  const cartContext = useCart(); // Access CartContext
  const addToCart = cartContext?.addToCart; // Safely access addToCart

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

      toast(`${product.name} has been added to the cart!`); 
    } else {
      console.error("addToCart function is not available");
      toast.error("Error adding to cart. Please try again."); 
    }
  };


  return (
    <div className="rounded-md overflow-hidden relative shadow-md transition-transform transform hover:scale-105 bg-white">
      {/* Link to Product Details */}
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full h-[230px] overflow-hidden rounded-md">
          {/* New/On Sale Labels */}
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

          {/* Product Image */}
          <div className="flex items-center justify-center h-full">
            <Image
              src={product.image}
              alt={product.name}
              width={280}
              height={280}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-base font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            className="p-2 rounded-full hover:bg-[#029FAE] hover:text-white transition-all duration-200"
            aria-label="Add to cart"
            onClick={handleAddToCart} // Add click handler
          >
            <BsCartDash className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
