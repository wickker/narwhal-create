import React from "react";
import "./styles.css";
import SideBar from "./components/sidebar.js";
import MainContainer from "./components/main-container.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <MainContainer />
      </div>
    );
  }
}
