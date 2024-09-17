import React, { useState, useEffect } from "react";
import employeeService from "../../store/employeeService";
import useForm from "../../hooks/useForm";
import Employees from "./Employees";
import {
  isPositiveInteger,
  isDuplicateNroDocumento,
  isDuplicateEmail,
  isAlphabetic,
} from "../../helpers/validation";

const EmployeesContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [formValues, handleChange, setFormValues, resetForm] = useForm({
    nombre: "",
    apellido: "",
    nroDocumento: "",
    email: "",
    fechaNacimiento: "",
    fechaIngreso: "",
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
    if (Object.values(formValues).every((value) => value)) {
      if (!isAlphabetic(nombre)) {
        alert("El nombre debe contener solo letras.");
        return;
      }
      if (!isAlphabetic(apellido)) {
        alert("El apellido debe contener solo letras.");
        return;
      }

      if (!isPositiveInteger(nroDocumento)) {
        alert("El número de documento debe ser un entero positivo.");
        return;
      }

      if (
        isDuplicateNroDocumento(
          nroDocumento,
          employees,
          isEditing ? editEmployee.id : null
        )
      ) {
        alert("El número de documento ya existe.");
        return;
      }

      if (
        isDuplicateEmail(email, employees, isEditing ? editEmployee.id : null)
      ) {
        alert("El correo electrónico ya está en uso.");
        return;
      }

      if (isEditing) {
        updateEmployee(editEmployee.id, formValues);
      } else {
        addEmployee(formValues);
      }
    } else {
      alert("Por favor, complete todos los campos.");
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
      fechaIngreso: employee.fechaIngreso,
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

  // Paginación
  const totalItems = employees.length;
  const totalPages = Math.ceil(totalItems / employeesPerPage);

  const getCurrentEmployees = () => {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    return employees.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Employees
      employees={getCurrentEmployees()}
      formValues={formValues}
      isModalOpen={isModalOpen}
      isEditing={isEditing}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      handleEditClick={handleEditClick}
      deleteEmployee={deleteEmployee}
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={employeesPerPage}
      onPageChange={setCurrentPage} // Pasar la función de cambio de página
      onNextPage={handleNextPage} // Pasar la función de siguiente página
      onPreviousPage={handlePreviousPage} // Pasar la función de página anterior
    />
  );
};

export default EmployeesContainer;
