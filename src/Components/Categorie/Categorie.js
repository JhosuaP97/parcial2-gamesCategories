import React from "react";
import "./Categorie.scss";

const Categorie = (props) => {
  const {imgCategorie, categorieTitle} = props;
  return (
    <div className="o-container">
      <div className="o-img">
        <img src={imgCategorie} alt="" loading="lazy"/>
      </div>
      <div className="o-title">
        <h1>{categorieTitle}</h1>
      </div>
    </div>
  );
};

export default Categorie;
