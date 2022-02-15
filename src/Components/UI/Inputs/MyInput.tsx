import "./MyInput.scss";

import React from "react";

type OrderInputProps = {
  name: string
  type: string
  inputHandleChange: {(e: React.ChangeEvent<any>): void, <T_1=string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
  inputValue: string
  placeholder: string
  error?: string
};

const MyInput: React.FC<OrderInputProps> = ({name, type, inputHandleChange, inputValue, placeholder, error }: OrderInputProps) => {
  return (
    <div className="input_wrapper">
      <input
      className="myInput"
      id={name}
      name={name}
      type={type}
      placeholder=' '
      onChange={inputHandleChange}
      value={inputValue}
    />
      <label className="input__msg">{error}</label>
      <label className="input__placeholder">{placeholder}</label>
    </div>
  );
};

export default MyInput;
