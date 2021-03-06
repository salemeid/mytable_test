import React, { useState, useEffect } from "react";
import "./Header.css";
import image from '../assets/logo_sm.svg';
import { CSSTransition } from "react-transition-group";
import {Link, Router} from "react-router-dom";


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={image} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/data">Search</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/">Distrbution</Link>
          <Link to="/">Contact</Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        +
      </button>
    </header>
  );
}