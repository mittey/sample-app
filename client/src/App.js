import React, { Component } from "react";

import ContactCreator from "./containers/ContactCreator/ContactCreator";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactCreator />
      </div>
    );
  }
}

export default App;
