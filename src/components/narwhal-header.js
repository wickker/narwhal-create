import React from "react";
import "../styles.css";
import MailIcon from "../svg/icon-mail.svg";
import { Badge } from "antd";
import data from "./raw-data.json";
import CarotDownIcon from "../svg/caret down.svg";

export default class NarwhalHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: data.current_user,
    };
  }

  render() {
    return (
      <div className="narwhalHeader">
        <div className="narwhalTitle">Narwhal</div>
        <div className="subHeader">
          <div className="pageName">Teams</div>
          <div className="greeting">
            <div className="notificationsIcon">
              <Badge
                count={this.state.currentUser.notifications_count}
                style={{ backgroundColor: "#2B95DA" }}
                offset={[0, 0]}
              >
                <img alt="Mail" src={MailIcon} />
              </Badge>
            </div>
            <div className="helloMessage">
              Hello, {this.state.currentUser.name}
            </div>
            <div className="avatarDiv">
              <img
                className="avatar"
                alt="Current user avatar"
                src="https://via.placeholder.com/150"
                // src={this.state.currentUser.avatar}
              />
            </div>
            <div>
              <img alt="Carot down" src={CarotDownIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
