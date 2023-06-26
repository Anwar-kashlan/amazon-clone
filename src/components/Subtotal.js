import React, { Fragment } from "react";
import style from "./Subtotal.module.css";
import { useAuth } from "../context/GlobalContext";
import { getBasketTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const { basket } = useAuth();
  const navigate = useNavigate();
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className={style.subtotal}>
      <Fragment>
        <p>
          Subtotal ({basket.length} items):{" "}
          <strong>{currencyFormat(getBasketTotal(basket))}</strong>
        </p>
        <small className={style.subtotalGift}>
          <input type="checkBox" /> This order contains a gift
        </small>
      </Fragment>
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
