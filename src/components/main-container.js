import React from "react";
import "../styles.css";
import NarwhalHeader from "./narwhal-header.js";
import SecondHeader from "./second-header.js";

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <NarwhalHeader navTitle={this.props.navTitle} />
        <SecondHeader
          navTitle={this.props.navTitle}
          createNewButtonName={this.props.createNewButtonName}
          isContentHidden={this.props.isContentHidden}
        />
      </div>
    );
  }
}
