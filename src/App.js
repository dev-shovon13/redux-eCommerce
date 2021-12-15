import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar";

import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <ProgressBar bgcolor="#669494" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
