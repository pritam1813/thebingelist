import React from "react";
import "../assets/css/App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {

  componentDidMount(){
    //Make API Call
    //Dispatch action

    const { store } = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
    })

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data 
    })

    console.log('STORE', this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState();
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
