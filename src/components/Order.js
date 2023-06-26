import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import style from "./Order.module.css";
import { getBasketTotal } from "../context/AppReducer";

const Order = ({ basket }) => {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className={style.order}>
      {basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <h3 className={style.orderTotal}>
        Order Total: {currencyFormat(getBasketTotal(basket))}
      </h3>
    </div>
  );
};

export default Order;
