import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import style from "./Order.module.css";
import { getBasketTotal } from "../context/AppReducer";

const Order = ({ basket }) => {
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
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className={style.orderTotal}>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
