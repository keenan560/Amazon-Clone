import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-OTE2Mjc3NDUt-w3000._CB404905545_.jpg"
            alt=""
          ></img>
          <div className="home_row">
            <Product
              id='123421423'
              title="The learn startup"
              price="29.99"
              image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
              rating={5}
            />
            <Product
              id='3562356'
              title="New BMW Micro Power Module MPM E60 E61 E63 E64 525 530 545 645 650 M6 M5 61359266274"
              price="229.48"
              image="https://images-na.ssl-images-amazon.com/images/I/311wnt5HrtL._AC_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id='4675456'
              title="Legends of The Hidden Temple Tribute | 90s Halloween Team Costume Unisex T-Shirt"
              price="15.88"
              image="https://images-na.ssl-images-amazon.com/images/I/71yLvq%2B-DLL._AC_SX679._SX._UX._SY._UY_.jpg"
              rating={4}
            />
            <Product
              id='3456467'
              title='Fender Squier Short Scale (24") Stratocaster Learn-to-Play Bundle with Frontman 10G Amp, Cable, Tuner, Strap, Picks..'
              price="259.99"
              image="https://m.media-amazon.com/images/I/71EDM7kOVML._AC_UL640_FMwebp_QL65_.jpg"
              rating={3}
            />
            <Product
              id='4678568'
              title="Yomega The Original Brain - Professional Yoyo For Kids And Beginners, Responsive Auto Return Yo Yo Best For String..."
              price="12.99"
              image="https://images-na.ssl-images-amazon.com/images/I/81DMNk3%2BneL._AC_SL1500_.jpg"
              rating={1}
            />
          </div>

          <div className="home_row">
            <Product
              id='049834584'
              title="Kidrobot South Park Phunny Kyle Plush Figure"
              price="38.95"
              image="https://images-na.ssl-images-amazon.com/images/I/61J%2B3YxoM3L._AC_SL1000_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
