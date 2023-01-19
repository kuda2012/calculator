import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Operation from "./Operation.js";
import ClearText from "./ClearText.js";
import "../styles/Column.css";
const Operations = ({ number, decimal, equal, setDisplayNumber }) => {
  return (
    <Row>
      <Col className="Column">
        <Operation operationSymbol={"/"}></Operation>
      </Col>
      <Col className="Column">
        <Operation operationSymbol={"+"}></Operation>
      </Col>
      <Col className="Column">
        <Operation operationSymbol={"-"}></Operation>
      </Col>
      <Col className="Column">
        <Operation operationSymbol={"*"}></Operation>
      </Col>
      <Col className="Column">
        <ClearText setDisplayNumber={setDisplayNumber}></ClearText>
      </Col>
    </Row>
  );
};
export default Operations;
