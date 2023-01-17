import React, { useEffect, useState } from "react";

const Number = ({ number, decimal, equal,  setDisplayNumber }) => {

  return <div>{!isNaN(number) ? number : decimal ? decimal : equal}</div>;
};
export default Number;
