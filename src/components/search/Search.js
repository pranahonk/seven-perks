import React from 'react';
import "./Search.scss";
import Search from "../../assets/images/search-icon.png"

const SearchBox = () => {

  return (
      <form className="search-container" action="//llamaswill.tumblr.com/search">
        <input id="search-box" type="text" placeholder="Search all news" className="search-box" name="q"/>
        <label htmlFor="search-box">
            <img alt="search logo" className="search-icon" src={Search}/>
        </label>
        <input type="submit" id="search-submit"/>
      </form>
  );
};


export default SearchBox;
