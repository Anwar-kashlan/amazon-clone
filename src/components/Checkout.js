import React from "react";
import style from "./Checkout.module.css";
import adImg from "../imgs/checkoutAd.jpg";
import { useAuth } from "../context/GlobalContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const { user, basket } = useAuth();
  return (
    <div className={style.checkout}>
      <div className={style.checkoutLeft}>
        <img className={style.checkoutAd} src={adImg} alt="Ad" />
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className={style.checkoutTitle}>Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))
          ) : (
            <div className={style.fMsg}>
              Your Amazon Cart is empty.
              <br /> To buy one or more items click "Add to Basket".
            </div>
          )}
        </div>
      </div>
      <div className={style.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
