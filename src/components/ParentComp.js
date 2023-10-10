import React, { Component } from "react";
import RegComp from "./RegComp";
import PureCompDemo from "./PureCompDemo";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Utsav",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Utsav",
      });
    }, 2000);
  }

  render() {
    console.log('Parent Comp Render')
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureCompDemo name={this.state.name}></PureCompDemo> */}
      </div>
    );
  }
}

export default ParentComp;
