import React, { useEffect, useState } from "react";
import "../styles/ClearText.css";

const ClearText = ({ setDisplayNumber }) => {
  return (
    <div className="ClearText" onClick={() => setDisplayNumber(0)}>
      Del
    </div>
  );
};
export default ClearText;
