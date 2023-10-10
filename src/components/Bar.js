import React, { Component } from "react";

export default class Bar extends Component {
  render() {
    const { name } = this.props;
    return <h1>Hello Bar Component! which is {name}</h1>;
  }
}
