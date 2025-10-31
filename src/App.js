import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css"

import HomePage from "./components/Homepage/HomePage";

const App = () => {
  return (
    <Router>
      <HomePage/>
    </Router>
  );
};

export default App;
