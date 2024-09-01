import React from "react";
import "./AboutBody.css";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <div className="about-article-container">
      <div className="about-article-wrapper">
        <div className="about-article-body">
          <p>
            <b>Discovery Daily</b> is a web app designed to keep young students
            informed on STEM news in a classroom-safe environment. Inspired by a
            previous teacher's beloved NewsRoom activity, Discovery Daily
            scrapes and filters news articles from various sources focused on
            technology, environment, and space. This allows students to keep up
            on current events without the worry of encountering politically
            sensitive content.
          </p>
          <h2>About the Creator</h2>
          <img src="./public/about.JPG" className="about-picture"></img>
          <p>
            Hello! My name is Navarro Cristani and I am a 19 year old aspiring
            Software Engineer passionate about teaching, learning, and making
            technology accessible to all. My interest in tech started at a young
            age with an intense curiosity about the ever-evolving world around
            me. This deep interest has led me to learn and collaborate with
            others in tech and education, sharing my current knowledge as much
            as possible.
          </p>
          <div className="contact-wrapper">
            <h4 className="contacts"> Contact Me!</h4>
            <h4 className="contacts">
              <Link
                className="linkedin-link"
                to="https://www.linkedin.com/in/navarro-cristani/"
              >
                LinkedIn
              </Link>
              <Link
                className="email-link"
                to="javascript:void(0)"
                onClick={() =>
                  (window.location.href = "mailto:yourmail@domain.com")
                }
              >
                Email
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
