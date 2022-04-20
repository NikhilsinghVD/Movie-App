import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { APIKey } from '../common/api/Movieapikey';
import Movieapi from '../common/api/Movieapi';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term)=>{
        console.log(term)
    const response = await Movieapi
    .get(`?i=tt3896198&apikey=${APIKey}&s=${term}&type=movie`);
    return response.data;
});
export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail',async (id)=>{
    const response = await Movieapi
    .get(`?&apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
});


const initialState = {
    movies:{},
    shows:{},
    selectedMovie:{},
}

const MovieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload;
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log('Fetched Sucssesfully!');
            return {...state, movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('Rejected!');
        },
        [fetchAsyncMovieDetail.fulfilled]:(state, {payload})=>{
            console.log('Fetched Sucssesfully!!');
            return {...state, selectedMovie:payload};
        },
    },
});

export const { addMovies } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getselectedMovie = (state) => state.movies.selectedMovie;
export default MovieSlice.reducer;