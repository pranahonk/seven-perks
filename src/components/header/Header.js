import React from "react";
import "./Header.scss"
import logo from "../../assets/images/White.png"
import Search from "../search";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-content responsive-wrapper">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 col-md-12 col-12 d-flex align-items-center">
                            <div className="header-logo">
                                <a href="/" className="logo">
                                    <img alt="react-logo" src={logo}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-12">
                        <nav className="header-nav">
                            <Search  />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    //
};

export default Header;
