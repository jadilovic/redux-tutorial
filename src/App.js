import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { act } from "react-dom/test-utils";
import { INCREASE, DECREASE } from "./actions";
// store.getState()

// initial store
const initialStore = {
  count: 0,
  name: "john",
};

// reducer
function App() {
  // cart setup

  function reducer(state, action) {
    console.log({ state, action });
    if (action.type === DECREASE) {
      console.log("this is working");
      return { ...state, count: state.count - 1 };
    }
    if (action.type === INCREASE) {
      return { ...state, count: state.count + 1 };
    }
    return state;
  }

  const store = createStore(reducer, initialStore);
  console.log(store.getState());
  store.dispatch({ type: DECREASE });
  console.log(store.getState());
  store.dispatch({ type: INCREASE });
  store.dispatch({ type: INCREASE });
  store.dispatch({ type: INCREASE });
  console.log(store.getState());

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
