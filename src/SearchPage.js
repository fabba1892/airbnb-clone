import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__info">
            <p>62 stays 26 August to 30 august 2 guests</p>
            <h1>Stays nearby</h1>
            <Button
            variant="outlined">Cancellation Flexibility</Button>
            <Button
            variant="outlined">Type of place</Button>
            <Button
            variant="outlined">Price</Button>
            <Button
            variant="outlined">Rooms and beds</Button>
            <Button
            variant="outlined">More filters</Button>
        </div>
        <SearchResult 
          img="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          location="Private room in Port Nolloth Diamond City"
          title="5 Star Luxury Villa"
          description="2 guest 1 bedroom 1 bed Wifi Kitchen Free Parking"
          star={3.85}
          price="R90 / night"
          total="R1800 total"
        />
        <SearchResult 
          img="https://media.nomadicmatt.com/2018/apartment.jpg"
          location="Beautifull Beach House"
          title="30min to Mc Dougalls Bay"
          description="3 guest 3 bedroom 3 bed Wifi Kitchen Free Parking"
          star={5.00}
          price="R120 / night"
          total="R2300 total"
        />
        <SearchResult 
          img="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          location="Great room in Scotia Inn Hotel"
          title="5 Star Apartments"
          description="5 guest 3 bedroom 4 bed Wifi Kitchen Free Parking"
          star={4.25}
          price="R200 / night"
          total="R5000 total"
        />
    </div>
  );
}

export default SearchPage;
