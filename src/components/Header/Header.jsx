import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <div className='header'>
            <Link to='/' style={{textDecoration:"inherit"}}>
            <div className='logo'>
                Movie App
            </div>
            </Link>
            <div className='user-image'>
                <img src='https://images.pexels.com/photos/2257777/pexels-photo-2257777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='user'/>
            </div>
        </div>
    );
};

export default Header;