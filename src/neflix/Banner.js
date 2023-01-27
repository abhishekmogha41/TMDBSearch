import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
  const [bannerMovie, setBannerMobie] = useState("");
  const img_base_path = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(request.fetchNetflixOriginals);
      console.log(results);
      setBannerMobie(
        results.data.results[
          Math.floor(Math.random() * results.data.results.length)
        ]
      );
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url(" + img_base_path + bannerMovie.backdrop_path + ")",
        }}
      >
        <h1>
          {bannerMovie.title || bannerMovie.name || bannerMovie.original_name}
        </h1>
        <div className="cta">
          <a href="/">Play</a>
          <a href="/">My List</a>
          <p>{bannerMovie.overview?.substring(0, 100)}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
