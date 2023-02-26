import React from 'react'
import './home.css'
import slide_img from '../../assets/item-1.png'

const Home = () => {
    return (
        <section className="home">
            <div className="home-text">
                <h1 data-aos="fade-up" data-aos-duration="1500">Select Your New Perfect Style</h1>
                <p data-aos="fade-up" data-aos-duration="1800" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibu.</p>
                <button className="home-btn" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">Shop Now</button>
            </div>
            <div className="home-image">
            <img src={slide_img} alt="slider"/>
            </div>
        </section>
    )
}

export default Home
