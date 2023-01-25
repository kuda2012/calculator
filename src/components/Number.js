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
