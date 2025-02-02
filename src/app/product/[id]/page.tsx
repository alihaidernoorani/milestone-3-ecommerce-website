"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { BsCartDash } from "react-icons/bs";
import FeaturedProductsCard from "@/app/components/cards/FeaturedProductsCard";
import { useCart } from "@/app/cart/context/CartContext";
import toast from "react-hot-toast";

interface ProductType {
  id: string;
  name: string;
  price: number;
  onSale: boolean;
  isNew: boolean;
  image: string;
  description: string;
  slug: number;
}

const ProductPage = ({ params }: { params: { id: number } }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query1 = `*[_type == "products"]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          description,
          slug
        }`;

        const query2 = `*[_type == "products" && "featured" in tags]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          slug
        }`;

        const [fetchedProducts, fetchedFeaturedProducts] = await Promise.all([
          client.fetch(query1),
          client.fetch(query2),
        ]);

        setProducts(fetchedProducts);
        setFeaturedProducts(fetchedFeaturedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Debugging logs (Check console output)
  console.log("params.id:", params.id);
  console.log("products:", products);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

 // Convert params.id to a number if it comes as a string
 const productId = Number(params.id);

 // Find the product with the matching slug
 const product = products.find((p) => p.slug === productId);

  if (!product) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const { id, name, price, description, image } = product;

  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-center md:text-start space-y-4">
          <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4">
            {name}
          </h1>
          <span className="bg-[#029FAE] text-white rounded-full p-2">{`$${price.toLocaleString()}.00 USD`}</span>
          <hr />
          <p>{description}</p>
          <button
            className="bg-[#029FAE] text-white px-6 py-3 rounded-lg"
            onClick={() => {
              addToCart({ ...product, quantity: 1 });
              toast(`${name} has been added to the cart!`);
            }}
          >
            <BsCartDash className="inline mr-2 text-xl" />
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="md:text-xl lg:text-2xl xl:text-3xl font-bold mb-10 text-center md:text-start">
          FEATURED PRODUCTS
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          {featuredProducts.map((product) => (
            <FeaturedProductsCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
