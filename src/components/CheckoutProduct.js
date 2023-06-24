import React from "react";
import style from "./CheckoutProduct.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useAuth } from "../context/GlobalContext";

const CheckoutProduct = ({ id, title, price, image, rating, hiddenButton }) => {
  const { dispatch } = useAuth();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={style.checkoutProduct}>
      <img
        className={style.checkoutProductImage}
        src={image}
        alt="product-img"
      />
      <div className={style.checkoutProductInfo}>
        <p className={style.checkoutProductTitle}>{title}</p>
        <p className={style.checkoutProductPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={style.checkoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRateIcon style={{ color: "gold" }} />
              </p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeProduct}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
