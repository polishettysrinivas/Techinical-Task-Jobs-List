import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Mainlayout from './Layouts/Mainlayout';
import Joblist from './Components/Joblist';
import Jobdetails from './Components/Jobdetails';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Joblist" />
          </Route>
          <Mainlayout path="/Joblist" component={Joblist} />
          <Mainlayout path="/jobdetails" component={Jobdetails} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userstate: state
  }
}
export default connect(mapStateToProps)(App)
