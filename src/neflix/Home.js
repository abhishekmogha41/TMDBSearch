import React from "react";
import Row from "./Row";
import request from "./request";
function Home() {
  return (
    <>
      <Row
        endPoint={request.fetchNetflixOriginals}
        heading="NetflixOriginals"
      />
      <Row endPoint={request.fetchTrending} heading="Trending" />
      <Row endPoint={request.fetchTopRated} heading="TopRated" />
      <Row endPoint={request.fetchActionMovies} heading="Action Movies" />
      <Row endPoint={request.fetchComedyMovies} heading="Comedy Movies" />
      <Row endPoint={request.fetchhorrorMovies} heading="Horror Movies" />
      <Row endPoint={request.fetchRomanceMovies} heading="Romance Movies" />
      <Row endPoint={request.fetchDocumentaries} heading="Documentaries" />
    </>
  );
}

export default Home;
