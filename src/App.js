import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./headers/Header";
import HeroContainer from "./heroContainers/HeroContainer";
import GamesListContainer from "./gamesList/GamesListContainer";
import * as gamesApi from "./helpers/GameHelper";

export default function App() {
  const [gamesData, setGamesData] = useState([]);
  let [updatedGameData, setUpdatedGameData] = useState([]);

  const updateSearch = gameData => {
    console.log("updatedGameData: ", gameData);
    setUpdatedGameData(gameData);
  };

  useEffect(() => {
    gamesApi.getGamesList().then(gamesArr => {
      setGamesData(gamesArr);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroContainer updateGameData={updateSearch} gamesData={gamesData} />
      <GamesListContainer
        updatedGameData={updatedGameData}
        gamesData={gamesData}
      />
    </div>
  );
}
