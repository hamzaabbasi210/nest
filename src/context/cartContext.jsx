import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/cart_Reducer";
import axios from "axios";

const CartContaxt = createContext();

const getLocalData = () => {
  let newCartData = localStorage.getItem("cartData");
  if (!newCartData) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const initialState = {
  cart: getLocalData(),
  // cart: [],
  total_amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeItems = (id) => {
    dispatch({ type: "REMOVE_ITEMS", payload: id });
    console.log(id);
  };
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_AMOUNT" });
    localStorage.setItem("cartData", JSON.stringify(state.cart));
  }, [state.cart]);
  // add data to localStorage

  // useEffect(() => {
  //   localStorage.setItem("cartData", JSON.stringify(state.cart));
  // }, []);

  return (
    <CartContaxt.Provider
      value={{
        ...state,
        addToCart,
        removeItems,
        emptyCart,
        decrement,
        increment,
      }}
    >
      {children}
    </CartContaxt.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContaxt);
};
export { CartProvider, CartContaxt, useCartContext };
