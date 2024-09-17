// Verifica si el valor es un entero positivo.
export const isPositiveInteger = (value) => {
    const number = Number(value);
    return Number.isInteger(number) && number > 0;
};

// Verifica si el número de documento ya existe en la lista de empleados,
export const isDuplicateNroDocumento = (nroDocumento, employees, excludeId = null) => {
    return employees.some(emp => emp.nroDocumento === nroDocumento && emp.id !== excludeId);
};

// Verifica si el correo electrónico ya existe en la lista de empleados.
export const isDuplicateEmail = (email, employees, excludeId = null) => {
    return employees.some(emp => emp.email === email && emp.id !== excludeId);
};

// Verifica si el valor contiene solo letras.
export const isAlphabetic = (value) => /^[a-zA-Z]+$/.test(value);

// Verifica si el valor contiene solo letras y espacios (para permitir nombres compuestos).
export const isAlphabeticWithSpaces = (value) => /^[a-zA-Z\s]+$/.test(value);
