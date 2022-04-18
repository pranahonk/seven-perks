import React from "react";
import PropTypes from "prop-types";
import Select from "../components/select";

const Content = ({newsData}) => {
    console.log(newsData)
    return (
        <div className="row">
            <div className="col-6">
              test

            </div>
            <div className="col-3">
                test

            </div>
            <div className="col-3">
                test

            </div>

        </div>
    );
};

Content.propTypes = {
    newsData: PropTypes.array || PropTypes.object
};

export default Content;
