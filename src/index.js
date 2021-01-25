import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalContextProvider from "./Context/Context";

ReactDOM.render(
  <GlobalContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </GlobalContextProvider>,
  document.getElementById("root")
);
