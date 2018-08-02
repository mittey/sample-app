import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router";

import ContactCreator from "./containers/ContactCreator/ContactCreator";
import ContactLister from "./containers/ContactLister/ContactLister";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/create-contact" component={ContactCreator} exact />
          <Route path="/list-contacts" component={ContactLister} exact />
          <Redirect to="/list-contacts" />
        </Switch>
      </div>
    );
  }
}

export default App;
