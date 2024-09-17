import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onNextPage,
  onPreviousPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.pagination}>
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <span>Página {currentPage}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
