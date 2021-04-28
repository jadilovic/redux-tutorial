import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { act } from "react-dom/test-utils";
import reducer from "./reducer";
// react-redux - Provided - Wraps app - connect used in components
import { Provider } from "react-redux";

// initial store
const initialStore = {
  cart: cartItems,
  total: 9,
  amount: 8,
};

// reducer
function App() {
  // cart setup

  const store = createStore(reducer, initialStore);

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
