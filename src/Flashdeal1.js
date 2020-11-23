import React from 'react'
import './Flashdeal1.css'
function Flashdeal1({advertName, price, countdown, image1, image2}) {
    return (
        <div className='flashdeal'>
            <div className="flashdeal__box1 flashdealbox">
                <img src={image1} alt=""/>
            </div>
            <div className="flashdeal__box2 flashdealbox">
               <img src={image2} alt=""/>
            </div>
        </div>
    )
}

export default Flashdeal1
