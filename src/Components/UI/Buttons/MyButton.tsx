import "./MyButton.scss";

import React from "react";

export enum buttonClass {
  SUCCESS_BTN = 'success',
  CANCEL_BTN = 'cancel',
  DISABLED_BTN = 'disabled',
  SECONDARY_BTN = 'secondary',
}

type MyButtonProps = {
  buttonText?: string,
  buttonClass: buttonClass,
  onClick?: () => void,
};

const MyButton: React.FC<MyButtonProps> = ({buttonText = '', buttonClass, onClick}: MyButtonProps) => {

  const cls = () => {
    return ['myButton', buttonClass].join(' ');
  }

  return (
    <button className={cls()} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default MyButton;
