import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {BsFillBookmarkFill} from "react-icons/bs";
import Select from "../select";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearchResult} from "../../store/actions/counterActions";
import Api from "../../API/service";

const Filter = ({selectOption, title}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const counter = useSelector((state) => state.counter);
    const navigate = useNavigate();
    const api = new Api;
    const dispatch = useDispatch();
    const options = [
        {
            "key": "newest",
            "value": "Newest First"
        },
        {
            "key": "oldest",
            "value": "Oldest First"
        },
        {
            "key": "relevance",
            "value": "Most Popular"
        }
    ];

    const fetchSearchData = (query) => {
        api.getSearch(query, selectedOption)
            .then((res)=>{
                dispatch(setSearchResult(res.data.response.results));
                console.log(res.data.response.results);
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        if (counter.search?.trim()?.length > 0) fetchSearchData(counter.search, selectedOption);
    }, [counter])


    useEffect(()=>{
        selectOption(selectedOption);
    }, [selectedOption])

    return (
        <div className="mt-5 row">
            <div className="App-headline col-8">
                {title}
            </div>
            <div className="col-2">
                <button className="btn-bookmark" onClick={() => navigate("/bookmark")} style={{cursor: "pointer"}}>
                    <BsFillBookmarkFill color="white"/> &nbsp;&nbsp; VIEW BOOKMARK
                </button>
            </div>
            <div className="col-2">
                <Select options={options} onChange={setSelectedOption}/>
            </div>
        </div>
    );
};

Filter.propTypes = {
    selectOption: PropTypes.func,
    title: PropTypes.string.isRequired
    //
};

export default Filter;