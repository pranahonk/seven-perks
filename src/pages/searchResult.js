import React, {useState} from 'react';
import Filter from "../components/filter";
import {useSelector} from "react-redux";
import Card from "../components/Card/Card";


function SearchResult(props) {
    const [selectedOption, setSelectedOption] = useState("");
    const counter = useSelector((state) => state.counter);

    return (
        <>
            <div className="container">
                <Filter selectOption={setSelectedOption} title={"Search result"}  />
                <div className="row">

                    {
                        counter.searchResult?.map((option, index) => {
                            return (
                                <div className="col-4 mt-3" key={index}>
                                    <Card data={option}/>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        </>
    );
}

export default SearchResult;
