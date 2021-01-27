import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function useSignIn() {
  const { userData, setUserData } = useGlobalContext();
  const success = useToast();
  const failure = useToast();
  const history = useHistory();
  const mounted = React.useRef(false);

  const postUser = async (userCredentials) => {
    //console.log("starting to send data...");
    //console.log("in hook", userCredentials);
    try {
      console.log("post user has been called");
      let res = await axios.post(
        "http://localhost:5000/user/login",
        userCredentials
      );

      setUserData(res.data);
      console.log(res.data);
      history.push("/modules");
      success({
        title: "Signed in.",
        description: "You have successfully logged in",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      //window.localStorage.setItem("User_Data", JSON.stringify(res.data));
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

  useEffect(() => {
    const userFromStorage = localStorage.getItem("User_Data");

    if (userFromStorage) {
      setUserData(JSON.parse(userFromStorage));
    }
  }, []);

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
