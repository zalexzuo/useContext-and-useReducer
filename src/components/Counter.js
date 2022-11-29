import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

import styles from "./Counter.module.scss";
import ValueDisplay from "./ValueDisplay";

const Counter = () => {
  const [state, dispatch] = useContext(MyContext);

  return (
    <React.Fragment>
      <div className={styles.counterContainer}>
        <h2>Counter</h2>
        <ValueDisplay />
        <div className={styles.btnField}>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
