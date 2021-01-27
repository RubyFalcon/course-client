import React from "react";
import initialData from "./data.js";
import { useToast } from "@chakra-ui/react";
import { Header, Modules, UniversityCourseStudent } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import HomeHeader from "./components/Header/HomeHeader";
import SignUp from "./pages/SignUp.js";
import Module from "./pages/Module";

import UserTable from "./components/UniversityCourseStudent/index.js";

function App() {
  async function addModuleData(value) {
    try {
      console.log("sending data", value);
      await axios.post("http://localhost:5000/modules/add", value);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Router>
      <HomeHeader onAdd={addModuleData} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/studentdata">
          <UserTable />
        </Route>
        <Route exact path="/modules">
          <Modules />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/modules/:moduleCode" exact render={() => <Module />} />
      </Switch>
    </Router>
  );
}

export default App;
