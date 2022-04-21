import React from 'react'
import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details";
import Header from "./components/header";
import Footer from "./components/footer/Footer";


const App = () => {
      return (
          <>
              <Header />
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path=':publisher/:year/:month/:date/:title' element={<Details />} />
                      <Route path=':publisher/:live/:year/:month/:date/:title' element={<Details />} />
                  </Routes>
              <Footer />
          </>
      );
}

export default App;
