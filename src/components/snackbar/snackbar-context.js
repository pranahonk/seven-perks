import React, { useState } from "react";
import PropTypes from "prop-types";

const SnackbarContext = React.createContext({
    msg: "",
    isDisplayed: false,
    bgColor: "",
    displayMsg: (msg, bgColor) => {},
    onClose: () => {},
});

let timer;

export const SnackBarContextProvider = (props) => {
    const [msg, setMsg] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [bgColor, setBgColor] = useState("");

    const displayHandler = (msg, bgColor) => {
        setMsg(msg);
        setBgColor(bgColor);
        setIsDisplayed(true);
        timer = setTimeout(() => {
            closeHandler();
        }, 3000); // close snackbar after 3 seconds
    };
    const closeHandler = () => {
        clearTimeout(timer);
        setIsDisplayed(false);
    };

    return (
        <SnackbarContext.Provider
            value={{
                msg,
                isDisplayed,
                bgColor,
                displayMsg: displayHandler,
                onClose: closeHandler,
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};

SnackBarContextProvider.propTypes = {
    children: PropTypes.any
};



export default SnackbarContext;
