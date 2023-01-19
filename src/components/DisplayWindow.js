import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Operation from "./Operation.js";
import ClearText from "./ClearText.js";
import Value from "./Value.js";
import "../styles/Column.css";
const DisplayWindow = ({ displayNumber }) => {
  return (
    <Row>
      <Col className="Column">
        <Value displayNumber={displayNumber}></Value>
      </Col>
    </Row>
  );
};
export default DisplayWindow;
