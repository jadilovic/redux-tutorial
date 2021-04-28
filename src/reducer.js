import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    console.log("you increased amount");
  }
  if (action.type === DECREASE) {
    console.log("you decreased amount");
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  return state;
}

export default reducer;
