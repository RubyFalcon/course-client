import React, { useState, useEffect } from "react";
import useModule from "../Hooks/useModule";
import { useParams } from "react-router-dom";

const Module = () => {
  const { moduleCode } = useParams();
  const { Code } = useModule(moduleCode);

  return (
    <div>
      <h1>{Code}</h1>
    </div>
  );
};

export default Module;
