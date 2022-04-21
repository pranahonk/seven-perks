import React, {useContext} from "react";
import ReactDOM from "react-dom";
import {BsFillBookmarkFill} from "react-icons/bs";
import {BsBookmark} from "react-icons/bs";


import "./Snackbar.scss"
import SnackbarContext from "./snackbar-context";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return ReactDOM.createPortal(
      <div className="snackbar__container" style={{background: snackbarCtx.bgColor|| "#388E3C" }}>
        <div className="snackbar__label">
            {snackbarCtx.bgColor ===  "#388E3C" ? <BsFillBookmarkFill /> : <BsBookmark /> }
            {snackbarCtx.msg || "Hello!"}
        </div>
        <div className="snackbar__dismiss" onClick={snackbarCtx.onClose}>
          &times;
        </div>
      </div>,
      document.getElementById("snackbar__root")
  )
};

Snackbar.propTypes = {
  //
};

export default Snackbar;
