import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
