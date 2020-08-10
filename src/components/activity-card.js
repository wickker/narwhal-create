import React from "react";
import "../styles.css";

export default class ActivityCard extends React.Component {
  determineActionAndTarget = (action, target) => {
    if (action === "increased_quota") {
      return (
        <span>
          increased <span className="bold">{target}</span>'s quota
        </span>
      );
    } else if (action === "added_leads") {
      return (
        <span>
          added new leads to <span className="bold">{target}</span>
        </span>
      );
    } else if (action === "archived_team") {
      return (
        <span>
          archived the team <span className="bold">{target}</span>
        </span>
      );
    }
  };

  render() {
    const props = this.props;
    const actionAndTarget = this.determineActionAndTarget(props.action, props.target);
    const hoursAgo = !!props.created_at ? props.created_at : "";

    return (
      <div className="activityCard">
        <div>
          <img className="avatar" alt="User avatar" src={props.avatar} />
        </div>
        <div className="activityText">
          <div className="activity">
            <span className="bold">{props.name} </span>
            {actionAndTarget}
          </div>
          <div className="hoursAgo">{hoursAgo}</div>
        </div>
      </div>
    );
  }
}
