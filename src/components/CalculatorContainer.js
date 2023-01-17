import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Operation from "./Operation.js";
import Number from "./Number.js";
import Value from "./Value.js";
import ClearText from "./ClearText.js";
import "../styles/CalculatorContainer.css";
import "../styles/Column.css";
const CalculatorContainer = () => {
  const [displayNumber, setDisplayNumber] = useState(4);
  return (
    <Container className="CalculatorContainer">
      <Row>
        <Col className="Column">
          <Value displayNumber={displayNumber}></Value>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Operation operand={"/"}></Operation>
        </Col>
        <Col className="Column">
          <Operation operand={"+"}></Operation>
        </Col>
        <Col className="Column">
          <Operation operand={"-"}></Operation>
        </Col>
        <Col className="Column">
          <Operation operand={"*"}></Operation>
        </Col>
        <Col className="Column">
          <ClearText setDisplayNumber={setDisplayNumber}></ClearText>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number number={1} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={2} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={3} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number number={4} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={5} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={6} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number number={7} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={8} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number number={9} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number number={0} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number decimal={"."} setDisplayNumber={setDisplayNumber}></Number>
        </Col>
        <Col className="Column">
          <Number
            equal={"="}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
      </Row>
    </Container>
  );
};

export default CalculatorContainer;
