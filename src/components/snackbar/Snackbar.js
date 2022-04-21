import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./Snackbar.scss"
import SnackbarContext from "./snackbar-context";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return ReactDOM.createPortal(
      <div className="snackbar__container">
        <div className="snackbar__label">{snackbarCtx.msg || "Hello!"}</div>
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
