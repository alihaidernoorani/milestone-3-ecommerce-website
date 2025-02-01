'use client';

import React, { useState, useEffect } from 'react';
import ProductListing from '../components/shop/ProductListing';
import Subscribe from '../components/shop/Subscribe';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import { client } from '@/sanity/lib/client';
import Categories from '../components/Categories';

interface ProductType {
  id: string;
  name: string;
  price: number;
  onSale: boolean;
  isNew: boolean;
  image: string;
  category: string;
  slug: number;
}

interface CategoryType {
  id: string;
  name: string;
}


const Shop = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [instagramProducts, setInstagramProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query1 = `*[_type == "products"]{
          "id":_id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          "category": category->title,
          slug
        }`;

        const query2 = `*[_type == "products" && "instagram" in tags][0...6]{
          "id":_id,
          "image": image.asset->url
        }`;

        const query3 = `*[_type == "categories"]{
          "id": _id,
          "name": title
        }`;

        const fetchedProducts = await client.fetch(query1);
        const fetchedInstagramProducts = await client.fetch(query2);
        const fetchedCategories = await client.fetch(query3);

        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setInstagramProducts(fetchedInstagramProducts);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedProducts = products;

      if (searchQuery) {
        updatedProducts = updatedProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (filter === 'sale') {
        updatedProducts = updatedProducts.filter(product => product.onSale);
      } else if (filter === 'new') {
        updatedProducts = updatedProducts.filter(product => product.isNew);
      }

      if (selectedCategory) {
        updatedProducts = updatedProducts.filter(
          product => product.category === selectedCategory
        );
      }

      setFilteredProducts(updatedProducts);
      setCurrentPage(1); // Reset to first page on filter change
    };

    applyFilters();
  }, [searchQuery, filter, selectedCategory, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <ProductListing products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
      <Subscribe instagramProducts={instagramProducts} />
    </div>
  );
};

export default Shop;