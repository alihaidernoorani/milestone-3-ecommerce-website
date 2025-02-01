import React from 'react';

interface CategoryType {
  id: string;
  name: string;
}

interface CategoriesProps {
  categories: CategoryType[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="w-[80%] mx-auto mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h2>
      <ul className="flex flex-wrap gap-4">
        {/* All Categories Option */}
        <li
          className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
          }`}
          onClick={() => onCategorySelect(null)}
        >
          All
        </li>
        {/* Render Categories */}
        {categories.map((category) => (
          <li
            key={category.id}
            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
            onClick={() => onCategorySelect(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
