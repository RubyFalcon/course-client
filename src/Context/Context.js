import { createContext, useReducer, useContext, useMemo } from "react";

/**
 * @description initial states
 * @property {object} userData holds the user state
 */
const initialUserState = {
  userData: {},
  moduleData: {},
};

/**
 *
 * @param {*} state the data to be passed down
 * @param {*} action the action holds a key of type and then passes down previous state with the new data added to the state
 */
const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return { ...state, userData: action.user };
    case "ADD_MODULE_INFO":
      return { ...state, moduleData: action.module };
    default:
      return state;
  }
};

export const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  //reducers
  const [user, dispatchUser] = useReducer(userReducer, initialUserState);

  /**
   * dispatches User with data passed in to the user
   * @param {object} data  the data passed into the function
   */
  const setUserData = (data) =>
    dispatchUser({ type: "ADD_USER_INFO", user: data });

  /**
   * dispatches user with data passed in to the module
   * @param {object} data  the data passed into the function
   */
  const setModuleData = (data) => {
    dispatchUser({ type: "ADD_MODULE_INFO", module: data });
  };

  const providedValue = useMemo(
    () => ({ ...user, setUserData, setModuleData }),
    [user]
  );

  return <GlobalContext.Provider value={providedValue} {...props} />;
};

/**
 * Global context allows data to be passed down to indivual components/pages instead of being passed down through props, and uses createcontext from react
 */
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (typeof context == "undefined") {
    throw new Error("Context cannot be used out of provider");
  }

  return context;
};

export default GlobalContextProvider;
