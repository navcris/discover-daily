import React from "react";
import "../App.css";
import "./HeroSection.css";
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
        src={"/imgs/" + content[0].slice(1) + ".jpg"}
      ></img>
      <div className="title-container">
        <h1 className="main-title">{Title}</h1>
      </div>
    </div>
  );
}

export default ArticleHero;
