import React from "react";
import { HomeHeader, Modules, UserTable } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp.js";
import Module from "./pages/Module";

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
        <Route exact path="/user-data">
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
