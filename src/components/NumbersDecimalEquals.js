import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Number from "./Number.js";
import "../styles/Column.css";
const NumbersDecimalEquals = ({ displayNumber, setDisplayNumber }) => {
  return (
    <>
      <Row>
        <Col className="Column">
          <Number
            number={1}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={2}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={3}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={4}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={5}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={6}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={7}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={8}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            number={9}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
      </Row>
      <Row>
        <Col className="Column">
          <Number
            number={0}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            decimal={"."}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
        <Col className="Column">
          <Number
            equal={"="}
            setDisplayNumber={setDisplayNumber}
            displayNumber={displayNumber}
          ></Number>
        </Col>
      </Row>
    </>
  );
};
export default NumbersDecimalEquals;
