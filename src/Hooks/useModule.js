import React from "react";
import axios from "axios";
import { useGlobalContext } from "../Context/Context";
//upon usingQoute, add that to the context, then get that context in the module page

/**
 * useModule will pass us  the moduleData and let us setModuleData to the global state
 * @param {*} moduleCode routes to the api specific module
 */
const useModule = (moduleCode) => {
  const { moduleData, setModuleData } = useGlobalContext();
  /**
   * simple get request to api
   */
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
  /**
   * This will get modules every time the moduleCode changes
   */
  React.useEffect(() => {
    getModules();
  }, [moduleCode]);

  return moduleData;
};

export default useModule;
