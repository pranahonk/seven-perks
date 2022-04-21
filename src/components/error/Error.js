import React from "react";
import PropTypes from "prop-types";

const Error = ({title}) => {
  return (
      <>
        <div className="error-page">
          <header className="error-page__header">
            <h1 className="error-page__title nolinks">{title}</h1>
        </header>
          <p className="error-page__message">The page you are looking for could not be found.</p></div>
      </>
  );
};

Error.propTypes = {
  title: PropTypes.string.isRequired
};

export default Error;
