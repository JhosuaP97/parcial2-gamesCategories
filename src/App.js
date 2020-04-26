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
/* Función que permite seleccionar una categoria y mostrar los juegos */
  handlerClick(param, i) {
    this.setState({
      categorieSelected: param,
      isSelected: true,
      position: i,
    });
  }

  /* Función que regresa a las categorias */
  handlerReturn() {
    this.setState({
      isSelected: false,
    });
  }

  render() {
    const {categorieSelected, isSelected, position} = this.state;
    return (
      /* Start o-categorie */
      <div className="o-categorie">
      {/*Start o-categorie-title */}
        <div className="o-categorie-title">
          {!isSelected ? (
            /* Start o-figures */
            <div className="o-figures">
              <h1>Elige una categoria</h1>
              <div className="o-ellipse">
                <img src="/figure/Ellipse.svg" alt="" />
              </div>
              <div className="o-waves">
                <img src="/figure/waves.svg" alt="" />
              </div>
            </div>
             /* end o-figures */
          ) : (
             /* start o-title-game */
            <div className="o-title-game">
              <h1>{categorieSelected}</h1>
              <button onClick={() => this.handlerReturn()}>
                <img src="/figure/back.svg" alt="" loading="lazy"></img>
              </button>             
            </div>
            /* end o-title-game */
          )}
          
        </div>
        {/*end o-categorie-title */}

        {/*Start o-categorie-list */}
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
                    /*start o-games */
                    <div key={i} className="o-games">
                      {categorieSelected === categorie.categorie ? (
                         /*start o-games-row */
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
                          {/*end o-games */}
                        </div>
                      ) : null}
                      { /*end o-games */}
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
        {/*end o-categorie-list */}
      </div>
      /*end o-categorie */
    );
  }
}

export default App;
