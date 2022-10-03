import { useEffect, useState } from "react";
import MovieCard from "./component/MovieCard";
import "./App.css";
import Footer from "./component/Footer";
const API_URL = "http://www.omdbapi.com?apikey=1ff8c9e0";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    movieData("batman");
  }, []);

  const movieData = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>movieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search here"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <p
          onClick={() => {
            movieData(searchTerm);
          }}
        >
          &#128269;
        </p>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
