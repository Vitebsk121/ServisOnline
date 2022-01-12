import "./OrderPage.scss";

import React from "react";
import Controls from "../../../Components/ControlsOrderPage/Controls";
import NewOrder from "../../../Components/NewOrder/NewOrder";

type OrderPageProps = {};

const OrderPage: React.FC<OrderPageProps> = (props: OrderPageProps) => {
  return (
    <div className='orderPage'>
      <Controls />
      <NewOrder />
    </div>
  );
};

export default OrderPage;
