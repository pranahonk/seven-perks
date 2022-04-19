import React from "react";
import PropTypes from "prop-types";

const Card = ({ data = []}) => {
    return (
        <div>
            <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
            <div className="Content-Card-xl">
                <div className="Content-title">
                    {data?.webTitle}
                </div>
                <div className="mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa illo sed vero. Distinctio dolore earum eius
                </div>
            </div>
        </div>
  );
};

Card.propTypes = {
    color: PropTypes.string,
    data: PropTypes.any
};

export default Card;
