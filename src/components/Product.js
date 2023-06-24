import React from "react";
import style from "./Product.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useAuth } from "../context/GlobalContext";

const Product = ({ id, title, price, image, rating }) => {
  const { dispatch } = useAuth();
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_Basket",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className={style.product}>
      <div className={style.productInfo}>
        <p>{title}</p>
        <div className={style.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRateIcon style={{ color: "gold" }} />
              </p>
            ))}
        </div>
        <p className={style.productPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="product-img" />
      <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
