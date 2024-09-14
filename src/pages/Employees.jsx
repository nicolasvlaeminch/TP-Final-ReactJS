import { useEffect, useState } from 'react';
import employeeService from '../store/employeeService';
import useForm from '../hooks/useForm';
import styles from '../styles/Employees.module.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formValues, handleChange, resetForm] = useForm({ name: '', position: '', email: '' });
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modal
  const [editEmployee, setEditEmployee] = useState(null); // Estado para almacenar el empleado a editar

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
    resetForm();
  };

  const updateEmployee = async (id, employee) => {
    await employeeService.updateEmployee(id, employee);
    fetchEmployees();
    setIsEditing(false); // Cerrar el modal después de actualizar
    setEditEmployee(null); // Limpiar el empleado a editar
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
  };

  const handleCloseModal = () => {
    setIsEditing(false);
    setEditEmployee(null);
    resetForm();
  };

  return (
    <div className={styles.employeesContainer}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="position" value={formValues.position} onChange={handleChange} placeholder="Position" required />
        <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">{isEditing ? 'Update Employee' : 'Add Employee'}</button>
      </form>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <span>{employee.name} - {employee.position}</span>
            <button onClick={() => handleEditClick(employee)}>Edit</button>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className={styles.modal}>
          <h2>Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="position" value={formValues.position} onChange={handleChange} placeholder="Position" required />
            <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Update</button>
            <button type="button" onClick={handleCloseModal}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Employees;
