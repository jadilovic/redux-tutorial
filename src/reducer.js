import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";
// items
import cartItems from "./cart-items";

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialStore, action) {
  // CLEAR CART
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // INCREASE AMOUNT
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        //  cartItem.amount = cartItem.amount + 1;
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    console.log("you increased amount");
    return { ...state, cart: tempCart };
  }

  // DECREASE AMOUNT
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    console.log("you decreased amount");
    return { ...state, cart: tempCart };
  }

  // REMOVE ITEM
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  // GET TOTALS
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        console.log(cartTotal);
        console.log(cartItem);
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += amount * price;
        console.log(cartTotal);
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
