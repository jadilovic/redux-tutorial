import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
import { createStore } from "redux";
import { act } from "react-dom/test-utils";
import reducer from "./reducer";
// react-redux - Provided - Wraps app - connect used in components
import { Provider } from "react-redux";

// reducer
function App() {
  // cart setup

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
