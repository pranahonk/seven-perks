import React, {useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types";
import Card from "../components/Card/Card";
import "./Content.scss"
import {setColor} from "../assets/helpers/helpers"


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

    useEffect(()=>{
        spliceNews();
        console.log(medium)
        let init = []
        init.push(chunk(newsData, 2));
        setMedium(init)
    }, [newsData])


    useEffect(()=>{
        console.log(medium)
    }, [medium])



    return (
        <div className="row mt-4">
            <div className="col-6">
              <div style={{borderBottom: `3px solid ${color}`}}>
                 <Card color={setColor(headline[0]?.pillarName?.toLowerCase())}
                 data={headline}
                 />
              </div>
            </div>
            {
                medium.map((item, index)=> {
                    return (
                        <div key={index}>adhdag</div>
                    )

                })
            }
            <div className="col-3">
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
            <div className="col-3">
                test

            </div>

        </div>
    );
};

Content.propTypes = {
    newsData: PropTypes.array || PropTypes.object,
    color: PropTypes.string
};

export default Content;
