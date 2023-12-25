import React from "react";

const Pagination = ({ currentPage, filteredData, ITEMS_PER_PAGE, paginate }) => {
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages || currentPage * ITEMS_PER_PAGE >= filteredData.length;

  const renderPagination = () => {
    const pagesToShow = 3; // Number of pages to show

    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const page = startPage + index;
      return (
        <li key={index} className="page-item">
          <a
            className={`page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 text-[#373737] focus:shadow-none ${
              currentPage === page ? "bg-[#37373775] text-[#fff]" : ""
            }`}
            href="#"
            onClick={() => paginate(page)}
          >
            {page}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li
            className={`page-item ${isPreviousDisabled ? "disabled" : ""}`}
            onClick={() => !isPreviousDisabled && paginate(currentPage - 1)}
          >
            <a
              className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                isPreviousDisabled ? "text-gray-500 pointer-events-none" : "text-[#373737]  hover:bg-[#373737] hover:text-[#fff]"
              } focus:shadow-none`}
              href="#"
              tabIndex="-1"
            >
              Previous
            </a>
          </li>

          {renderPagination()}

          <li
            className={`page-item ${isNextDisabled ? "disabled" : ""}`}
            onClick={() => !isNextDisabled && paginate(currentPage + 1)}
          >
            <a
              className={`page-lin relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                isNextDisabled ? "text-gray-500 pointer-events-none" : "text-[#373737]  hover:bg-[#373737] hover:text-[#fff]"
              } focus:shadow-none`}
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
