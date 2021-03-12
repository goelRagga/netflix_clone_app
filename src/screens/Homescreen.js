import React from 'react';
import './Homescreen.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Row from '../components/Row';
import requests from '../backend/requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Rommance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumantries} />
    </div>
  );
}

export default HomeScreen;