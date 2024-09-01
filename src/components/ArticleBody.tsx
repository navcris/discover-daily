import React, { useEffect } from "react";
import "./ArticleBody.css";
import { Link } from "react-router-dom";

interface Props {
  Title: string;
  URL: string;
  content: string[];
}

const ArticleBody = ({ Title, URL, content }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  content.shift();
  const data = content;

  return (
    <div className="article-container">
      <div className="article-body" key={URL}>
        {data.map((item, index) =>
          item.slice(0, 2) === "iF" ? (
            <figure className="iframe-container">
              <iframe
                key={index}
                src={item.slice(2)}
                className="iframe-wrap"
              ></iframe>
            </figure>
          ) : item.charAt(0) === "*" ? (
            <div className="img-wrapper">
              <img
                src={"/imgs/" + item.slice(1) + ".jpg"}
                key={index}
                className="img-inside"
              />
            </div>
          ) : item.slice(0, 2) === "fC" ? (
            <figcaption className="figcaption-wrapper">
              {item.slice(2)}
            </figcaption>
          ) : item.slice(0, 2) === "BQ" ? (
            <div className="BQ-wrapper">
              <blockquote>{item.slice(2)}</blockquote>
            </div>
          ) : item.slice(0, 2) === "h2" ? (
            <div className="h2-text-wrapper">
              <h2>{item.slice(2)}</h2>
            </div>
          ) : item.slice(0, 2) === "h4" ? (
            <div className="h4-text-wrapper">
              <h4>{item.slice(2)}</h4>
            </div>
          ) : (
            <div className="article-text-wrapper">
              <p>{item}</p>
            </div>
          )
        )}
      </div>
      <div className="og-article">
        Original Article:{" "}
        <Link to={URL} className="og-link">
          {" "}
          {Title}
        </Link>
      </div>
    </div>
  );
};

export default ArticleBody;
