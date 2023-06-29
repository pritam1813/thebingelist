import React from "react";
import "../assets/css/App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    //Make API Call
    //Dispatch action

    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log("STORE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      return true; //If there is a matching index then movie is found
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {

    // Current state { movies: {}, search: {} }

    const { movies } = this.props.store.getState(); //Destructuring rootReducer to get movies state
    const { list, favourites, showFavourites } = movies; //Destructuring movies State

    const displayMovies = showFavourites ? favourites : list;
    console.log("RENDER ", this.props.store.getState());
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movie">Nothing to Display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
