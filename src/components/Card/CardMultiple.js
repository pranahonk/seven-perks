import React from 'react';
import PropTypes from "prop-types";
import placeholder from "../../assets/images/The-peaks.png"

// eslint-disable-next-line react/prop-types
const CardMultiple = ({data = [], color = "#F50057"}) => {
    console.log(data)
    return (
        <div>
            <div style={{borderBottom: `3px solid ${color}`}}>
                <img src={placeholder} alt="Placeholder" width="100%"/>
                <div className="Content-Card">
                    <div className="Content-title">
                        {data.webTitle}
                    </div>
                </div>
            </div>

            <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                <div className="Content-Card">
                    <div className="Content-title">
                        {data.webTitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

CardMultiple.prototype = {
    data: PropTypes.array || PropTypes.object,
    color: PropTypes.string
}

export default CardMultiple;
