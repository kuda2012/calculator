import React, { useEffect, useState } from "react";
import "../styles/Value.css";

const Value = ({ currentCalculation }) => {
  return <div className="Value">{currentCalculation}</div>;
};
export default Value;
