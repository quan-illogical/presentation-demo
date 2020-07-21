import React, { Component } from "react";
import "./App.css";
import ClassCar from "./components/ClassCar";
import FunctionalCar from "./components/FunctionalCar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showClassCar: true, showFunctionCar: true };
  }

  displayClassCar() {
    this.setState({ showClassCar: !this.state.showClassCar });
  }
  displayFunctionCar() {
    this.setState({ showFunctionCar: !this.state.showFunctionCar });
  }

  render() {
    return (
      <div>
        <div style={{ border: "3px solid blue", width: "50%" }}>
          <button onClick={this.displayClassCar.bind(this)}>
            Click me to dispatch the car or make a new one
          </button>
          {this.state.showClassCar ? <ClassCar /> : null}
        </div>
        <div style={{ border: "3px solid blue", width: "50%" }}>
          <button onClick={this.displayFunctionCar.bind(this)}>
            Click me to dispatch the car or make a new one
          </button>
          {this.state.showFunctionCar ? <FunctionalCar /> : null}
        </div>
      </div>
    );
  }
}
