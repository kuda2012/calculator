import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Number from "./Number.js";
import "../styles/Column.css";
const NumbersDecimalEquals = ({
  currentCalculation,
  setcurrentCalculation,
  operations,
}) => {
  return (
    <>
      <Row>
        <Col className="Column">
          <Number
            number={"1"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"2"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"3"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={"4"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"5"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"6"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={"7"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"8"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={"9"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={"0"}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            decimal={"."}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            equal={"="}
            setcurrentCalculation={setcurrentCalculation}
            operations={operations}
            currentCalculation={currentCalculation}
          ></Number>
        </Col>
      </Row>
    </>
  );
};
export default NumbersDecimalEquals;
