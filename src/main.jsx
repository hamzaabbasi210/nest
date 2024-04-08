import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AppProvider>
);
