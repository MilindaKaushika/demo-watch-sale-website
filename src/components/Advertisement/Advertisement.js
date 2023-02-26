import './advertisement.css'
import React from 'react'
import img_one from '../../assets/action-left.png'
import img_two from '../../assets/action-right.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Advertisement = () => {
    return (
        <section id="advert">
            <div className="center-text">
                <h4>360° COLLECTION</h4>
                <h2><span>NEW </span>PRODUCTS</h2>
            </div>
            <div className="advert" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                <div className="advert-img-one">
                    <img src={img_one} alt="left-img" />
                    <div className="fea-text">
                        <h1>APPLE WATCH</h1>
                        <h3>FROM <span>$599</span></h3>
                        <div className="det-btn"><AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className="advert-img-one">
                    <img src={img_two} alt="right-img" />
                    <div className="fea-text">
                        <h1>APPLE WATCH</h1>
                        <p>Everything You Need to Know <br></br>About the Apple Watch</p>
                        <div className="det-btn"><AiOutlineShoppingCart /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement
