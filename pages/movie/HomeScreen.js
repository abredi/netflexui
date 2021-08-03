import React from "react";
// import './HomeScreen.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Request";


function HomeScreen(){
    return (
        <div className='homeScreen'>
           <Nav/>
            <Banner/>



            <Row
                title = "Trending NOW "
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row
                title = "Because you watched "
                fetchUrl={requests.fetchBecauseYouWatchThis}
                isLargeRow
            />
            <Row
                title = "Recommended for you "
                fetchUrl={requests.fetchBecauseYouWatchThis}
                isLargeRow
            />




        </div>
    )
};

export default HomeScreen