import React from 'react';
import {useParams} from "react-router-dom";

function Details(props) {
    let { newsId } = useParams();

    return (
        <div>Details: {newsId}</div>
    );
}

export default Details;
