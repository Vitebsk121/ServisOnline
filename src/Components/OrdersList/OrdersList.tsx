import "./OrdersList.scss";

import React, {useState} from "react";
import ordersList from "../../testData/ordersList";
import Order from "../Order/Order";

type OrdersListProps = {};

const OrdersList: React.FC<OrdersListProps> = (props: OrdersListProps) => {
  const [orders, setOrders] = useState([...ordersList])

  return (
    <div className="orders__list__viewport">
      <div className='orders__list__scroll'>
        <table className='main_table orders__list'>
          <thead>
          <tr>
            <th>Номер заказа</th>
            <th>Статус</th>
            <th>А/М</th>
            <th>Создал</th>
            <th>Описание</th>
            <th>Клиент</th>
            <th>Комментарий</th>
            <th>Дата гарантии</th>
          </tr>
          </thead>
          <tbody>
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
