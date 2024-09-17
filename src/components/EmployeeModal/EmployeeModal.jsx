import React from 'react';
import styles from './EmployeeModal.module.css';

const EmployeeModal = ({ isEditing, formValues, handleChange, handleSubmit, handleClose }) => {
    return (
        <div className={styles.modal}>
        <div className={styles.modalContent}>
            <h2>{isEditing ? 'Editar empleado' : 'Registrar empleado'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="textModal"
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                />
                <input
                    type="textModal"
                    name="apellido"
                    value={formValues.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required
                />
                <input
                    type="textModal"
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
                <button type="button" className={styles.cancelButton} onClick={handleClose}>Cancelar</button>
            </form>
        </div>
        </div>
    );
};

export default EmployeeModal;
