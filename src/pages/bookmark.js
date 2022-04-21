import React from 'react';
import {useSelector} from "react-redux";
import Card from "../components/Card/Card";
import Error from "../components/error";

Bookmark.propTypes = {

};

function Bookmark(props) {
    const counter = useSelector((state) => state.counter);

    return (
        <>
            <div className="container">
                <div className="App-headline mt-5">
                    All bookmark
                </div>
                <div className="row mt-3">
                    {
                        counter.bookmark.length > 0 ?
                            counter.bookmark.map((option, index) =>{
                                return(
                                    <div className="col-4 mt-3" key={index}>
                                        <Card data={option}  />
                                    </div>
                                )
                            })
                            :<Error title={"You haven't add Bookmark yet!"}/>
                    }
                </div>
            </div>
        </>
    );
}

export default Bookmark;
