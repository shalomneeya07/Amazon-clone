import React from 'react';
import Product from "./Product";
import './Home.css';

function Home() {
    return (
        <div>
          <img
          className="home__image" 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=" "
          />  
          <div className="home__row">
            <Product
            id="12321341"
            title="The Girl Who Lived: A Thrilling Suspense Novel"
            price={10.52}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51K9apEzNhL._SX311_BO1,204,203,200_.jpg"
            />
            <Product
            id="12321342"
            title="Casio Women's G Shock Stainless Steel Quartz Watch with Resin Strap, White, 29"
            price={101.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81DJ6Fc4k9L._AC_UY879_.jpg" />
          </div>
          <div className="home__row">
            <Product
              id="12321343"
              title="Homall Gaming Chair Office Chair High Back Computer Chair PU Leather Desk Chair PC Racing Executive Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support (White)"
              price={156}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61HEqHMkRhL._AC_SL1500_.jpg"
              />
              <Product
            id="12321344"
            title="Echo Dot (3rd Gen) Charcoal with Echo Auto"
            price={64}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61nCzkCteAL._AC_SL1000_.jpg"
            />
            <Product
            id="12321345"
            title="Oriday Field Notebook Set of 5 - Ruled Subject Notebook, Pocket Journal, Diary, Travel Journal, Memo Notebook Sets For Women, Perfect For Gift (5”x8”, Lined, Assorted Patterns)"
            price={14.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/914ajD3iD8L._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321346"
              title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, Transparency, 22 Hours Of Listening Time - Red"
              price={229.95}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61jzJ3TJRjL._AC_SL1500_.jpg"
              />
          </div>
          
        </div>
    )
}

export default Home;
