import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {BsFillBookmarkFill} from "react-icons/bs";
import Select from "../select";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearchResult} from "../../store/actions/counterActions";
import Api from "../../API/service";

const Filter = ({selectOption, title}) => {
    const [selectedOption, setSelectedOption] = useState("newest");
    const navigate = useNavigate();
    const location = useParams();
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
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        if (location.id?.trim()?.length > 0) fetchSearchData(location.id, selectedOption);
    }, [location, selectedOption])


    useEffect(()=>{
        selectOption(selectedOption);
    }, [selectedOption])

    return (
        <div className="mt-5 row">
            <div className="App-headline col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                {title}
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                <button className="btn-bookmark" onClick={() => navigate("/bookmark")} style={{cursor: "pointer"}}>
                    <BsFillBookmarkFill color="white"/> &nbsp;&nbsp; VIEW BOOKMARK
                </button>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
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
