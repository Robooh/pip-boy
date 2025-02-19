import React, { useState, useEffect } from "react";
import './pbc.css';
import './pbcMobile.css';

import { Link, useLocation } from "react-router-dom";
const PipboyContainer = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentPage(location.pathname);
    }, 300); 
    return () => clearTimeout(timer);
  }, [location]);


  const isMobile = window.innerWidth <= 768;

  return (
    <div className={`pipboy-container ${isMobile ? 'mobile' : ''}`}>

      <div>
        <div className={`screen ${isTransitioning ? 'transitioning' : ''}`}>
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
