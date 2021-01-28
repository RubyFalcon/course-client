import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

/**
 * useNewUser will post a new user to our API ad and set it to our global State
 */
export default function useNewUser() {
  const { newuserData, setnewUserData } = useGlobalContext();
  const success = useToast();
  const postNewUser = async (userCredentials) => {
    try {
      let res = await axios.post(
        "http://localhost:5000/user/",
        userCredentials
      );
      setnewUserData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
}
