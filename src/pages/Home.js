import React, {useEffect, useState} from 'react';
import Api from "../API/service";
import Content from "../components/content";
import Card from "../components/Card/Card";
import Spinner from "../components/spinner";
import Filter from "../components/filter";


function Home() {
    const api = new Api;
    const [selectedOption, setSelectedOption] = useState("");
    const [newsData, setNewsData] = useState([]);
    const [sportsData, setSportsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchNewsData = (orderBy, length) => {
        api.getNews(orderBy, length)
            .then((res)=>{
                setNewsData(res.data.response.results);
                setLoading(false);
                console.log(res.data.response.results);
            })
            .catch((err) => console.log(err));
    }

    const fetchSportsData = (orderBy, length) =>{
        api.getSportsNews(orderBy, length)
            .then((res)=>{
                setSportsData(res.data.response.results);
                setLoading(false);
                console.log(res.data.response.results);
            })
            .catch((err) => console.log(err));
    }


    useEffect(()=>{
        if (selectedOption) fetchNewsData(selectedOption, 8);
        if (selectedOption) fetchSportsData(selectedOption, 3);
    }, [selectedOption]);


    useEffect(()=>{
        setLoading(false)
    }, [])

    return (
        <>
            {
                !loading  ?
                    <div className="container">
                        <Filter selectOption={setSelectedOption} title={"Top Stories"}  />
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

                    : <Spinner />
            }

        </>
    );
}

Home.propTypes = {

};

export default Home;
