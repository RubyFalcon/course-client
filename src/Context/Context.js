import { createContext, useReducer, useContext, useMemo } from "react";

const initialUserState = {
  userData: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return { ...state, userData: action.user };
    default:
      return state;
  }
};

export const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {
  const [user, dispatchUser] = useReducer(userReducer, initialUserState);

  const setUserData = (data) =>
    dispatchUser({ type: "ADD_USER_INFO", user: data });

  const providedValue = useMemo(() => ({ ...user, setUserData }), [user]);

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
