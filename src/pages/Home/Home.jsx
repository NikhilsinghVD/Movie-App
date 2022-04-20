import React, { useEffect } from 'react';

import MovieListing from '../../components/MovieListing/MovieListing';
import './Home.scss';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies} from '../../redux/MovieSlice';
const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAsyncMovies()); 
    },[dispatch]);
    return(
        <>
        <div className='banner-img'>
            <MovieListing/>
         </div>
        </>
    );
};

export default Home;