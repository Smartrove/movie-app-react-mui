import React from "react";
import "../styles/popularMovies.css";
import { img_300 } from "../config/config";

const PopularMovies = ({ id, image, title, year }) => {
  return (
    <div className="media">
      <img className="image" src={`${image}`} alt={title} />
      <b className="title">{title}</b>
    </div>
  );
};

export default PopularMovies;
