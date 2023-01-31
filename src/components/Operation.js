import React, { useEffect, useState } from "react";
import { appendCurrentCalculation } from "../helpers/appendCurrentCalculation";
import "../styles/Operation.css";

const Operation = ({
  currentOperation,
  currentCalculation,
  setcurrentCalculation,
  operations,
}) => {
  /**
   * Mathmatical operator button.  + - / *
   */
  return (
    <div
      className="Operation"
      onClick={() =>
        appendCurrentCalculation({
          currentOperation,
          currentCalculation,
          setcurrentCalculation,
          operations,
        })
      }
    >
      {currentOperation}
    </div>
  );
};
export default Operation;
