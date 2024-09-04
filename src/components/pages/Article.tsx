import React from "react";
import { useLocation, useParams } from "react-router-dom";
import HeroSection from "../HeroSection";
import ArticleHero from "../ArticleHero";
import ArticleBody from "../ArticleBody";
import Footer from "../Footer";
const Article = () => {
  const location = useLocation();
  const { title, URL, content } = location.state;

  return (
    <>
      <ArticleHero Title={title} content={content}></ArticleHero>
      <ArticleBody Title={title} URL={URL} content={content}></ArticleBody>
      <Footer></Footer>
    </>
  );
};

export default Article;
