import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const img_base_path = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(props.endPoint);
      setMovies(result.data.results);
      console.log(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <h1>{props.heading}</h1>
        <div className="movieRow">
          {movies.map((movie, index) => {
            return (
              <img
                key={index}
                src={img_base_path + movie.poster_path}
                alt="title"
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
