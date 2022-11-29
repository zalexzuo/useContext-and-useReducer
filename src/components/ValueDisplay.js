import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ValueDisplay = () => {
  const [state, dispatch] = useContext(MyContext);
  return <p onClick={() => dispatch({ type: "reset" })}>{state.count}</p>;
};

export default ValueDisplay;
