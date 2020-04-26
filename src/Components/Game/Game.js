import React from "react";
import "./Game.scss";

const Game = (props) => {
  const {imgGame, titleGame, companyGame} = props;
  return (
    <div className="o-container-game">
      <div className="o-game-img">
        <img src={imgGame} alt="" loading="lazy"/>
      </div>
      <div className="o-game-info">
        <h3>{titleGame}</h3>
        <h5>{companyGame}</h5>
      </div>
    </div>
  );
};

export default Game;
