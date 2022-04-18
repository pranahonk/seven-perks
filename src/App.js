import React, {useEffect} from 'react'
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { BsFillBookmarkFill } from "react-icons/bs";
import Select from "./components/select";
import Api from "./API/service";



const App = () => {
    const api = new Api;

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

     const fetchData = () => {
       api.getNews("newest")
           .then((res)=>{
               console.log(res)
           })
           .catch((err) => console.log(err));
     }

     useEffect(()=>{
         fetchData()
     })

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
                          <Select options={options} />
                      </div>
                  </div>
              </div>

              <Footer />
          </div>
      );
}

export default App;
