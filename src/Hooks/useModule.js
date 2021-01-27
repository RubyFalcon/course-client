import React from "react";
import axios from "axios";
import { useGlobalContext } from "../Context/Context";
//upon usingQoute, add that to the context, then get that context in the module page

const useModule = (moduleCode) => {
  const { moduleData, setModuleData } = useGlobalContext();

  const getModules = async () => {
    try {
      let result = await axios.get(
        `http://localhost:5000/modules/code/${moduleCode}`
      );

      if (result) {
        setModuleData(result.data.data[0]);
      }
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

  React.useEffect(() => {
    getModules();
  }, [moduleCode]);

  return moduleData;
};

export default useModule;
