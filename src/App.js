import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import NavBar from "./pages/NavBar";
import AboutMe from "./pages/AboutMe";
import Footer from "./pages/Footer";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={AboutMe}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
