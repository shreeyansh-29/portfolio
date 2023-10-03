import React from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import {BrowserRouter} from "react-router-dom";

function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
