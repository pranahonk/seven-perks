import React from 'react'
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
import "./Content.scss"
import {setColor} from "../assets/helpers/helpers"


const Content = ({newsData, color = "#F50057"}) => {

    return (
        <div className="row mt-4">
            <div className="col-6">
                <div style={{borderBottom: `3px solid ${color}`}}>
                    <Card data={newsData[0]}/>
                </div>
            </div>
            <div className="col-3">
                <div style={{borderBottom: `3px solid ${setColor(newsData[1]?.pillarName?.toLowerCase())}`}}>
                    <div style={{borderBottom: `3px solid ${color}`}}>
                        <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                        <div className="Content-Card">
                            <div className="Content-title">
                                {
                                    newsData[1]?.webTitle
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                    <div className="Content-Card-small">
                        <div className="Content-title">
                            {
                                newsData[2]?.webTitle
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div style={{borderBottom: `3px solid ${setColor(newsData[1]?.pillarName?.toLowerCase())}`}}>
                    <div style={{borderBottom: `3px solid ${color}`}}>
                        <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                        <div className="Content-Card">
                            <div className="Content-title">
                                {
                                    newsData[3]?.webTitle
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                    <div className="Content-Card-small">
                        <div className="Content-title">
                            {
                                newsData[4]?.webTitle
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Content.propTypes = {
    newsData: PropTypes.array || PropTypes.object,
    color: PropTypes.string
};

export default Content;
