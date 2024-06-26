import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { LoginProvider } from "./context/loginContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <CartProvider>
      <LoginProvider>
        <App />
        <ToastContainer />
      </LoginProvider>
    </CartProvider>
  </AppProvider>
);
