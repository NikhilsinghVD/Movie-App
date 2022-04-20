import React from 'react';
import './MovieCard.scss';
import {Link} from 'react-router-dom';
const MovieCard = (props) =>{
    const {data} = props;
    return(
       <div className='cardItem'>
           <Link to={`/movie/${data.imdbID}`}>
           <div className='classInner'>
               <div className='cardTop'>
                   <img src={data.Poster} alt={data.Title}/>
               </div>
               <div className='classBottom'>
                   <div className='cardInfo'>
                       <h4>{data.Title}</h4>
                       <p>{data.Year}</p>
                   </div>
               </div>
           </div>
           </Link>
       </div>
    );
};

export default MovieCard;