import Card from "./Card";
import data from "./combined.json";
import "./AllCards.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface Article {
  title: string;
  URL: string;
  content: string[];
}

const AllCards = () => {
  const [cards, setCards] = useState("triple");
  const [data, setData] = useState<Article[] | null>(null);

  useEffect(() => {
    fetch("https://flask-discover-backend-73452853f661.herokuapp.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const showCards = () => {
    if (window.innerWidth <= 1170) {
      setCards("single");
    } else if (window.innerWidth <= 1660) {
      setCards("double");
    } else {
      setCards("triple");
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    showCards();
  }, []);

  window.addEventListener("resize", showCards);

  return (
    <div className="card-list">
      <div className="header">Articles Await...</div>
      <div
        className={
          cards === "single"
            ? "row row-cols-1 row-cols-1 g-4"
            : cards === "double"
            ? "row row-cols-1 row-cols-md-2 g-4"
            : "row row-cols-1 row-cols-3 g-4"
        }
      >
        {data ? (
          data.map((item) => (
            <Link
              to={"/article/$" + item.title}
              state={{
                title: item.title || "No Title",
                URL: item.URL || "No URL",
                content: item.content || "No Article Body",
              }}
              className="custom-link"
            >
              <div>
                <Card
                  Title={item.title || "Article Not Found"}
                  Blurb={item.content[1]}
                  Img_src={`https://flask-discover-backend-73452853f661.herokuapp.com/imgs/${item.content[0].slice(
                    1
                  )}.jpg`}
                  key={item.title}
                ></Card>
              </div>
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AllCards;
