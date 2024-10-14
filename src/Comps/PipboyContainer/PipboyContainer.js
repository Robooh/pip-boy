import React, { useState } from "react";
import './pbc.css'
import { Link } from "react-router-dom";
const PipboyContainer = ({ children}) => {
  const [currentPage, setCurrentPage] = useState("/")

  return (
    <div className="pipboy-container">
      <div>
        <div className="screen">
          {children}
        </div>
      </div>
      <div className="button-container">
        <Link to="/">
          <button
            className={`button ${currentPage === "/" ? "active" : ""}`}
            onClick={() => setCurrentPage("/")}
          >
            <span>HOME</span>
          </button>
        </Link>

        <Link to="/misc">
          <button
            className={`button ${currentPage === "/misc" ? "active" : ""}`}
            onClick={() => setCurrentPage("/misc")}
          >
            <span>MISC</span>
          </button>
        </Link>

        <Link to="/radio">
          <button
            className={`button ${currentPage === "/radio" ? "active" : ""}`}
            onClick={() => setCurrentPage("/radio")}
          >
            <span>RADIO</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PipboyContainer;





