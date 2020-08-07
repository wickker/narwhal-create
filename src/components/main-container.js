import React from "react";
import "../styles.css";
import NarwhalHeader from "./narwhal-header.js";

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <NarwhalHeader />
      </div>
    );
  }
}
