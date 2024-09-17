import React, { useState, useEffect } from 'react';
import employeeService from '../../store/employeeService';
import useForm from '../../hooks/useForm';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Employees.module.css';
import { isPositiveInteger, isDuplicateNroDocumento, isDuplicateEmail, isAlphabetic } from '../../helpers/validation';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formValues, handleChange, setFormValues, resetForm] = useForm({
    nombre: '',
    apellido: '',
    nroDocumento: '',
    email: '',
    fechaNacimiento: '',
    fechaIngreso: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await employeeService.getEmployees();
    setEmployees(data);
  };

  const addEmployee = async (employee) => {
    await employeeService.addEmployee(employee);
    fetchEmployees();
    handleCloseModal();
  };

  const updateEmployee = async (id, employee) => {
    await employeeService.updateEmployee(id, employee);
    fetchEmployees();
    handleCloseModal();
  };

  const deleteEmployee = async (id) => {
    await employeeService.deleteEmployee(id);
    fetchEmployees();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido, nroDocumento, email } = formValues;

    // Verifica que todos los campos estén llenos
    if (Object.values(formValues).every(value => value)) {
      if (!isAlphabetic(nombre)) {
        alert('El nombre debe contener solo letras.');
        return;
      }
      if (!isAlphabetic(apellido)) {
        alert('El apellido debe contener solo letras.');
        return;
      }

      if (!isPositiveInteger(nroDocumento)) {
        alert('El número de documento debe ser un entero positivo.');
        return;
      }

      if (isDuplicateNroDocumento(nroDocumento, employees, isEditing ? editEmployee.id : null)) {
        alert('El número de documento ya existe.');
        return;
      }

      if (isDuplicateEmail(email, employees, isEditing ? editEmployee.id : null)) {
        alert('El correo electrónico ya está en uso.');
        return;
      }

      if (isEditing) {
        updateEmployee(editEmployee.id, formValues);
      } else {
        addEmployee(formValues);
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const handleEditClick = (employee) => {
    setEditEmployee(employee);
    setFormValues({
      nombre: employee.nombre,
      apellido: employee.apellido,
      nroDocumento: employee.nroDocumento,
      email: employee.email,
      fechaNacimiento: employee.fechaNacimiento,
      fechaIngreso: employee.fechaIngreso
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    setEditEmployee(null);
    resetForm();
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditEmployee(null);
    resetForm();
  };

  const getCurrentEmployees = () => {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    return employees.slice(startIndex, endIndex);
  };

  return (
    <div className={styles.employeesContainer}>
      <button className={styles.addButton} onClick={handleOpenModal}>Registrar empleado</button>

      <div className={styles.tableContainer}>
        <EmployeeTable
          employees={getCurrentEmployees()}
          onEditClick={handleEditClick}
          onDeleteClick={deleteEmployee}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={employees.length}
        itemsPerPage={employeesPerPage}
        onPageChange={setCurrentPage}
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
