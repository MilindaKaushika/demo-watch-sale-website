import './brands.css'
import React from 'react'
import logo_1 from '../../assets/3.png'
import logo_2 from '../../assets/5.png'
import logo_3 from '../../assets/7.png'
import logo_4 from '../../assets/8.png'
import logo_5 from '../../assets/9.png'
import logo_6 from '../../assets/10.png'
import logo_7 from '../../assets/12.png'

const Brands = () => {
    return (
        <div>
            <div className="center-text">
                <h4>360° COLLECTION</h4>
                <h2><span>Our </span>Brands</h2>
            </div>
            <div className="brands" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                <div className="brands-logs">
                    <img src={logo_1} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_2} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_3} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_4} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_5} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_6} alt="brands" />
                </div>
                <div className="brands-logs">
                    <img src={logo_7} alt="brands" />
                </div>
            </div>
        </div>
    )
}

export default Brands

