import React from "react";
import "./contact.css";

const FormInput = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  name,
  required,
  autoComplete,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};
export default FormInput;
