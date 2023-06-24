import { Link } from "react-router-dom";
import style from "./Login.module.css";
import Logo from "../imgs/login-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={style.login}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={style.loginLogo} />
      </Link>
      <div className={style.loginContainer}>
        <h1>Sign in</h1>
        <form>
          <label htmlFor="email">Enter your email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={style.loginBtn} onClick={signIn}>
            Login
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            className={style.registerBtn}
            type="submit"
            onClick={register}
          >
            Create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
