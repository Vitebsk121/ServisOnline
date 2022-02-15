import "./Order.scss";

import React from "react";
import {OrderType} from "../../types/orderTypes";

type OrderProps = {
  order: OrderType
};

const Order: React.FC<OrderProps> = ({order}: OrderProps) => {
  return (
    <tr className='order__item'>
      <td>{order.id}</td>
      <td>{order.status}</td>
      <td>
        <table className='secondary__table'>
          <tbody>
          <tr>
            <td>{`${order.cars[0].name} ${order.cars[0].model}`}</td>
          </tr>
          <tr>
            <td>{order.cars[0].plate}</td>
          </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table className='secondary__table'>
          <tbody>
          <tr>
            <td>{order.createdBy}</td>
          </tr>
          <tr>
            <td>{order.createdDate}</td>
          </tr>
          </tbody>
        </table>
      </td>
      <td>{order.orderShortDescription}</td>
      <td>
        <table className='secondary__table'>
          <tbody>
          <tr>
            <td>{`${order.client.lastName} ${order.client.firstName} ${order.client.secondName}`}</td>
          </tr>
          <tr>
            <td>{order.client.telephone}</td>
          </tr>
          </tbody>
        </table>
      </td>
      <td>{order.client.comment}</td>
      <td>{order.guaranteeDate}</td>
    </tr>
  );
};

export default Order;
