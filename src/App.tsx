import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Article from "./components/pages/Article";
import Footer from "./components/Footer";
import PageNotFound from "./components/pages/PageNotFound";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:title" element={<Article />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </NavBar>
      </Router>
    </>
  );
};

export default App;
