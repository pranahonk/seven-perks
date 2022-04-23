import React, {useEffect} from 'react'
import "./App.scss";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details";
import Bookmark from "./pages/bookmark";
import Header from "./components/header";
import SearchResult from "./pages/searchResult";
import {useSelector} from "react-redux";


const App = () => {
    const counter = useSelector((state) => state.counter);
    let navigate = useNavigate();


    useEffect(()=>{
        if(counter.searchResult?.length > 0){
            navigate(`/search/${encodeURI(counter.search?.trim())}`)
        }
       console.log(counter)
    }, [counter])

      return (
          <>
              <Header />
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path=':publisher/:year/:month/:date/:title' element={<Details />} />
                      <Route path=':publisher/:live/:year/:month/:date/:title' element={<Details />} />
                      <Route path='/bookmark' element={<Bookmark />} />
                      <Route path='/search/:id' element={<SearchResult />} />
                  </Routes>
          </>
      );
}

export default App;
