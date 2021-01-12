import React from "react";
import initialData from "./data.js";
import { Header, Modules, UniversityCourseStudent } from "./components";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [data, setData] = React.useState(initialData);
  function addModuleData(value) {
    setData((prev) => {
      return {
        ...prev,
        //non-mutating operator
        moduleData: [...prev.moduleData, value],
      };
    });
  }

  return (
    <Router>
      <div className="App">
        <Header onAdd={addModuleData} />
        <Switch>
          <Route path="/studentdata">
          <UniversityCourseStudent studentData={data.studentData} /> 
          </Route>

          
        </Switch>  
        <Modules data={data.moduleData} />            
      </div>
    </Router>
   
  );
}
//
export default App;
