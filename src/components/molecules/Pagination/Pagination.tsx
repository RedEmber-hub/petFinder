import { PaginationProps } from './Pagination.type';
import { Button } from '@/components/atoms/Button';
import './Pagination.scss';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  }

  return (
    <div className="pagination flex gap_4 items-center justify-center mt_20">
      <Button icon="arrow-left" onClick={() => goToPage(currentPage - 1)} />

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`pagination__page ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => goToPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <Button icon="arrow-right" onClick={() => goToPage(currentPage + 1)} />
    </div>
  );
}
