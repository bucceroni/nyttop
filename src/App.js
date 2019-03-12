import React, { Component } from "react";
//REACT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
//ROUTES
import Routes from "./Routes";
//COMPONENTS
import Template from "./components/Template/Template";
class App extends Component {
  render() {
    return (
      <Router>
        <Template>
          <Routes />
        </Template>
      </Router>
    );
  }
}

export default App;
