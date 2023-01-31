import React, { useEffect, useState } from "react";
import { appendCurrentCalculation } from "../helpers/appendCurrentCalculation";
import { solveOperand } from "../helpers/solveOperand";

const Number = ({
  number,
  decimal,
  equal,
  setcurrentCalculation,
  currentCalculation,
  operations,
}) => {
  /**
   * Button for numbers, =, or .
   * */
  return (
    <div
      onClick={() => {
        equal
          ? solveOperand({ currentCalculation, setcurrentCalculation })
          : appendCurrentCalculation({
              number,
              decimal,
              currentCalculation,
              setcurrentCalculation,
              operations,
            });
      }}
    >
      {!isNaN(number) ? number : decimal ? decimal : equal}
    </div>
  );
};
export default Number;
