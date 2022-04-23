import React from "react";
import PropTypes from "prop-types";
import placeholder from "../../assets/images/The-peaks.png"

const Card = ({ data = [], isSport , height = "260", useParams=""}) => {

    const goToDetail = (x) => {
        const base_url = window.location.origin;
        window.location.href = `${base_url}/${x}`;
    }

    return (
        <div onClick={()=> goToDetail(data?.id)} style={{cursor: "pointer"}}>
            <img src={placeholder} alt="Placeholder" width="100%"/>
            <div className="Content-Card-xl">
                <div className="Content-title">
                    {data?.webTitle}
                </div>
                {
                    !isSport &&
                    <div className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                }
            </div>
        </div>
  );
};

Card.propTypes = {
    data: PropTypes.any,
    isSport: PropTypes.bool,
    height: PropTypes.string,
    useParams: PropTypes.string
};

export default Card;
