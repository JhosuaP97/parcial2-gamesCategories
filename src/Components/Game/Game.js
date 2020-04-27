import React from "react";
import "./Game.scss";
import Proptypes from "prop-types";

/**
 * 
 * @param {String} imgGame 
 * @param {String} titleGame
 * @param {String} companyGame
 */

const Game = (props) => {
  const {imgGame, titleGame, companyGame} = props;
  return (
    <div className="o-container-game">
      <div className="o-game-img">
        <img src={imgGame} alt={titleGame} loading="lazy"/>
      </div>
      <div className="o-game-info">
        <h3>{titleGame}</h3>
        <h5>{companyGame}</h5>
      </div>
    </div>
  );
};

Game.propTypes={
  imgGame:Proptypes.string.isRequired,
  titleGame:Proptypes.string.isRequired,
  companyGame:Proptypes.string.isRequired
}



export default Game;
