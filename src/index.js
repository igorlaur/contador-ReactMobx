import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import "./styles.css";

class Store {
  @observable counter = 0;

  @action
  add = () => {
    this.counter += 1;
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{Store.counter}</h2>
        <button onClick={() => Store.add()}>Clique aqui para contar</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
