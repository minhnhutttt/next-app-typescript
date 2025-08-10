"use client";
import { useState } from "react";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPages,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const maxVisible = 6; // tối đa số button hiển thị

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getPageNumbers = () => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const left = 2;
    const right = totalPages - 1;

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center md:gap-5 gap-[15px]">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50"
      >
        <svg className="max-md:w-[11px]" xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M15 2L2 15L15 28" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {getPageNumbers().map((page, idx) => {
        const isActive = page === currentPage;
        const isDots = page === "...";

        return isDots ? (
          <span
            key={`dots-${idx}`}
            className="flex items-center justify-center"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page as number)}
            className={`md:size-[56px] size-8 rounded-full  flex items-center justify-center md:text-[24px] text-[16px] font-bold transition-all duration-200
              ${
                isActive
                  ? "bg-[#457F89] text-white shadow-[0_3px_0_0_#27464B]"
                  : "bg-[#EBEBEB] text-[#666] shadow-[0_3px_0_0_#666]"
              }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50"
      >
        <svg className="max-md:w-[11px]" xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
  <path d="M2 28L15 15L2 2" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </button>
    </div>
  );
}
