import React from "react";
import "./Categorie.scss";
import Proptypes from "prop-types";

/**
 * 
 * @param {String} imgCategorie 
 * @param {String} categorieTitle
 */

const Categorie = (props) => {
  const {imgCategorie, categorieTitle} = props;
  return (
    <div className="o-container">
      <div className="o-img">
        <img src={imgCategorie} alt={categorieTitle} loading="lazy"/>
      </div>
      <div className="o-title">
        <h1>{categorieTitle}</h1>
      </div>
    </div>
  );
};

Categorie.prototypes={
  imgCategorie:Proptypes.string.isRequired,
  categorieTitle:Proptypes.string.isRequired
}

export default Categorie;
