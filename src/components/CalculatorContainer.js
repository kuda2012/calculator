import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Operations from "./Operations.js";
import DisplayWindow from "./DisplayWindow.js";
import NumbersDecimalEquals from "./NumbersDecimalEquals.js";
import "../styles/CalculatorContainer.css";
import "../styles/Column.css";

const CalculatorContainer = () => {
  const [displayNumber, setDisplayNumber] = useState(0);
  return (
    <Container className="CalculatorContainer">
      <DisplayWindow displayNumber={displayNumber} />
      <Operations setDisplayNumber={setDisplayNumber} />
      <NumbersDecimalEquals
        setDisplayNumber={setDisplayNumber}
        displayNumber={displayNumber}
      />
    </Container>
  );
};

export default CalculatorContainer;
