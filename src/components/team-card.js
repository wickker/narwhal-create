import React from "react";
import "../styles.css";
import DefaultStar from "../svg/star default.svg";
import ColorStar from "../svg/star active.svg";
import CampaignIcon from "../svg/icon-conversations-small.svg";
import LeadsIcon from "../svg/icon-leads-small.svg";

export default class TeamCard extends React.Component {
  isCreated = (createdAt) => {
    if (!createdAt) {
      return "";
    } else {
      return "Created " + createdAt;
    }
  };

  render() {
    const props = this.props;
    const createdOn = this.isCreated(props.created_at);
    const star = props.is_favorited ? ColorStar : DefaultStar;
    

    return (
      <div className="teamCard">
        <div className="cardHeader">
          <div>
            <img className="teamImage" alt="Team logo" src={props.image} />
          </div>
          <div className="nameAndCreated">
            <div className="teamName">{props.name}</div>
            <div className="created">{createdOn}</div>
          </div>
          <div className="starIcon">
            <img alt="Star" src={star} />
          </div>
        </div>
        <div className="teamDescription">
          {props.description}
        </div>
        <div className="divider"></div>
        <div className="cardFooter">
          <img src={CampaignIcon} alt="Campaign"/>
          <span className="cardFooterText">{props.campaigns_count} Campaigns</span>
          <img src={LeadsIcon} alt="Leads"/>
          <span className="cardFooterText">{props.leads_count.toLocaleString()} Leads</span>
        </div>
      </div>
    );
  }
}
