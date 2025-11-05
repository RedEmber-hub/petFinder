import { jsx as _jsx } from "react/jsx-runtime";
import './Pagination.scss';
export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    function goToPage(page) {
        if (page < 1 || page > totalPages)
            return;
        onPageChange(page);
    }
    return (_jsx("div", { className: "pagination flex gap_4 items-center justify-center mt_20", children: Array.from({ length: totalPages }, (_, i) => (_jsx("button", { className: `pagination__page ${currentPage === i + 1 ? 'active' : ''}`, onClick: () => goToPage(i + 1), children: i + 1 }, i))) }));
}
