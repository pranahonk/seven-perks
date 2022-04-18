import React, {Fragment, useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
import "./Content.scss"
import {setColor} from "../assets/helpers/helpers"
import CardMultiple from "../components/Card/CardMultiple";


const Content = ({newsData, color = "#F50057"}) => {
    const [headline, setHeadline] = useState("");
    const [medium, setMedium ] = useState([])

    const spliceNews = () => {
        setHeadline(newsData.splice(0, 1));
    }

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    const getEvenNews = (item) => {
        for (let i = 0; i < item.length; i++) {
            console.log(i)
            if(i % 2 === 0 && i !== 0){
                console.log(item[i], i)
                addElement(true, item[i])
            }
        }
    }

    const addElement = (bool, item) =>{
        if(bool){
            return (
                <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                    <div className="Content-Card">
                        <div className="Content-title">
                            {item.webTitle}
                        </div>
                    </div>
                </div>
            )
        }
    }

    useEffect(()=>{
        getEvenNews(newsData)
    }, [newsData])


    return (
        <div className="row mt-4">
            {
                newsData.map((item, number)=>{
                    return (
                        <Fragment key={number}>
                            {
                                number === 0 && (
                                    <div className="col-6">
                                        <div style={{borderBottom: `3px solid ${color}`}}>
                                            <Card color={setColor(item?.pillarName?.toLowerCase())}
                                                  data={item}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            <div className="col-3">
                                <div style={{borderBottom: `3px solid ${setColor(item?.pillarName?.toLowerCase())}`}}>
                                    <div style={{borderBottom: `3px solid ${color}`}}>
                                        <img src="https://via.placeholder.com/728x728.png?text=PLACEHOLDER" alt="Placeholder" width="100%"/>
                                        <div className="Content-Card">
                                            <div className="Content-title">
                                                {
                                                    number % 2 === 1 &&
                                                    item.webTitle
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2" style={{borderBottom: `3px solid ${color}`}}>
                                    <div className="Content-Card">
                                        <div className="Content-title">
                                            {
                                                number % 2 === 0 &&
                                                item.webTitle
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })
            }
        </div>
    );
};

Content.propTypes = {
    newsData: PropTypes.array || PropTypes.object,
    color: PropTypes.string
};

export default Content;
