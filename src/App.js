import React, {Component} from "react";
import {categories} from "./Data";
import Categorie from "./Components/Categorie/Categorie";
import "./App.scss";
import Game from "./Components/Game/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorieSelected: "",
      isSelected: false,
      position: null,
    };
  }

  handlerClick(param, i) {
    this.setState({
      categorieSelected: param,
      isSelected: true,
      position: i,
    });
  }

  handlerReturn() {
    this.setState({
      isSelected: false,
    });
  }

  render() {
    const {categorieSelected, isSelected, position} = this.state;
    return (
      <div className="o-categorie">
        <div className="o-categorie-title">
          {!isSelected ? (
            <div className="o-figures">
              <h1>Elige una categoria</h1>
              <div className="o-ellipse">
                <img src="/figure/Ellipse.svg" alt="" />
              </div>
              <div className="o-waves">
                <img src="/figure/waves.svg" alt="" />
              </div>
            </div>
          ) : (
            <div className="o-title-game">
              <h1>{categorieSelected}</h1>
              <button onClick={() => this.handlerReturn()}>
                <img src="/figure/back.svg" alt="" loading="lazy"></img>
              </button>
            </div>
          )}
        </div>

        <div className="o-categorie-list">
          {!isSelected ? (
            <div>
              {categories.map((categorie, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => this.handlerClick(categorie.categorie, i)}
                  >
                    <Categorie
                      key={i}
                      imgCategorie={categorie.url}
                      categorieTitle={categorie.categorie}
                    />
                  </button>
                );
              })}
            </div>
          ) : (
            <div>
              {categories.map((categorie, i) => {
                if (position === i) {
                  return (
                    <div key={i} className="o-games">
                      {categorieSelected === categorie.categorie ? (
                        <div key={i} className="o-games-row">
                          {Object.values(categorie.games).map((game, i) => {
                            return (
                              <Game
                                key={i}
                                imgGame={game.urlgame}
                                titleGame={game.nameGame}
                                companyGame={game.companyGame}
                              />
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
