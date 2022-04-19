import React, {useEffect, useState} from 'react';
import Api from "../API/service";
import {BsFillBookmarkFill} from "react-icons/bs";
import Select from "../components/select";
import Content from "../components/content";
import Card from "../components/Card/Card";


function Home() {
    const api = new Api;
    const [selectedOption, setSelectedOption] = useState("");
    const [newsData, setNewsData] = useState([]);
    const [sportsData, setSportsData] = useState([]);

    const options = [
        {
            "key":  "newest",
            "value" : "Newest First"
        },
        {
            "key":  "oldest",
            "value" : "Oldest First"
        },
        {
            "key":  "relevance",
            "value" : "Most Popular"
        }
    ];

    const fetchNewsData = (orderBy, length) => {
        api.getNews(orderBy, length)
            .then((res)=>{
                setNewsData(res.data.response.results)
                console.log(res.data.response.results);
            })
            .catch((err) => console.log(err));
    }

    const fetchSportsData = (orderBy, length) =>{
        api.getSportsNews(orderBy, length)
            .then((res)=>{
                setSportsData(res.data.response.results)
                console.log(res.data.response.results)
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=>{
        if (selectedOption) fetchNewsData(selectedOption, 8);
        if (selectedOption) fetchSportsData(selectedOption, 3);
    }, [selectedOption])

    return (
        <div>
            <div className="container">
                <div className="mt-5 row">
                    <div className="App-headline col-8">
                        Top Stories
                    </div>
                    <div className="col-2">
                        <button className="btn-bookmark">
                            <BsFillBookmarkFill color="white" /> &nbsp;&nbsp; VIEW BOOKMARK
                        </button>
                    </div>
                    <div className="col-2">
                        <Select options={options} onChange={setSelectedOption} />
                    </div>
                </div>
                <Content newsData={newsData} />
                <div className="row mt-3">
                    {
                        newsData.slice(5).map((data, index) =>{
                            return(
                                <div key={index} className="col-4">
                                    <Card data={data}  />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="App-headline mt-4">
                    Sports
                </div>
                <div className="row mt-3">
                    {
                        sportsData.map((data, index) =>{
                            return(
                                <div key={index} className="col-4">
                                    <Card data={data} isSport />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

Home.propTypes = {

};

export default Home;
