import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./EmployeeTable.module.css";

const EmployeeTable = ({ employees, onEditClick, onDeleteClick }) => {
  return (
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
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.nombre}</td>
            <td>{employee.apellido}</td>
            <td>{employee.nroDocumento}</td>
            <td>{employee.email}</td>
            <td>{employee.fechaNacimiento}</td>
            <td>{employee.fechaIngreso}</td>
            <td>
              <button onClick={() => onEditClick(employee)} aria-label="Edit">
                <FaEdit />
              </button>
              <button
                onClick={() => onDeleteClick(employee.id)}
                aria-label="Delete"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
