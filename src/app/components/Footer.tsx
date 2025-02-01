import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="w-[80%] flex flex-col sm:flex-wrap md:flex-nowrap md:flex-row justify-center text-center md:text-start items-center md:items-start gap-4 ">
          {/* Logo and Social Media */}
          <div className="flex flex-col space-y-2 md:w-[40%] mb-6">
            <Image src={Logo} alt="Logo" width={150} height={50} className="mx-auto md:mx-0" />
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href={"/"}>
                <FaFacebook aria-label="Facebook" />
              </Link>
              <Link href={"/"}>
                <FaTwitter aria-label="Twitter" />
              </Link>
              <Link href={"/"}>
                <FaInstagram aria-label="Instagram" />
              </Link>
              <Link href={"/"}>
                <FaPinterest aria-label="Pinterest" />
              </Link>
              <Link href={"/"}>
                <FaYoutube aria-label="YouTube" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col space-y-2 w-[25%] mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ">
              CATEGORY
            </h2>
            <nav className="flex flex-col">
              <Link href={"/"}>Sofa</Link>
              <Link href={"/"}>Armchair</Link>
              <Link href={"/"}>Wing Chair</Link>
              <Link href={"/"}>Wooden Chair</Link>
              <Link href={"/"}>Park Bench</Link>
            </nav>
          </div>

          {/* Support */}
          <div className="w-1/3 mb-6">
            <h2 className="title-font font-medium text-gray-900 text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="flex flex-col space-y-2">
              <Link href={"/"}>Help & Support</Link>
              <Link href={"/"}>Terms & Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Help</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="w-2/3 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex flex-col lg:flex-row items-center md:items-start gap-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4"
              />
              <button className="w-full md:w-auto bg-[#029FAE] text-white py-2 px-6 rounded hover:bg-indigo-600">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full py-4">
        <div className="w-full max-w-[80%] flex flex-col mx-auto ">
          <p className="text-gray-500 text-sm">
            © 2025 Blogy - Developed by Ali Haider Noorani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
