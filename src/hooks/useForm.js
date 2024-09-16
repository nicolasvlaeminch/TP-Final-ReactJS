import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const setFormValues = (newValues) => {
    setValues(newValues);
  };

  const resetForm = () => setValues(initialValues);

  return [values, handleChange, setFormValues, resetForm];
};

export default useForm;
