import React from 'react'
import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details";
import Bookmark from "./pages/bookmark";
import Header from "./components/header";
import SearchResult from "./pages/searchResult";


const App = () => {
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
