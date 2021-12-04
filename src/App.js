import React, { createContext, useReducer, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { reducer, initialState } from "./reducers/index";
import "./App.css";

export const DarkContext = createContext();

const Routing = () => {
  const { dispatch } = useContext(DarkContext);
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("DARKMODE"));
    if (mode) {
      dispatch({ type: "DARKMODE", payload: mode });
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <DarkContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </DarkContext.Provider>
    </>
  );
};

export default App;
