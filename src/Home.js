import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card 
          src="https://ssl.cdn-redfin.com/photo/263/mbpaddedwide/225/genMid.838225_1.jpg"
          title="Khoinonia Guesthouse"
          description="The apartment is self catering with luxurious 2 bedroom accommodation. Enjoy the beautifully decorated apartment located right next to the beach."
        />
        <Card 
           src="https://i.pinimg.com/originals/3f/92/d7/3f92d7c7559678a9af034f752075751f.png"
           title="Luc-ster Guesthouse"
           description="Beautiful place."
        />
        <Card 
           src="https://www.malagatransfer.co.uk/blog/wp-content/uploads/2016/06/calahonda-dona-lola.jpg"
           title="Franscchoek Apartments"
           description="Family God Love"
        />
      </div>
      <div className="home__section">
        <Card 
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Diamond City Villas"
          description="Sommer Lekker Hier"
          price="R900/night"
        />
        <Card 
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="Port Nolloth Mansions"
          description="Solid in Port Jollie"
          price="R2500/night"
        />
        <Card 
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Namakwa Daisy Mansions"
          description="Die Poort"
          price="R1800/night"
        />
      </div>
    </div>
  );
}

export default Home;
