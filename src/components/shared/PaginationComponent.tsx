import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IMeta } from "@/types";
import { useState } from "react";

interface IPaginationComponentProps {
  meta: IMeta;
  onPageChange: (page: number) => void;
}

function PaginationComponent({
  meta,
  onPageChange,
}: IPaginationComponentProps) {
  const [currentPage, setCurrentPage] = useState(meta?.page);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const items = [];
    if (meta?.totalPages <= 3) {
      // Show all pages if total pages are 3 or less
      for (let i = 1; i <= meta?.totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show first, current, and last pages with ellipsis if total pages are more than 3
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={1 === currentPage}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      if (currentPage > 1 && currentPage < meta.totalPages) {
        items.push(
          <PaginationItem key={currentPage}>
            <PaginationLink
              isActive={true}
              onClick={() => handlePageChange(currentPage)}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < meta.totalPages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={meta.totalPages}>
          <PaginationLink
            isActive={meta.totalPages === currentPage}
            onClick={() => handlePageChange(meta.totalPages)}
          >
            {meta.totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <Pagination className="cursor-pointer">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, meta.totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
