import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
interface Props {
  Title: string;
  Img_src: string;
  Blurb: string;
}
const Card = ({ Title, Img_src, Blurb }: Props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={Img_src} className="card-img-top" alt={Title} />
          <h3 className="card-title">{Title}</h3>
          <p className="card-text">{Blurb.substring(0, 250) + "..."}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
