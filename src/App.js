import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
