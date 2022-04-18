import React from "react";
import "./Header.scss"
import logo from "../../assets/images/White.png"
import Search from "../search";
import PropTypes from "prop-types";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header-content responsive-wrapper">
                    <div className="header-logo">
                        <a href="/" className="logo">
                            <img alt="react-logo" src={logo}/>
                        </a>
                    </div>
                    <nav className="header-nav">
                        <Search />
                    </nav>
                </div>
            </header>
        </div>
    );
};

Header.propTypes = {
    //
};

export default Header;
