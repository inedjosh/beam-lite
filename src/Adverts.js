import React from 'react'
import './Advert.css'

function Adverts({advertName, price, countdown, image}) {
    return (
        <div className='adverts'>
            <div className="advert__image">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Adverts 