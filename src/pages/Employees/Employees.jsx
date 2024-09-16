import React, { useState, useEffect } from 'react';
import employeeService from '../../store/employeeService';
import useForm from '../../hooks/useForm';
import styles from './Employees.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

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

    if (Object.values(formValues).every(value => value)) {
      if (isEditing) {
        updateEmployee(editEmployee.id, formValues);
      } else {
        addEmployee(formValues);
      }
    } else {
      alert('Please fill in all fields.');
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

  const handleNextPage = () => {
    if ((currentPage * employeesPerPage) < employees.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.employeesContainer}>
      <button className={styles.addButton} onClick={handleOpenModal}>Registrar empleado</button>

      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nro Documento</th>
              <th>Email</th>
              <th>Fecha Nacimiento</th>
              <th>Fecha Ingreso</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentEmployees().map((employee) => (
              <tr key={employee.id}>
                <td>{employee.nombre}</td>
                <td>{employee.apellido}</td>
                <td>{employee.nroDocumento}</td>
                <td>{employee.email}</td>
                <td>{employee.fechaNacimiento}</td>
                <td>{employee.fechaIngreso}</td>
                <td>
                  <button onClick={() => handleEditClick(employee)} aria-label="Edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteEmployee(employee.id)} aria-label="Delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <span>Página {currentPage}</span>
        <button onClick={handleNextPage} disabled={(currentPage * employeesPerPage) >= employees.length}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{isEditing ? 'Editar empleado' : 'Registrar empleado'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
              />
              <input
                type="text"
                name="apellido"
                value={formValues.apellido}
                onChange={handleChange}
                placeholder="Apellido"
                required
              />
              <input
                type="text"
                name="nroDocumento"
                value={formValues.nroDocumento}
                onChange={handleChange}
                placeholder="Nro Documento"
                required
              />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="date"
                name="fechaNacimiento"
                value={formValues.fechaNacimiento}
                onChange={handleChange}
                placeholder="Fecha de Nacimiento"
                required
              />
              <input
                type="date"
                name="fechaIngreso"
                value={formValues.fechaIngreso}
                onChange={handleChange}
                placeholder="Fecha de Ingreso"
                required
              />
              <button type="submit">{isEditing ? 'Actualizar' : 'Registrar'}</button>
              <button type="button" className={styles.cancelButton} onClick={handleCloseModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
