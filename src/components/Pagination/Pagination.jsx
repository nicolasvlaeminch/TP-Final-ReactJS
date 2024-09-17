import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
        onPageChange(currentPage - 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <span>Página {currentPage}</span>
            <button onClick={handleNextPage} disabled={(currentPage * itemsPerPage) >= totalItems}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Pagination;
