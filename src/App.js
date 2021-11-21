import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";
import Navbar from "./components/navbar/Navbar";
import Home from "./Home";
import Resume from "./components/resume/Resume";
import Watch from "./components/watch/Watch";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/watch" component={Watch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
