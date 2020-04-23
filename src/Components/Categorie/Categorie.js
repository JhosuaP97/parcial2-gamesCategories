import React from "react";
import "./Categorie.scss";

const Categorie = props => {
    const {urlCategorie,categorieTitle} = props;
  return (
    <div className="o-container">
      <div className="o-img">
        <img src={urlCategorie} alt="" />
      </div>
      <div className="o-title">
        <h1>{categorieTitle}</h1>
      </div>
    </div>
  );
};

export default Categorie;
