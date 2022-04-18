import React from "react";
import PropTypes from "prop-types";

const Card = ({ color, data = []}) => {
    console.log(data)
    return (
        <div style={{borderBottom: `3px solid ${color}`}}>
            <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
            <div className="Content-Card">
                <div className="Content-title">
                    {data?.webTitle}
                </div>
                <div className="mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa illo sed vero. Distinctio dolore earum eius fuga ipsum iure nihil officia sunt! Blanditiis consequatur distinctio iusto molestiae veniam voluptates!
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
