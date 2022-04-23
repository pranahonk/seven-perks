import React from 'react';
import {BsFillBookmarkFill} from "react-icons/bs";
import Select from "../components/select";

function SearchResult(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="App-headline col-8">
                        Search results
                    </div>
                    <div className="col-2">
                        <button className="btn-bookmark" onClick={()=> navigate("/bookmark")} style={{cursor: "pointer"}}>
                            <BsFillBookmarkFill color="white" /> &nbsp;&nbsp; VIEW BOOKMARK
                        </button>
                    </div>
                    <div className="col-2">
                        <Select options={options} onChange={setSelectedOption} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchResult;
