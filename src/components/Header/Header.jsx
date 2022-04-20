import React, { useState } from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies} from '../../redux/MovieSlice';
const Header = () =>{
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const sumbmitHandler = (e) => {
        if(term === '')return alert("Please enter valid Movie")
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        setTerm('');
    }
    return(
        <div className='header'>
            
            <div className='logo'>
            <Link to='/' style={{textDecoration:"inherit"}}>Movie App</Link>
            </div>
            <div className='searchBar'>
                <form onSubmit={sumbmitHandler}>
                    <input type="text" value={term} placeholder="Search for Movies" onChange={(e)=> setTerm(e.target.value)} />
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src='https://images.pexels.com/photos/2257777/pexels-photo-2257777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='user'/>
            </div>
        </div>
    );
};

export default Header;