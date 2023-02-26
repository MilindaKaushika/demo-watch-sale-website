import React from 'react'
import './about.css'
import about_img from '../../assets/choce_watch1.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                <img src={about_img} alt="about" />
            </div>
            <div className="about-text" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                <h5>ABOUT THE WATCHES</h5>
                <h2>Watch of Choice</h2>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <button className="abu-btn">Read More</button>
            </div>
        </section>
    )
}

export default About
