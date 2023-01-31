import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Operation from "./Operation.js";
import ClearText from "./ClearText.js";
import "../styles/Column.css";
const Operations = ({
  number,
  decimal,
  equal,
  setcurrentCalculation,
  currentCalculation,
  operations,
}) => {
  /**
   * Top Row of buttons on calculator. Displays all the mathematical operations and a Delete button
   */
  return (
    <Row>
      {operations.map((operation, i) => {
        return (
          <Col className="Column" key={`operation - ${operation}`}>
            <Operation
              currentOperation={operation}
              operations={operations}
              currentCalculation={currentCalculation}
              setcurrentCalculation={setcurrentCalculation}
            ></Operation>
          </Col>
        );
      })}
      <Col className="Column">
        <ClearText setcurrentCalculation={setcurrentCalculation}></ClearText>
      </Col>
    </Row>
  );
};
export default Operations;
