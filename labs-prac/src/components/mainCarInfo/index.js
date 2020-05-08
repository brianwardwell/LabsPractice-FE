import React, { useContext } from "./node_modules/react";

import CarInfo from "../CarInfo";

const MainCarInfo = ({ c02, repairCost, lifetime }) => {
  const results = { replace: "context goes here" };
  return (
    <div>
      <div>
        <CarInfo car={results} />
      </div>
      <ul>
        <li>{c02}</li>
        <li>{repairCost}</li>
        <li>{lifetime}</li>
      </ul>
    </div>
  );
};

export default MainCarInfo;
