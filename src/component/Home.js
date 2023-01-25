import React, { useState } from "react";
import axios from "axios";
// import API_KEY from '../../../imdbsearch/.env'

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const API_KEY = "8125db8f67d23da1d30f6063b1b794b8";
  const img_base_path = "https://image.tmdb.org/t/p/original/";

  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=true`
      );
      setMovies(result.data.results);
      // console.log(movies);
    }
    fetchData();
  };

  function SearchResult() {
    return (
      <div className="searchResults">
        {movies.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <img
                style={{ height: "300px", width: "300px" }}
                src={
                  movie.poster_path
                    ? img_base_path + movie.poster_path
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaSsgtnT5VCfSkzpZhpCgVtx-byH2inwpi-9sqDV-&s"
                }
                // src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1579952363873-27f3bade9f55%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rk9PVEJBTEx8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FFOOTBALL&tbnid=AHSaBgwBEeqGmM&vet=12ahUKEwiJ56fun-D8AhW1M7cAHRlWAncQMygBegUIARDjAQ..i&docid=1HtjWpFCE7o02M&w=1000&h=1333&q=football&ved=2ahUKEwiJ56fun-D8AhW1M7cAHRlWAncQMygBegUIARDjAQ"
                alt="poster"
              />
              <h4 style={{ fontSize: "50" }}>{movie.title}</h4>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="tmbdSearch">
        <form action="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a movie"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <SearchResult />
      </div>
    </>
  );
}

export default Home;
