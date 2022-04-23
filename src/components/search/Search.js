import React, {useState} from 'react';
import "./Search.scss";
import SearchIcon from "../../assets/images/search-icon.png"
import {searchIndex} from "../../store/actions/counterActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const SearchBox = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const searchChange = (e) => {
        setValue(e.target.value);
        dispatch(searchIndex(e.target.value));

        if(e.target.value.trim().length > 0){
            navigate(`/search/${encodeURI(e.target.value)}`)
        }
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
