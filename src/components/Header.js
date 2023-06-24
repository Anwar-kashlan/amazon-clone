import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import style from "./Header.module.css";
import { useAuth } from "../context/GlobalContext";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const authHandle = () => {
    auth.signOut();
  };
  return (
    <div className={style.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={style.headerLogo} />
      </Link>
      <div className={style.headerSearch}>
        <input type="text" className={style.headerInput} />
        <SearchIcon className={style.searchIcon} />
      </div>
      <div className={style.headerNav}>
        <Link to={!user && "/login"}>
          <div className={style.headerOption} onClick={authHandle}>
            <span className={style.headerOptionLineOne}>
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className={style.headerOptionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className={style.headerOption}>
            <span className={style.headerOptionLineOne}>Returns</span>
            <span className={style.headerOptionLineTwo}>& Order</span>
          </div>
        </Link>
        <div className={style.headerOption}>
          <span className={style.headerOptionLineOne}>You are</span>
          <span className={style.headerOptionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={style.optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${style.headerBasketCount} ${style.headerOptionLineTwo}`}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
