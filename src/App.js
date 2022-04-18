import React, {useEffect, useState} from 'react'
import "./App.scss";
import Header from "./components/header";
// import Footer from "./components/footer";
import { BsFillBookmarkFill } from "react-icons/bs";
import Select from "./components/select";
import Api from "./API/service";
import Content from "./pages/Content";



const App = () => {
    const api = new Api;
    const [selectedOption, setSelectedOption] = useState("");
    const [newsData, setNewsData] = useState([]);

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

     const fetchData = (orderBy, length) => {
       api.getNews(orderBy, length)
           .then((res)=>{
               setNewsData(res.data.response.results)
               console.log(res.data.response.results);
           })
           .catch((err) => console.log(err));
     }

     useEffect(()=>{
         if (selectedOption) fetchData(selectedOption, 5);
         console.log(selectedOption)
     }, [selectedOption])

      return (
          <div>
              <Header />
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
              </div>
              {/*<Footer />*/}
          </div>
      );
}

export default App;
