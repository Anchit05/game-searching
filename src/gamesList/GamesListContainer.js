import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/gamesList/gamesListContainer.scss";

import GameCard from "./GameCard";

class GamesListContainer extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    let gamesList = this.props.gamesData;
    return (
      <div className="main-images-list-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="game-list-heading-container">
                <h2 className="game-list-heading-text roboto-bold">
                  Games List
                </h2>
              </div>
              {gamesList &&
                gamesList.length > 0 &&
                gamesList.map((gamesObj, index) => (
                  <div className={"common-game-container"} key={index}>
                    <GameCard gameDetails={gamesObj} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GamesListContainer.propTypes = {
  gamesData: PropTypes.array
};

export default GamesListContainer;
