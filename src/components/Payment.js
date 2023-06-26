import React from "react";
import style from "./Payment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/GlobalContext";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../context/AppReducer";

const Payment = () => {
  const { basket, user } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/orders", { replace: true });
  };
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className={style.payment}>
      <div className={style.paymentContenar}>
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className={style.paymentSection}>
          <div className={style.paymentTitle}>
            <h3>Delivery Address</h3>
          </div>
          <div className={style.paymentAddrress}>
            <p>{user?.email}</p>
            <p>Damascus Syria</p>
          </div>
        </div>
        <div className={style.paymentSection}>
          <div className={style.paymentTitle}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={style.paymentItims}>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className={style.paymentSection}>
          <h3>Payment Method</h3>
          <div className={style.paymentDetails}>
            <form onSubmit={handleSubmit}>
              <div className={style.paymentPrice}>
                <h3>Order Total : {currencyFormat(getBasketTotal(basket))}</h3>
                <button type="submit">
                  <span> "Buy Now"</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
