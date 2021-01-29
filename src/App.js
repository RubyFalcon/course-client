/*Property of Tupay Saldana Felkin.
  Student id:21406213

*/

//Imports:
import React from "react";
import { HomeHeader, Modules, UserTable } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp.js";
import Module from "./pages/Module";
import About from "./pages/About";

function App() {
  /**
   *  an asynchronous axios post request which send the data to the Module-API
   * @param {*} value passed from onAdd props which leads to the Header
   */
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
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
