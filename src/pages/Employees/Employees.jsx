import { useEffect, useState } from 'react';
import employeeService from '../../store/employeeService';
import useForm from '../../hooks/useForm';
import styles from './Employees.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formValues, handleChange, resetForm] = useForm({ name: '', position: '', email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si está en modo edición
  const [editEmployee, setEditEmployee] = useState(null); // Estado para almacenar el empleado a editar
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
  const employeesPerPage = 5; // Número de empleados por página

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
    handleCloseModal(); // Cerrar el modal después de agregar
  };

  const updateEmployee = async (id, employee) => {
    await employeeService.updateEmployee(id, employee);
    fetchEmployees();
    handleCloseModal(); // Cerrar el modal después de actualizar
  };

  const deleteEmployee = async (id) => {
    await employeeService.deleteEmployee(id);
    fetchEmployees();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.name && formValues.position && formValues.email) {
      if (isEditing) {
        updateEmployee(editEmployee.id, formValues); // Actualizar empleado
      } else {
        addEmployee(formValues); // Agregar nuevo empleado
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleEditClick = (employee) => {
    setEditEmployee(employee);
    handleChange({ target: { name: 'name', value: employee.name } });
    handleChange({ target: { name: 'position', value: employee.position } });
    handleChange({ target: { name: 'email', value: employee.email } });
    setIsEditing(true);
    setIsModalOpen(true); // Abrir el modal en modo edición
  };

  const handleOpenModal = () => {
    setEditEmployee(null);
    resetForm();
    setIsEditing(false);
    setIsModalOpen(true); // Abrir el modal en modo agregar
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cerrar el modal
    setIsEditing(false);
    setEditEmployee(null);
    resetForm();
  };

  // Función para obtener los empleados de la página actual
  const getCurrentEmployees = () => {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    return employees.slice(startIndex, endIndex);
  };

  // Funciones para cambiar de página
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
      <button className={styles.addButton} onClick={handleOpenModal}>Add Employee</button>

      <ul>
        {getCurrentEmployees().map((employee) => (
        <li key={employee.id}>
        <span>{employee.name} - {employee.position}</span>
        <button onClick={() => handleEditClick(employee)} aria-label="Edit">
          <FaEdit />
        </button>
        <button onClick={() => deleteEmployee(employee.id)} aria-label="Delete">
          <FaTrash />
        </button>
      </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>⬅</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={(currentPage * employeesPerPage) >= employees.length}>⮕</button>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" required />
              <input type="text" name="position" value={formValues.position} onChange={handleChange} placeholder="Position" required />
              <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" required />
              <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
              <button type="button" className={styles.cancelButton} onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
