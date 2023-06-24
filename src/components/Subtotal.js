import React, { Fragment } from "react";
import style from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalContext";
import { getBasketTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const { basket } = useAuth();
  const navigate = useNavigate();
  return (
    <div className={style.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={style.subtotalGift}>
              <input type="checkBox" /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
