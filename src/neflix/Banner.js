import React, { useEffect } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
  useEffect(() => {
    const result = axios.get(request.fetchNetflixOriginals);
    console.log(result);
  }, []);
  return (
    <>
      <div className="banner">
        <h1></h1>
        <div className="cta">
          <a href=""></a>
          <a href=""></a>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Banner;
