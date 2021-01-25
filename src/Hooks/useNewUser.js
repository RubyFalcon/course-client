import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

import React from "react";

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

      //window.localStorage.setItem("User_Data", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
    }
  };
}
