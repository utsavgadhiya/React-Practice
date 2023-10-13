import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

// Props is a way to transfer data or attributes from Parent to Child Component

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = () => {
    alert(`Hello ${this.state.parentName}`);
  };

  greetParentFromChild = (childName) => {
    alert(`Hello ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent
          greetHandler={this.greetParent}
          greetHandlerV2={this.greetParentFromChild}
        ></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
