import React, { useEffect, useState } from "react";

const Number = ({
  number,
  decimal,
  equal,
  setDisplayNumber,
  displayNumber,
}) => {
  function appendDisplayNumber() {
    if (displayNumber === 0) {
      setDisplayNumber(number);
    } else {
      if (decimal && !String(displayNumber).includes(".")) {
        setDisplayNumber(String(displayNumber).concat(decimal));
      } else {
        console.log("hi", parseFloat(String(displayNumber).concat(number)));
        setDisplayNumber(parseFloat(String(displayNumber).concat(number)));
      }
    }
  }

  return (
    <div onClick={() => appendDisplayNumber()}>
      {!isNaN(number) ? number : decimal ? decimal : equal}
    </div>
  );
};
export default Number;
