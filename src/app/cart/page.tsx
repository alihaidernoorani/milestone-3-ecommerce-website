"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "./context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: any; 
    quantity: number;
  };
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

interface SummaryProps {
  calculateTotal: () => number;
}

const CartPage: React.FC = () => {
  const cartContext = useCart();

  // Handle loading state
  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cart, updateQuantity, removeFromCart } = cartContext;

  // Calculate total price of all items in the cart
  const calculateTotal = (): number =>
    cart.reduce((total: number, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold my-6 text-myDarkOrange">Your Cart</h1>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <p className="text-xl font-semibold text-center">Your Cart is Empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          {/* Summary Section */}
          <div className="border p-6 rounded-lg bg-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
            <Summary calculateTotal={calculateTotal} />
            <button className="w-full py-3 text-white font-semibold rounded-full bg-[#029FAE] hover:bg-[#027f8a]">
              <Link href="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  updateQuantity,
  removeFromCart,
}) => (
  <div className="flex items-center border p-4 rounded-lg space-x-6">
    <Image
      src={urlFor(item.image).url()}
      alt={item.name}
      width={100}
      height={100}
      className="object-cover rounded-md"
    />
    <div className="flex-1">
      <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
      <p className="text-gray-600 flex items-center space-x-2">
        <span>Quantity:</span>
        <button
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          +
        </button>
      </p>
      <div className="flex items-center space-x-4 mt-2">
        <FaRegHeart />
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
    <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
  </div>
);

const Summary: React.FC<SummaryProps> = ({ calculateTotal }) => (
  <>
    <div className="flex justify-between text-lg text-gray-600">
      <p>Subtotal:</p>
      <p>${calculateTotal().toFixed(2)}</p>
    </div>
    <div className="flex justify-between text-lg text-gray-600">
      <p>Estimated Delivery:</p>
      <p>Free</p>
    </div>
    <div className="flex justify-between text-xl font-bold text-gray-800">
      <p>Total:</p>
      <p>${calculateTotal().toFixed(2)}</p>
    </div>
  </>
);

export default CartPage;
