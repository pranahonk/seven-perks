import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {BsFillBookmarkFill} from "react-icons/bs";
import Api from "../API/service";
import {convertDate, getDayOfWeek} from "../assets/helpers/helpers";

function Details(props) {
    const api = new Api;
    const [detail, setDetail] = useState("");
    let { pathname } = useLocation();

    const fetchNewsData = (path) => {
        api.getDetailNews(path)
            .then((res)=>{
                console.log(res.data.response.content);
                setDetail(res.data.response.content);
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=>{
        fetchNewsData(pathname)
    }, [])

    return (
        detail ?
        <div>
            <div className="container">
                <div className="mt-5">
                    <button className="btn-bookmark">
                        <BsFillBookmarkFill color="white" /> &nbsp;&nbsp; ADD BOOKMARK
                    </button>
                </div>
                <div>
                    {
                        getDayOfWeek(detail.webPublicationDate)
                    }
                    {
                        convertDate(detail.webPublicationDate)
                    }
                </div>

            </div>
        </div>
            : <div />
    );
}

export default Details;
