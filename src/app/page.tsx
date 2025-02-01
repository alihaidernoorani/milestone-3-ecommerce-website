"use client"

import Hero from "./components/home/Hero";
import FeaturedProducts from "./components/home/FeaturedProducts";
import TopCategories from "./components/home/TopCategories";
import StyleProducts from "./components/home/StyleProducts";
import OurProducts from "./components/home/OurProducts";
import { useEffect, useState } from "react";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: number; 
  isNew: boolean;
  onSale: boolean;
};

interface CategoryType {
  id: string;
  name: string;
  price: number;
  image: string;
  products: string[]; 
  slug: number; 
}

import { client } from "@/sanity/lib/client";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<CategoryType[]>([]);
  const [styleProducts, setStyleProducts] = useState<ProductType[]>([]);
  const [ourProducts, setOurProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query1 = `*[_type == "products" && "featured" in tags][0...4]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          slug
        }`;

        const query2 = `*[_type == "categories"]{
          "id": _id, 
          "name": title,
          price,
          "image": image.asset->url,
          products,
          slug
        }`;

        const query3 = `*[_type == "products" && "gallery" in tags][0...5]{
          "id": _id,
          "name": title,
          "image": image.asset->url,
          slug
        }`;

        const query4 = `*[_type == "products"][0...8]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          slug
        }`;

        const [featured, categories, styles, allProducts] = await Promise.all([
          client.fetch(query1),
          client.fetch(query2),
          client.fetch(query3),
          client.fetch(query4),
        ]);

        setFeaturedProducts(featured);
        setCategoryProducts(categories);
        setStyleProducts(styles);
        setOurProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center text-center text-red-500 mx-auto">{error}</div>;
  }

  return (
    <div>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <TopCategories categories={categoryProducts} />
      <StyleProducts products={styleProducts} />
      <OurProducts products={ourProducts} />
    </div>
  );
}
