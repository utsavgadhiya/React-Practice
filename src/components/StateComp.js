import React, { Component } from "react";

class StateComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      counter: 0,
    };
  }

  changeMessage() {
    this.setState({
      message: "You subscribed!",
    });
  }

  increamentCounter() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log("Callback value:", this.state.counter);
      }
    );
    console.log("Callback value:", this.state.counter);
  }

  // this is too complicated for me and I don't know why!
  incrementToTen() {
    this.setState((prevState) => ({
      counter: prevState.counter + 10,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        &nbsp;
        <button onClick={() => this.increamentCounter()}>Click Here</button>
        &nbsp;
        <button onClick={() => this.incrementToTen()}>Click Here x 10</button>
      </div>
    );
  }
}

export default StateComp;
