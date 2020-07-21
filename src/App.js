import React, { Component } from 'react'
import "./App.css"
import ClassCar from './components/ClassCar'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={showCar: true}
  }

  displayCar() {
    this.setState({showCar: !this.state.showCar})
  }

  render() {
    return (
      <div onClick={this.displayCar.bind(this)}>
        {this.state.showCar ? <ClassCar/> : null}
      </div>
    )
  }
}
