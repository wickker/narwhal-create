import React from "react";
import "../styles.css";
import ActivityCard from "./activity-card.js";

export default class ActivityDiv extends React.Component {
  renderActivityCards = (activities) => {
    let HTML = activities.map((activity) => {
      return (
        <ActivityCard
          id={activity.id}
          personId={activity.person.id}
          name={activity.person.name}
          avatar={activity.person.avatar}
          action={activity.action}
          target={activity.target}
          created_at={activity.created_at}
        />
      );
    });
    return HTML;
  };

  render() {
    const activitiesToDisplay = this.renderActivityCards(this.props.activity);

    return (
      <div className="activityDiv">
        <div className="activityDivReduced">
          <div className="infoHeader">
            <div className="contentTitle">Activity</div>
          </div>
          <div className="activityContainer">{activitiesToDisplay}</div>
        </div>
      </div>
    );
  }
}
