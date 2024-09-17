import React from "react";
import { EmployeeTable, EmployeeModal, Pagination } from "../../components";
import styles from "./Employees.module.css";

const Employees = ({
  employees,
  formValues,
  isModalOpen,
  isEditing,
  handleChange,
  handleSubmit,
  handleOpenModal,
  handleCloseModal,
  handleEditClick,
  deleteEmployee,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <div className={styles.employeesContainer}>
      <button className={styles.addButton} onClick={handleOpenModal}>
        Registrar empleado
      </button>

      <div className={styles.tableContainer}>
        <EmployeeTable
          employees={employees}
          onEditClick={handleEditClick}
          onDeleteClick={deleteEmployee}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />

      {isModalOpen && (
        <EmployeeModal
          isEditing={isEditing}
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Employees;
