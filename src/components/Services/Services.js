import React from 'react'
import './services.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'

const Services = () => {
    return (
        <div>
            <section id="services">
            <div className="center-text">
                <h4>Services list</h4>
                <h2><span>Our </span>services</h2>
            </div>
                <div className="service-container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"> 
                    <div className="row">
                        <TbTruckDelivery className="icon" />
                        <h3>Free Shipping Method</h3>
                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>

                    <div className="row">
                        <MdSecurity className="icon" />
                        <h3>Secure System Method</h3>
                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>

                    <div className="row">
                        <MdPayment className="icon" />
                        <h3>Secure Payment System</h3>
                        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
