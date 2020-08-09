import React from "react";
import "../styles.css";

export default class InfoDiv extends React.Component {
  render() {
    return (
      <div className="infoDiv">
        <div className="infoHeader">
          <div className="contentTitle">All Teams</div>
          <div className="itemCount">Showing 65 out of 65 teams</div>
        </div>
        <div className="infoContent">

        </div>
      </div>
    );
  }
}
