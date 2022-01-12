import "./Controls.scss";

import React from "react";
import MyButton, {buttonClass} from "../UI/Buttons/MyButton";
import MyInput from "../UI/Inputs/MyInput";
import {useDispatch} from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import {openBackdrop} from "../../store/actions/appActions";

type ControlsProps = {};

const Controls: React.FC<ControlsProps> = (props: ControlsProps) => {

  const dispatch = useDispatch();
  const { backDropIsOpen } = useTypedSelector((state) => state.appState);

  const backdropHandler = () => {
    dispatch(backDropIsOpen ? null : openBackdrop());
  };

  const addNewOrder = () => {
    backdropHandler()
  }

  return (
    <div className="controls">
      <MyButton
        buttonClass={buttonClass.SUCCESS_BTN}
        buttonText={'+ Заказ'}
        onClick={addNewOrder}
      />
      <div className="btnLine" />
      <MyButton
        buttonClass={buttonClass.SECONDARY_BTN}
        buttonText={'Фильтр'}
      />
      <div className="btnLine" />
      <MyInput placeholder={'Поиск'} />
    </div>
  );
};

export default Controls;
