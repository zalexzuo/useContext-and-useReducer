import React, { useReducer } from "react";

import "./styles.css";
import Counter from "./components/Counter";
import { MyContext } from "./context/MyContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return {
        count: (state.count = 0)
      };
    default:
      return {
        count: state
      };
  }
};

const initialState = {
  count: 0
};

const App = () => {
  const conuterReducer = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <MyContext.Provider value={conuterReducer}>
        <Counter />
      </MyContext.Provider>
    </React.Fragment>
  );
};

export default App;
