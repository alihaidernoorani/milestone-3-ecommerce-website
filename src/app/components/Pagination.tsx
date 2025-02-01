import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalPages <= 1) return null; // No pagination needed for a single page

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center mt-8">
      <ul className="flex gap-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 rounded ${
                number === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
