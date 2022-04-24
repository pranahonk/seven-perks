import React, {useEffect, useState} from 'react';
import Filter from "../components/filter";
import {useSelector} from "react-redux";
import Card from "../components/Card/Card";
import {useLocation} from "react-router-dom";
import Spinner from "../components/spinner";


function SearchResult(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const counter = useSelector((state) => state.counter);
    const location = useLocation();

    useEffect(()=>{
        console.log(location)
    }, [location])

    return (
        <>
            <div className="container">
                <Filter selectOption={setSelectedOption} title={"Search result"}  />
                {
                    counter.searchResult?.length > 0 ?
                        <div className="row">

                            {
                                counter.searchResult?.map((option, index) => {
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3" key={index}>
                                            <Card data={option} isSport={false} useParams={location.pathname} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                        :
                        <Spinner />
                }
            </div>

        </>
    );
}

export default SearchResult;
