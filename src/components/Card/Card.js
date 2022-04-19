import React, {useEffect} from "react";
import PropTypes from "prop-types";

const Card = ({ data = [], isSport , height = "260"}) => {


    useEffect(()=>{
        console.log(isSport)

    }, [isSport])

    return (
        <div>
            <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
            <div className="Content-Card-xl"ss>
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
    isSport: PropTypes.bool.isRequired,
    height: PropTypes.string

};

export default Card;
