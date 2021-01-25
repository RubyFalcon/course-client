import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function useSignIn() {
  const { userData, setUserData } = useGlobalContext();
  const success = useToast();
  const history = useHistory();
  const mounted = React.useRef(false);

  const postUser = async (userCredentials) => {
    try {
      //console.log('post user has been called')
      let res = await axios.post(
        "http://localhost:5000/user/login",
        userCredentials
      );
      setUserData(res.data);
      history.push("/modules");

      //window.localStorage.setItem("User_Data", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
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

  return { sigin: postUser, logout: onLogout };
}
