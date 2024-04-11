import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../styles/components/ui/pagination"

export function PaginationDemo() {
  const totalPages = 10; // 总页数
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumbersToShow = 5; // 同时显示的最大页码数

  // 处理页码点击
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // 生成页码链接，包括处理省略号逻辑
  const generatePageLinks = () => {
    let pages = [];
    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      // 总页数小于等于要显示的页数，显示所有页码
      startPage = 1;
      endPage = totalPages;
    } else {
      // 需要显示省略号
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

    // 如果开始页码大于1，添加省略号
    if (startPage > 1) {
      pages.unshift(
        <PaginationItem key="startEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    // 如果结束页码小于总页数，添加省略号
    if (endPage < totalPages) {
      pages.push(
        <PaginationItem key="endEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pages;
  };

  // 处理“下一页”点击
  const handleNext = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // 处理“上一页”点击
  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
