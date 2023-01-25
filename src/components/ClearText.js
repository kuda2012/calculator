import React, { useEffect, useState } from "react";
import "../styles/ClearText.css";

const ClearText = ({ setcurrentCalculation }) => {
  return (
    <div className="ClearText" onClick={() => setcurrentCalculation(0)}>
      Del
    </div>
  );
};
export default ClearText;
