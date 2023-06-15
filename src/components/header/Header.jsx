import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (route) => {
    navigate(route);
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigationHandler("/")}>
          <span>CINEMAHUB</span>
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => navigationHandler("/explore/movie")}
          >
            Movies
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("/explore/tv")}
          >
            TV Shows
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("/contact")}
          >
            Contact
          </li>

          <li className="menuItem">
            <FaSearch onClick={openSearch} id="searchicn" />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <FaSearch id="mobileSearchIcon" onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              id="menuClose"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a Movies or Tv Shows....."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
