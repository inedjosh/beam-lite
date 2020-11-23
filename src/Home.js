import React from 'react'
import banner from './images/banner.jpg'
import product from './images/product1.jpg'
import product1 from './images/product3.jpg'
import product2 from './images/boots.jpg'
import advert from './images/advert-1.jpg'
import './Home.css'
import Product from './Product'
import Adverts from './Adverts'
import { Link } from 'react-router-dom'
import Flashdeal1 from './Flashdeal1'
import addidas from './images/addidas.jpg'
import womensSneakers from './images/womensSneakers.jpg'


function Home() {
    return (
        <div className='home'>
            <img 
            src={banner}
            alt="" 
            className="home__image"
            />
            {/* row */}
            <div className="home__row">
                  {/* product */}
         <Product
          id='1111222'
          title='adidas Mens Predator 20.3 Firm Ground Sneaker'
          price='30'
          rating={3}
          image={product}
         />
         <Product
          id='1111223'
          title='adidas Mens Predator 20.3 Firm Ground Sneaker'
          price='30'
          rating={2}
          image={product2}
         />
         <Product
          id='1111224'
          title='adidas Mens Predator 20.3 Firm Ground Sneaker'
          price='30'
          rating={5}
          image={product1}
         />
            </div>
    {/* adverts for home poge */}
           <Link to="">
           <div className="home__adverts">
               <Adverts
                image={advert}
               />
            </div>
           </Link>

           <div className="home__deals">
               <Flashdeal1
                image1={addidas}
                image2={womensSneakers}
               />
           </div>

           <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
  
     
       
    )
}

export default Home
