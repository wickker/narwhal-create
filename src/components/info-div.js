import React from "react";
import "../styles.css";
import TeamCard from "./team-card.js";

export default class InfoDiv extends React.Component {
  renderCards = (filteredTeams) => {
    let HTML = filteredTeams.map((team) => {
      return (
        <TeamCard
          id={team.id}
          name={team.name}
          image={team.image}
          description={team.description}
          campaigns_count={team.campaigns_count}
          leads_count={team.leads_count}
          is_favorited={team.is_favorited}
          is_archived={team.is_archived}
          created_at={team.created_at}
        />
      );
    });
    return HTML;
  };

  render() {
    const props = this.props;
    const numTeamsDisplayed = props.filteredTeams.length;
    const teamsToDisplay = this.renderCards(props.filteredTeams);

    return (
      <div className="infoDiv">
        <div className="infoHeader">
          <div className="contentTitle">{props.filterTitle} Teams</div>
          <div className="itemCount">
            Showing {numTeamsDisplayed} out of {props.totalTeams} teams
          </div>
        </div>
        <div className="infoContent">{teamsToDisplay}</div>
      </div>
    );
  }
}
