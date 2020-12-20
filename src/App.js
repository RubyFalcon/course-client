import React from "react";
import initialData from "./data.js";
import { Header, Modules, UniversityCourseStudent } from "./components";

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
    <div className="App">
      <Header onAdd={addModuleData} />
      <UniversityCourseStudent studentData={data.studentData} />
      <Modules data={data.moduleData} />
    </div>
  );
}

export default App;
