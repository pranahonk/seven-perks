import React, {useState} from 'react';
import "./Search.scss";
import SearchIcon from "../../assets/images/search-icon.png"
import {searchIndex} from "../../store/actions/counterActions";
import {useDispatch} from "react-redux";


const SearchBox = () => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const searchChange = (e) => {
        setValue(e.target.value);
        dispatch(searchIndex(e.target.value));
    }

    return (
          <form className="search-container" action="//llamaswill.tumblr.com/search">
            <input id="search-box" type="text" placeholder="SearchResult all news" className="search-box" name="q" value={value} onChange={e => searchChange(e)} />
            <label htmlFor="search-box">
                <img alt="search logo" className="search-icon" src={SearchIcon}/>
            </label>
            <input type="submit" id="search-submit"/>
          </form>
    );
};


export default SearchBox;
