import React from 'react'
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Content.scss"
import {setColor} from "../../assets/helpers/helpers"
import placeholder from "../../assets/images/The-peaks.png"


const Content = ({newsData, color = "#F50057"}) => {

    const setLineColor = (index) => {
        setColor(newsData[index]?.pillarName?.toLowerCase())
    }

    const goToDetail = (x) => {
        const base_url = window.location.origin;
        window.location.href = `${base_url}/${x}`;
    }


    return (
        <div className="row mt-4">
            <div className="col-6">
                <div style={{borderBottom: `3px solid ${setLineColor(0)}`}}>
                    <Card data={newsData[0]}/>
                </div>
            </div>
            <div className="col-3">
                <div style={{borderBottom: `3px solid ${setLineColor(1)}`, cursor: "pointer"}} onClick={()=> goToDetail(newsData[1]?.id)}>
                    <div style={{borderBottom: `3px solid ${setLineColor(1)}`}}>
                        <img src={placeholder} alt="Placeholder" width="100%"/>
                        <div className="Content-Card">
                            <div className="Content-title">
                                {
                                    newsData[1]?.webTitle
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={{borderBottom: `3px solid ${setLineColor(2)}`, cursor: "pointer"}} onClick={()=> goToDetail(newsData[2]?.id)}>
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
                <div style={{borderBottom: `3px solid ${setLineColor(3)}`, cursor: "pointer"}} onClick={()=> goToDetail(newsData[3]?.id)}>
                    <div style={{borderBottom: `3px solid ${color}`}}>
                        <img src={placeholder} alt="Placeholder" width="100%"/>
                        <div className="Content-Card">
                            <div className="Content-title">
                                {
                                    newsData[3]?.webTitle
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={{borderBottom: `3px solid ${setLineColor(4)}`, cursor: "pointer"}} onClick={()=> goToDetail(newsData[4]?.id)}>
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
