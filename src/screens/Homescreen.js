import React from 'react'
import Row from '../components/Row';
import requests from '../backend/requests';
import Banner from "../components/Banner";
import Nav from '../components/Nav';
import './Homescreen.css';


function Homescreen() {
    return (
        <div>
     <Nav />
     <Banner />
    <Row 
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumantries}/>
        </div>
    )
}

export default Homescreen
