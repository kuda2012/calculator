import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Operations from "./Operations.js";
import DisplayWindow from "./DisplayWindow.js";
import NumbersDecimalEquals from "./NumbersDecimalEquals.js";
import "../styles/CalculatorContainer.css";
import "../styles/Column.css";

/**Container that the calculator will go in*/
const CalculatorContainer = () => {
  const [currentCalculation, setcurrentCalculation] = useState(0);
  const operations = ["+", "-", "/", "*"];
  return (
    <Container className="CalculatorContainer">
      <DisplayWindow currentCalculation={currentCalculation} />
      <Operations
        setcurrentCalculation={setcurrentCalculation}
        currentCalculation={currentCalculation}
        operations={operations}
      />
      <NumbersDecimalEquals
        setcurrentCalculation={setcurrentCalculation}
        currentCalculation={currentCalculation}
        operations={operations}
      />
    </Container>
  );
};

export default CalculatorContainer;
