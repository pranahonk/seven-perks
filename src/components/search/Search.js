import React, {useEffect, useState} from 'react';
import "./Search.scss";
import Search from "../../assets/images/search-icon.png"

const SearchBox = () => {
    const [value, setValue] = useState("");

    useEffect(()=>{
        console.log(value)
    }, [value])

    return (
          <form className="search-container" action="//llamaswill.tumblr.com/search">
            <input id="search-box" type="text" placeholder="Search all news" className="search-box" name="q" value={value} onChange={e => setValue(e.target.value)} />
            <label htmlFor="search-box">
                <img alt="search logo" className="search-icon" src={Search}/>
            </label>
            <input type="submit" id="search-submit"/>
          </form>
    );
};


export default SearchBox;
