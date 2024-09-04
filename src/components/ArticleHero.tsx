import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import "./ArticleHero.css";
interface Props {
  Title: string;
  content: string[];
}

function ArticleHero({ Title, content }: Props) {
  return (
    <div className="hero-container">
      <img
        className="main-img"
        src={`https://flask-discover-backend-73452853f661.herokuapp.com/imgs/${content[0].slice(
          1
        )}.jpg`}
      ></img>
      <div className="title-container">
        <h1 className="main-title">{Title}</h1>
      </div>
    </div>
  );
}

export default ArticleHero;
