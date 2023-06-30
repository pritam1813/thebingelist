import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_MOVIES_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

// Movies Reducer
const intialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = intialMoviesState, action) {
  // if(action.type === ADD_MOVIES){
  //     return {
  //         ...state,
  //         list: action.movies
  //     };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

// Search Reducer
const initalSearchState = {
  result: {},
  showSearchResults: false,
};

export function search (state = initalSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      }
    default:
      return state;
  }
}

// Root Reducer
const initialRootState = {
  movies: intialMoviesState,
  search: initalSearchState,
};

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
