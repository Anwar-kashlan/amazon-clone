import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useAuth } from "./context/GlobalContext";
import { useEffect } from "react";
import { auth } from "./firebase";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

function App() {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />

              <Payment />
            </>
          }
        />
        <Route path="*" element={<h1>Sorry, Page not found</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
