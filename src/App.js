import React from "react";
import "./styles.css";
import SideBar from "./components/sidebar.js";
import MainContainer from "./components/main-container.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isContentHidden: false,
      navTitle: "Teams",
      createNewButtonName: "Team",
    };
  }

  onSideBarClick = (event) => {
    let clicked = event.target.getAttribute("attr");
    if (clicked === "campaign") {
      this.setState({
        isContentHidden: true,
        navTitle: "Campaigns",
        createNewButtonName: "Campaign",
      });
    } else if (clicked === "team") {
      this.setState({
        isContentHidden: false,
        navTitle: "Teams",
        createNewButtonName: "Team",
      });
    } else if (clicked === "lead") {
      this.setState({
        isContentHidden: true,
        navTitle: "Leads",
        createNewButtonName: "Lead",
      });
    } else if (clicked === "report") {
      this.setState({
        isContentHidden: true,
        navTitle: "Reports",
        createNewButtonName: "Report",
      });
    }
  };

  render() {
    return (
      <div>
        <SideBar
          onSideBarClick={this.onSideBarClick}
          navTitle={this.state.navTitle}
        />
        <MainContainer
          isContentHidden={this.state.isContentHidden}
          navTitle={this.state.navTitle}
          createNewButtonName={this.state.createNewButtonName}
        />
      </div>
    );
  }
}
