import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function useSignIn() {
  /**
   * passed from context
   */
  const { userData, setUserData } = useGlobalContext();
  /**
   * toasts are styled alerts that popup
   */
  const success = useToast();
  const failure = useToast();
  /**
   * allows for redirection
   */
  const history = useHistory();
  /**
   * sorta like a componentdidmount , lets  us check if
   */
  const mounted = React.useRef(false);

  /**
   * asynchronous post request to API for the user
   * @param {*} userCredentials an object of user data to be checked on the API
   */
  const postUser = async (userCredentials) => {
    try {
      console.log("post user has been called");
      let res = await axios.post(
        "http://localhost:5000/user/login",
        userCredentials
      );

      setUserData(res.data);
      /**
       * will send use to /modules if and only if we login
       */
      history.push("/modules");
      success({
        title: "Signed in.",
        description: "You have successfully logged in",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log("something went wrong:", err.message);
      failure({
        title: "Signed in failed",
        description: "Something went wrong",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  /**
   * will remove the user data from local storage
   */
  const onLogout = () => {
    window.localStorage.removeItem("User_Data");

    success({
      title: "Signed out.",
      description: "You have successfully logged out",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    history.push("/");
  };
  /**
   * this use will run whenever the page renders and will get theUSer_Data from localstorage and
   * set the user data to that User_Data if it exists
   */
  useEffect(() => {
    const userFromStorage = localStorage.getItem("User_Data");

    if (userFromStorage) {
      setUserData(JSON.parse(userFromStorage));
    }
  }, []);

  /**
   * this useEffect will run whenever the userData Changes, if mounted current  is true then we will set user_data into local storage,
   * otherwise it will set the mounted current to true, so next time the userData changes it will set thedata to userData.
   */
  React.useEffect(() => {
    if (mounted.current) {
      localStorage.setItem("User_Data", JSON.stringify(userData));
      //console.log('use effect used')
    } else {
      mounted.current = true;
    }
  }, [userData]);

  return { signin: postUser, logout: onLogout };
}
