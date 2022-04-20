import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/MovieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () =>{
    const movies = useSelector(getAllMovies);
    let renderMovies = "";
    renderMovies = 
       movies.Response === "True" ? (
         movies.Search.map((movie,index)=>{
             return(<MovieCard key={index} data={movie}/>)})
    ):(<div className="movies-err"><h3>{movies.Error}</h3></div>);
    return(
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;