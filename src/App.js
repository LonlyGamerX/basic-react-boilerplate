//NPM imports
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Styles
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Navigation from "./components/Navigation";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navigation />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
