import React from 'react';
import PropTypes from "prop-types";

const CardMultiple = ({data}) => {
    return (
        <div>
            <div style={{borderBottom: `3px solid ${color}`}}>
                <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                <div className="Content-Card">
                    <div className="Content-title">
                        {newsData[1]?.webTitle}
                    </div>
                </div>
            </div>

            <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                <div className="Content-Card">
                    <div className="Content-title">
                        {newsData[1]?.webTitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

CardMultiple.prototype = {
    data: PropTypes.array
}

export default CardMultiple;
