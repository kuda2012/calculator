import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Operation from "./Operation.js";
import ClearText from "./ClearText.js";
import Value from "./Value.js";
import "../styles/Column.css";
/**
 * This is window where you can see the values of what you have inputted
 */
const DisplayWindow = ({ currentCalculation }) => {
  return (
    <Row>
      <Col className="Column">
        <Value currentCalculation={currentCalculation}></Value>
      </Col>
    </Row>
  );
};
export default DisplayWindow;
