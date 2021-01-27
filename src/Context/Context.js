import { createContext, useReducer, useContext, useMemo } from "react";

//todo: when u log out its not updating the dom, it should update, to fix this
//todo: add module data to context
//todo:
const initialUserState = {
  userData: {},
  moduleData: {},
};

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

  //setters
  const setUserData = (data) =>
    dispatchUser({ type: "ADD_USER_INFO", user: data });

  const setModuleData = (data) => {
    dispatchUser({ type: "ADD_MODULE_INFO", module: data });
  };

  const providedValue = useMemo(
    () => ({ ...user, setUserData, setModuleData }),
    [user]
  );
  // const providedModuleValue = useMemo(() => ({ ...module, setModuleData }), [
  //   module,
  // ]);
  // const endValue = { ...providedValue, ...providedModuleValue };

  return <GlobalContext.Provider value={providedValue} {...props} />;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (typeof context == "undefined") {
    throw new Error("Context cannot be used out of provider");
  }

  return context;
};

export default GlobalContextProvider;
