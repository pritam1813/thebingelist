// Action Type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

//Action Creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addMoviesToList(movie) {
  return {
    type: ADD_MOVIES_TO_LIST,
    movie,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=7d03d79e&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        //Dispatch function
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}