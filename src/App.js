import React, {Component} from "react";
import Categorie from "./Components/Categorie/Categorie";
import "./App.scss";

import Game from "./Components/Game/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorieSelected: "",
      isSelected: false,
      categories: [
        {
          url: "/imgCategorie/action.jpg",
          categorie: "Accion",
          games: [
            {
              urlgame: "/imgGame/action1.jpg",
              nameGame: "Monster hunter world",
              companyGame: "CAPCOM",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
          ],
        },
        {
          url: "/imgCategorie/arcade.jpg",
          categorie: "Arcade",
          games: [
            {
              urlgame: "/imgGame/action1.jpg",
              nameGame: "Monster hunter world",
              companyGame: "CAPCOM",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
          ],
        },
        {
          url: "/imgCategorie/sport.jpg",
          categorie: "Deportes",
          games: [
            {
              urlgame: "/imgGame/action1.jpg",
              nameGame: "Monster hunter world",
              companyGame: "CAPCOM",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
          ],
        },
        {
          url: "/imgCategorie/simulation.jpg",
          categorie: "Simulacion",
          games: [
            {
              urlgame: "/imgGame/action1.jpg",
              nameGame: "Monster hunter world",
              companyGame: "CAPCOM",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
          ],
        },
        {
          url: "/imgCategorie/strategy.jpg",
          categorie: "Estrategia",
          games: [
            {
              urlgame: "/imgGame/action1.jpg",
              nameGame: "Monster hunter world",
              companyGame: "CAPCOM",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
            {
              urlgame: "",
              nameGame: "",
              companyGame: "",
            },
          ],
        },
      ],
    };
  }

  handlerClick(param) {
    this.setState({
      categorieSelected: param,
      isSelected: true,
    });
    /* console.log(param, this.state.categorieSelected, this.state.isSelected); */
  }

  render() {
    return (
      <div className="o-categorie">
        <div className="o-categorie-title">
          {!this.state.isSelected ? (
            <h1>Elige una categoria</h1>
          ) : (
            <h1>{this.state.categorieSelected}</h1>
          )}
        </div>
        <div className="o-figures">
          <div className="o-ellipse">
            <img src="/figure/Ellipse.svg" alt="" />
          </div>
          <div className="o-waves">
            <img src="/figure/waves.svg" alt="" />
          </div>
        </div>

        {/* <div className="o-games">
          <div className="o-games-row">
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
          </div>
          <div className="o-games-row">
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
          </div>
          <div className="o-games-row">
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
          </div>
          <div className="o-games-row">
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
          </div>
          <div className="o-games-row">
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
            <Game
              imgGame="/imgGame/action1.jpg"
              titleGame="Monster hunter World"
              companyGame="CAPCOM"
            />
          </div>
        </div> */}

        <div className="o-categorie-list">
          {!this.state.isSelected ? (
            <div>
              {this.state.categories.map((categorie, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => this.handlerClick(categorie.categorie)}
                  >
                    <Categorie
                      imgCategorie={categorie.url}
                      categorieTitle={categorie.categorie}
                    />
                  </button>
                );
              })}
            </div>
          ) : (
            <div>
              {this.state.categories.map((categorie, i) => {
                return (
                  <div>
                    {this.state.categorieSelected === categorie.categorie ? (
                      <div>
                        {Object.values(categorie).map((game, i) => {
                          console.log(game[i].urlgame);

                          return (
                            <div className="o-games">
                              <div className="o-games-row">
                                <Game
                                  imgGame={game[i].urlgame}
                                  titleGame={game[i].nameGame}
                                  companyGame={game[i].companyGame}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
