import React, { Component } from "react";
import ComponentC from "./ComponentC";

class ComponentB extends Component {
  render() {
    return <ComponentC></ComponentC>;
  }
}

export default ComponentB;
