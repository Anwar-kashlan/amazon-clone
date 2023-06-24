import React from "react";
import { useAuth } from "../context/GlobalContext";
import Order from "./Order";
import style from "./Orders.module.css";
const Orders = () => {
  const { basket } = useAuth();

  return (
    <div className={style.orders}>
      <h1>Your Orders</h1>
      <div className={style.ordersOrder}>
        <Order basket={basket} />
      </div>
    </div>
  );
};

export default Orders;
