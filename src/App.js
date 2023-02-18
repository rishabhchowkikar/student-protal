import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { Login } from "./pages/Login/login";
import { Registor } from "./pages/Registor/registor";

// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="container">
      {currentForm === "login" ? (
        <Login onFromSwitch={toggleForm} />
      ) : (
        <Registor onFromSwitch={toggleForm} />
      )}
    </div>
  );
}
export default App;
