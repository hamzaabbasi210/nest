function cart_Reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let existingProduct = state.cart.find(
      (curElem) => curElem.id === action.payload.id
    );
    if (existingProduct) {
      let updateQuantity = state.cart.map((val) => {
        if (val.id === action.payload.id) {
          let newQty = val.quantity + 1;
          return {
            ...val,
            quantity: newQty,
          };
        } else {
          return val;
        }
      });
      return {
        ...state,
        cart: updateQuantity,
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
  }
  if (action.type === "REMOVE_ITEMS") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "EMPTY_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "INCREMENT") {
    let updateQty = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        const newQuantity = curElem.quantity + 1;
        return {
          ...curElem,
          quantity: newQuantity,
        };
      } else {
        return { ...curElem };
      }
    });
    return {
      ...state,
      cart: updateQty,
    };
  }
  if (action.type === "DECREMENT") {
    let updateQty = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);
        const newQuantity = curElem.quantity - 1;
        return {
          ...curElem,
          quantity: newQuantity,
        };
      } else {
        return { ...curElem };
      }
    });
    return {
      ...state,
      cart: updateQty,
    };
  }

  if (action.type === "CART_TOTAL_AMOUNT") {
    let total_price = 0;
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      total_price = state.cart.reduce((accum, curVal) => {
        let { price, quantity } = curVal;
        // Ensure price is converted to a number before performing calculations
        price = parseFloat(price.replace("$", "").replace(",", ""));
        // Check if price is a valid number
        if (!isNaN(price)) {
          accum = accum + price * quantity;
        }
        return accum;
      }, 0);
    }
    console.log(total_price);
    return {
      ...state,
      total_amount: total_price,
    };
  }

  // Default case
  return state;
}

export default cart_Reducer;
