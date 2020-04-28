import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/gamesList/gameCard.scss";

class GameCard extends Component {
  render() {
    let gameDetailObj = this.props.gameDetails;
    return (
      <div className="main-game-card-container">
        <div className="card-title-container">
          <h3 className="card-title-text">{gameDetailObj.title}</h3>
        </div>
        <div className="other-details-container">
          <div className="platform-container common-container ibm">
            <span className="platform-text-hd common-text-hd roboto-medium">
              Platform:&nbsp;
            </span>
            <span className="platform-text common-text roboto-light">
              {gameDetailObj.platform}
            </span>
          </div>
          <div className="score-container common-container ibm">
            <span className="score-text-hd common-text-hd roboto-medium">
              Score:&nbsp;
            </span>
            <span className="score-text common-text roboto-light">
              {gameDetailObj.score}
            </span>
          </div>
          <div className="genre-container common-container ibm">
            <span className="genre-text-hd common-text-hd roboto-medium">
              Genre:&nbsp;
            </span>
            <span className="genre-text common-text roboto-light">
              {gameDetailObj.genre}
            </span>
          </div>
          <div className="editor-container common-container ibm">
            <span className="editor-text-hd common-text-hd roboto-medium">
              Editors Choice:&nbsp;
            </span>
            <span className="editor-text common-text roboto-light">
              {gameDetailObj.editors_choice}
            </span>
          </div>
          <div className="year-container common-container ibm">
            <span className="year-text-hd common-text-hd roboto-medium">
              Release Year:&nbsp;
            </span>
            <span className="year-text common-text roboto-light">
              {gameDetailObj.release_year}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  gameDetails: PropTypes.object
};

export default GameCard;
