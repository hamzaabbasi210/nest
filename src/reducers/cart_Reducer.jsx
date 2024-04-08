function cart_Reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
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
        console.log(curElem);
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
        console.log(curElem);
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
    if (state.cart !== null) {
      let total_price = state.cart.reduce((accum, curVal) => {
        let { price, quantity } = curVal;
        accum = accum + price * quantity;

        return accum;
      }, 0);

      return {
        ...state,
        total_amount: total_price,
      };
    }
  }
}
export default cart_Reducer;
