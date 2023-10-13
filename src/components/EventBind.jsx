import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // bind event handler - 3rd approach
    this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //     this.setState({
  //         message: 'Thank you!'
  //     })
  //     console.log(this)
  // }

  clickHandler = () => {
    this.setState({
      message: "Thank you",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st approch is to bind this keyword to event handler in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
        {/* 2nd approach is to use arrow function in render method */}
        {/* <button onClick={() => this.clickHandler()}>Click Here</button> */}
        {/* 3rd and most used approach is binding the event handler in constructor instead of render method. */}
        {/* <button onClick={this.clickHandler}>Click Here</button> */}
        {/* 4rd and most simple approach is to just use arrow function for the clickHandler. this is called binding as class property */}
        <button onClick={this.clickHandler}>Click Here</button>
      </div>
    );
  }
}

export default EventBind;
