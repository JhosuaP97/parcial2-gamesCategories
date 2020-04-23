import React from "react";
import Categorie from "./Components/Categorie/Categorie";
import "./App.scss";

function App() {
  return (
    <div className="o-categorie">
      <div className="o-categorie-title">
        <h1>Elige una categoria</h1>
      </div>
      <div className="o-figures">
        <div className="o-ellipse">
          <img src="/figure/Ellipse.svg" alt="" />
        </div>
        <div className="o-waves">
          <img src="/figure/waves.svg" alt="" />
        </div>
      </div>
      <div className="o-categorie-list">
        <Categorie urlCategorie="/img/action.jpg" categorieTitle="Acción" />
        <Categorie urlCategorie="/img/arcade.jpg" categorieTitle="Arcade" />
        <Categorie urlCategorie="/img/sport.jpg" categorieTitle="Deportes" />
        <Categorie urlCategorie="/img/simulation.jpg" categorieTitle="Simulación" />
        <Categorie urlCategorie="/img/strategy.jpg" categorieTitle="Estrategia" />
      </div>
    </div>
  );
}

export default App;
