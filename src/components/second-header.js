import React from "react";
import "../styles.css";
import PlusIcon from "../svg/Shape.svg";
import SearchIcon from "../svg/icon-search.svg";
import ActivityDiv from "./activity-div.js";
import InfoDiv from "./info-div.js";
import data from "./raw-data.json";

export default class SecondHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      allTeams: data.teams,
      filterTitle: "All",
      filteredTeams: data.teams,
      totalTeams: data.teams.length,
      activity: data.activities,
      hideTeam: false,
      hideCampaign: true,
      hideReport: true,
      hideLead: true,
      allColor: "#0083e3",
      allLine: "3px solid #0083e3",
      favoriteColor: "",
      favoriteLine: "",
      archivedColor: "",
      archivedLine: "",
    };
  }

  clickFilter = (event) => {
    let filter = event.target.id;
    if (filter === "All") {
      this.setState({
        filteredTeams: this.state.allTeams,
        filterTitle: "All",
        allColor: "#0083e3",
        allLine: "3px solid #0083e3",
        favoriteColor: "",
        favoriteLine: "",
        archivedColor: "",
        archivedLine: "",
      });
    } else if (filter === "Favorites") {
      let favoriteTeams = this.state.allTeams.filter(
        (team) => team.is_favorited === true
      );
      this.setState({
        filteredTeams: favoriteTeams,
        filterTitle: "Favorite",
        allColor: "",
        allLine: "",
        favoriteColor: "#0083e3",
        favoriteLine: "3px solid #0083e3",
        archivedColor: "",
        archivedLine: "",
      });
    } else if (filter === "Archived") {
      let archivedTeams = this.state.allTeams.filter(
        (team) => team.is_archived === true
      );
      this.setState({
        filteredTeams: archivedTeams,
        filterTitle: "Archived",
        allColor: "",
        allLine: "",
        favoriteColor: "",
        favoriteLine: "",
        archivedColor: "#0083e3",
        archivedLine: "3px solid #0083e3",
      });
    }
  };

  determineIcon = (name) => {
    if (name === "Teams") {
      this.setState({
        hideTeam: false,
        hideCampaign: true,
        hideReport: true,
        hideLead: true,
      });
    } else if (name === "Campaigns") {
      this.setState({
        hideTeam: true,
        hideCampaign: false,
        hideReport: true,
        hideLead: true,
      });
    } else if (name === "Leads") {
      this.setState({
        hideTeam: true,
        hideCampaign: true,
        hideReport: true,
        hideLead: false,
      });
    } else if (name === "Reports") {
      this.setState({
        hideTeam: true,
        hideCampaign: true,
        hideReport: false,
        hideLead: true,
      });
    }
  };

  sortByName = (a, b) => {
    let nameOne = a.name.toUpperCase();
    let nameTwo = b.name.toUpperCase();
    let comparison = 0;
    if (nameOne > nameTwo) {
      comparison = 1;
    } else if (nameOne < nameTwo) {
      comparison = -1;
    }
    return comparison;
  };

  search = (event) => {
    let searchTerm = event.target.value;
    let itemsFound = this.state.allTeams.filter((team) => {
      return team.name.toUpperCase().includes(searchTerm.toUpperCase());
    });
    itemsFound.sort(this.sortByName);
    this.setState({
      filterTitle: "Searched",
      filteredTeams: itemsFound,
      allColor: "",
      allLine: "",
      favoriteColor: "",
      favoriteLine: "",
      archivedColor: "",
      archivedLine: "",
    });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps === this.props) return;
    this.determineIcon(this.props.navTitle);
  };

  render() {
    return (
      <div>
        <div className="secondHeader">
          <div className="secondSubHeader">
            <div className="iconAndTitle">
              <svg
                className="secondHeaderIcon"
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                hidden={this.state.hideTeam}
              >
                <path
                  id="icon-teams"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z"
                  fill="#A4A6A8"
                />
              </svg>
              <svg
                className="secondHeaderIcon"
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                hidden={this.state.hideCampaign}
              >
                <path
                  id="icon-campaign"
                  opacity="1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.866667 0H21.6667C22.1459 0 22.5333 0.3874 22.5333 0.866667V15.6C22.5333 16.0793 22.1459 16.4667 21.6667 16.4667H12.4592L5.77027 22.3193C5.512 22.5446 5.14627 22.5949 4.84207 22.4553C4.5318 22.3149 4.33333 22.0073 4.33333 21.6667V16.4667H0.866667C0.3874 16.4667 0 16.0793 0 15.6V0.866667C0 0.3874 0.3874 0 0.866667 0ZM24.2667 6.93333H26.8667C27.3451 6.93333 27.7333 7.3216 27.7333 7.8V20.8C27.7333 21.2784 27.3451 21.6667 26.8667 21.6667H24.2667V25.1333C24.2667 25.4583 24.0855 25.7556 23.7969 25.9038C23.5023 26.0537 23.1573 26.0251 22.8965 25.8379L17.056 21.6667H9.14853L13.1109 18.2H22.5333C23.491 18.2 24.2667 17.4243 24.2667 16.4667V6.93333Z"
                  fill="#A4A6A8"
                />
              </svg>
              <svg
                className="secondHeaderIcon"
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                hidden={this.state.hideLead}
              >
                <path
                  id="icon-leads"
                  opacity="1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 6C16 9.237 13.379 13 10 13C6.621 13 4 9.237 4 6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6ZM20 4H31C31.552 4 32 4.447 32 5C32 5.553 31.552 6 31 6H20C19.448 6 19 5.553 19 5C19 4.447 19.448 4 20 4ZM20 10H31C31.552 10 32 10.447 32 11C32 11.553 31.552 12 31 12H20C19.448 12 19 11.553 19 11C19 10.447 19.448 10 20 10ZM31 16H25C24.448 16 24 16.447 24 17C24 17.553 24.448 18 25 18H31C31.552 18 32 17.553 32 17C32 16.447 31.552 16 31 16ZM25 22H31C31.552 22 32 22.447 32 23C32 23.553 31.552 24 31 24H25C24.448 24 24 23.553 24 23C24 22.447 24.448 22 25 22ZM16.409 15.973C12.009 14.671 7.858 14.696 3.583 15.961C1.439 16.596 0 18.523 0 20.758V27C0 27.553 0.448 28 1 28H19C19.552 28 20 27.553 20 27V20.772C20 18.536 18.557 16.607 16.409 15.973Z"
                  fill="#A4A6A8"
                />
              </svg>
              <svg
                className="secondHeaderIcon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                hidden={this.state.hideReport}
              >
                <path
                  id="icon-reports"
                  opacity="1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2188 6.9375L6.65625 14.0625H0C0.46875 6.1875 6.9375 0 14.9062 0C22.875 0 29.3438 6.1875 29.9062 14.0625H22.5938C22.2188 14.0625 21.9375 14.3438 21.75 14.625L18.75 20.625L11.9062 6.9375C11.625 6.28125 10.5 6.28125 10.2188 6.9375ZM19.5938 23.0625L23.1562 15.9375H29.8125C29.3438 23.8125 22.875 30 14.9062 30C6.9375 30 0.46875 23.8125 0 15.9375H7.21875C7.59375 15.9375 7.875 15.75 8.0625 15.375L11.0625 9.375L17.9062 23.0625C18.0938 23.4375 18.375 23.625 18.75 23.625C19.125 23.625 19.4062 23.3438 19.5938 23.0625Z"
                  fill="#A4A6A8"
                />
              </svg>
              <span className="secondHeaderTitle">{this.props.navTitle}</span>
            </div>
            <div>
              <div className="createButton">
                <img className="plusIcon" alt="Create" src={PlusIcon} />
                <span className="createButtonText">
                  Create new {this.props.createNewButtonName}
                </span>
              </div>
            </div>
          </div>
          <div className="thirdSubHeader" hidden={this.props.isContentHidden}>
            <div className="filterOptionsDiv">
              <div
                className="filterOptions"
                id="All"
                onClick={this.clickFilter}
                style={{
                  color: this.state.allColor,
                  borderBottom: this.state.allLine,
                }}
              >
                All
              </div>
              <div
                className="filterOptions"
                id="Favorites"
                onClick={this.clickFilter}
                style={{
                  color: this.state.favoriteColor,
                  borderBottom: this.state.favoriteLine,
                }}
              >
                Favorites
              </div>
              <div
                className="filterOptions"
                id="Archived"
                onClick={this.clickFilter}
                style={{
                  color: this.state.archivedColor,
                  borderBottom: this.state.archivedLine,
                }}
              >
                Archived
              </div>
            </div>
            <div>
              <img className="searchIcon" alt="Search" src={SearchIcon} />
              <input
                className="searchInput"
                placeholder="Search team name ..."
                onChange={this.search}
              />
            </div>
          </div>
        </div>
        <div className="content" hidden={this.props.isContentHidden}>
          <InfoDiv
            filteredTeams={this.state.filteredTeams}
            filterTitle={this.state.filterTitle}
            totalTeams={this.state.totalTeams}
          />
          <ActivityDiv activity={this.state.activity} />
        </div>
      </div>
    );
  }
}
