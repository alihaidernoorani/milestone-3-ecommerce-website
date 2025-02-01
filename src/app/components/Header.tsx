"use client";

import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaBars, FaTimes, FaCheck } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { useCart } from "@/app/cart/context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cartItems } = useCart(); // Access cart state from CartContext

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  interface CartItem {
    id: string;
    quantity: number;
  }

  const totalItems: number = cartItems?.reduce((sum: number, item: CartItem) => sum + item.quantity, 0) || 0;

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-[#272343] flex justify-center w-full h-[45px]">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full text-white text-xs px-2">
          <div className="flex items-center gap-2 opacity-70">
            <FaCheck className="text-base" />
            <span>Free shipping on all orders over $50</span>
          </div>
          <div className="flex items-center space-x-6 opacity-70">
            <select name="language" className="bg-[#272343] text-white outline-none">
              <option value="eng">English</option>
              <option value="esp">Español</option>
              <option value="fr">Français</option>
            </select>
            <span>
              <Link href="/pages/faq">Faqs</Link>
            </span>
            <div className="flex items-center gap-2">
              <AiOutlineExclamationCircle className="text-base" />
              <span>
                <Link href="/pages/contact">Need Help</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className="bg-[#F0F2F3] flex justify-center w-full h-[84px]">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full px-2">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={150} height={50} />
          </Link>
          <div className="flex items-center space-x-4">
          <Link href={`/cart`}>
            <button className="relative flex gap-2 items-center justify-center bg-white text-xs font-medium rounded-md px-4 py-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="flex items-center gap-2">
                <BsCartDash />
                <span>Cart</span>
              </span>
              {totalItems > 0 && (
                <span className="inline-flex items-center justify-center rounded-full h-5 w-5 bg-green-800 text-white text-xs">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>

           {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <div className="bg-white text-xs font-medium rounded-md px-4 py-2 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
          </div>
         
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative bg-white w-full h-[74px] flex justify-center border-b">
        <div className="flex justify-between items-center w-full md:w-[80%] h-full px-2">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center text-sm">
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href={`/product/1`}>Product</Link>
            </li>
            <li className="relative group">
              Pages
              <ul className="absolute z-10 hidden group-hover:inline-block left-0 top-full bg-white text-nowrap p-2 space-y-2 rounded-md shadow-md">
                <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                  <Link href="/pages/contact">Contact Us</Link>
                </li>
                <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
                  <Link href="/pages/faq">FAQ</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-[#029FAE] transition-colors">
              <Link href="/about">About</Link>
            </li>
          </ul>

          {/* Contact Information */}
          <div className="hidden md:block text-sm">
            <span>
              Contact: <span className="font-medium">+(84) 546-6789</span>
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center text-xl text-[#272343]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="z-20 absolute top-[74px] w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href={`/product/1`}>Product</Link>
            </li>
            <li className="relative">
              Pages
              <ul className="mt-2 pl-4 space-y-2">
                <li>
                  <Link
                    href="/pages/contact"
                    className="hover:text-[#029FAE] hover:font-bold"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/faq"
                    className="hover:text-[#029FAE] hover:font-bold"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-[#029FAE] hover:font-bold transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="mt-4 border-t pt-4 text-sm">
              Contact: <span className="font-medium">+(84) 546-6789</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
