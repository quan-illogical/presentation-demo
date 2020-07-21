import React, { Component } from "react";

export default class ClassCar extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "orange" });
    }, 2000);
  }

  componentDidUpdate() {
      alert("Changing to " + this.state.color + " car")
  }

  componentWillUnmount() {
      alert(this.state.color + " car is dispatching")
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>
          This is a {this.state.color} car
        </h1>
      </div>
    );
  }
}
