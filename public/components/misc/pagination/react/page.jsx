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
  // 假设有10页内容，这个值可能来自于API或其他数据源
  const totalPages = 10;
  // 使用useState来管理当前页码
  const [currentPage, setCurrentPage] = useState(1);

  // 生成页码链接
  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <PaginationItem key={i}>
        <PaginationLink href="#" onClick={(e) => handlePageChange(e, i)} isActive={currentPage === i}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  // 处理页码变更
  const handlePageChange = (event, page) => {
    event.preventDefault(); // 防止页面跳转
    setCurrentPage(page);
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
        {pageLinks}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationDemo;
