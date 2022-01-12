import "./MyInput.scss";

import React from "react";

enum InputType {
  STRING__TYPE = 'text',
}

type MyInputProps = {
  type?: InputType,
  placeholder?: string,
};

const MyInput: React.FC<MyInputProps> = ({type = InputType.STRING__TYPE, placeholder = ''}: MyInputProps) => {
  return (
    <input type={type} className='myInput' placeholder={placeholder} />
  );
};

export default MyInput;
