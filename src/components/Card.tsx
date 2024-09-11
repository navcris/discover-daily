import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
interface Props {
  Title: string;
  Img_src: string;
  Blurb: string;
  content: string[]
  URL: string
}
const Card = ({ Title, Img_src, Blurb, content, URL}: Props) => {
  return (
    <>
      <div className="col">
        
        <div className="card">
          <Link
        to={"/article/$" + Title}
        state={{
          title: Title || "No Title",
          URL: URL || "No URL",
          content: content || "No Article Body",
        }}
        id="custom-link">
          <img src={Img_src} className="card-img-top" alt={Title} />
          <h3 className="card-title">{Title}</h3>
          <p className="card-text">{Blurb.substring(0, 250) + "..."}</p>
          </Link>
        </div>
       
      </div>
    </>
  );
};

export default Card;
