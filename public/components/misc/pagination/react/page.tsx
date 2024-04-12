import React, { useState } from 'react';//add ’lucide-react‘ use commad ‘npm install lucide-react’
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../styles/components/ui/pagination"//add PaginationDemo@shadcn UI use cmd “npx shadcn-ui@latest add pagination”

export function PaginationDemo() {
  const totalPages = 10; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumbersToShow = 5; // Maximum number of page numbers to display at once

  // Handle page click
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Generate page links, including logic for ellipses
  const generatePageLinks = () => {
    let pages = [];
    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      // If total pages is less or equal to max pages to show, display all
      startPage = 1;
      endPage = totalPages;
    } else {
      // Need to display ellipses
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page}>
          <PaginationLink href="#" onClick={(e) => handlePageChange(e, page)} isActive={currentPage === page}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // If starting page is greater than 1, add ellipsis at the beginning
    if (startPage > 1) {
      pages.unshift(
        <PaginationItem key="startEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    // If ending page is less than total pages, add ellipsis at the end
    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="endEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pages;
  };

  // Handle "Next" click
  const handleNext = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle "Previous" click
  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
// From @shadcn UI
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handlePrevious} />
        </PaginationItem>
        {generatePageLinks()}
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationDemo;
