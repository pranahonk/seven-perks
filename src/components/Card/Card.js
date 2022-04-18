import React from "react";
import PropTypes from "prop-types";

const Card = ({imageUrl}) => {
    return (
      <div>
        <img src={imageUrl} alt="News Logo"/>
      </div>
  );
};

Card.propTypes = {
    imageUrl: PropTypes.string
};

export default Card;
