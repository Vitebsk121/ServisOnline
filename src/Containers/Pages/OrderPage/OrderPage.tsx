import "./OrderPage.scss";

import React from "react";
import Controls from "../../../Components/ControlsOrderPage/Controls";
import NewOrder from "../../../Components/NewOrder/NewOrder";
import OrdersList from "../../../Components/OrdersList/OrdersList";
import useTypedSelector from "../../../hooks/useTypedSelector";

type OrderPageProps = {};

const OrderPage: React.FC<OrderPageProps> = (props: OrderPageProps) => {
  const { backDropIsOpen } = useTypedSelector((state) => state.appState);
  return (
    <div className='orderPage'>
      <Controls />
      {backDropIsOpen ? <NewOrder /> : null}
      <OrdersList />
    </div>
  );
};

export default OrderPage;
