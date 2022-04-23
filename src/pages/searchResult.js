import React, {useState} from 'react';
import Filter from "../components/filter";


function SearchResult(props) {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <>
            <div className="container">
                <Filter selectOption={setSelectedOption} title={"Search result"}  />
            </div>
        </>
    );
}

export default SearchResult;
