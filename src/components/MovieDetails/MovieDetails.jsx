import React, { useEffect } from 'react';
import './MovieDetails.scss';
import {useParams} from "react-router";
import {useDispatch,useSelector} from 'react-redux';
import {fetchAsyncMovieDetail,getselectedMovie} from "../../redux/MovieSlice";
const MovieDetails = () =>{
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getselectedMovie);
    console.log(data);
    useEffect(()=>{
        dispatch(fetchAsyncMovieDetail(imdbID))
    },[dispatch,imdbID])
    return(
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movieTitle'>
                    {data.Title}
                </div>
                <div className='oneLiner'>
                <div className='movieRating'>
                    <span className='sTitle'>IMDB Rating <i className='fa fa-star' style={{color:"gold"}}></i>:</span>
                    <span>{data.imdbRating}</span>
                </div>
                <div className='movieRating'>
                    <span className='sTitle'>IMDB Votes <i className='fa fa-thumbs-up'style={{color:"green"}}></i>:</span>
                    <span>{data.imdbVotes}</span>
                </div>
                <div className='movieRating'>
                    <span className='sTitle'>RunTime <i className='fa fa-film' style={{color:"pink"}}></i>:</span>
                    <span>{data.Runtime}</span>
                </div>
                <div className='movieRating'>
                    <span className='sTitle'>Year<i className='fa fa-calendar' style={{color:"lightcoral"}}></i>:</span>
                    <span>{data.Year}</span>
                </div>
                </div>
                <div className='movie-plot'>
                    <span>{data.Plot}</span>
                </div>
                <div className='movie-info'>
                    <div>
                        <span className='sTitle'>Director:</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span className='sTitle'>Stars:</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span className='sTitle'>Generes:</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span className='sTitle'>Languages:</span>
                        <span>{data.Language}</span>
                    </div>
                </div>
            </div>
            <div className='sectionRight'>
                <img src={data.Poster} alt={data.Title}/>
            </div>
        </div>
    );
};

export default MovieDetails;