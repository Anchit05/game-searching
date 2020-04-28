import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../styles/heroContainers/heroContainer.scss";

import SearchContainer from "../searchContainers/SearchContainer";

class HeroContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.updateGameData = this.updateGameData.bind(this);
  }

  updateGameData(gameData) {
    this.props.updateGameData(gameData);
  }

  render() {
    return (
      <div className="main-hero-container">
        <div className="page-banner-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="heading-container">
                  <h1 className="main-heading-text roboto-bold">
                    Seach your favourite Games
                  </h1>
                </div>
                <div className="search-container-wrapper">
                  <SearchContainer
                    updateGameData={this.updateGameData}
                    gamesData={this.props.gamesData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// HeroContainer.propTypes = {};

export default HeroContainer;
