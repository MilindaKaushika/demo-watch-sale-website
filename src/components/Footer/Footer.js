import React from 'react'
import './footer.css'
import { BsFacebook, BsLinkedin, BsTelephoneMinusFill } from 'react-icons/bs'
import { ImInstagram, ImAddressBook } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'


export const Footer = () => {
    return (
        <>
            <section className="contact" id="contacts">

                <div className="contact-contain">
                    <h4>SHIPPING INFO</h4>
                    <li>
                        <a href="/#">New collection</a>
                    </li>
                    <li>
                        <a href="/#">Best sellers</a>
                    </li>
                    <li>
                        <a href="/#">Suppliers</a>
                    </li>
                    <li>
                        <a href="/#">Specials</a>
                    </li>
                </div>

                <div className="contact-contain">
                    <h4>INFORMATION</h4>
                    <li>
                        <a href="/#">Press Room</a>
                    </li>
                    <li>
                        <a href="/#">Help</a>
                    </li>
                    <li>
                        <a href="/#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="/#">Manufacturers</a>
                    </li>
                </div>

                <div className="contact-contain">
                    <h4>Contact</h4>
                    <li>
                        <a href="/#">Contact Us</a>
                    </li>
                    <li>
                        <a href="/#">Press Center</a>
                    </li>
                    <li>
                        <a href="/#">Careers</a>
                    </li>
                    <li>
                        <a href="/#">Faq</a>
                    </li>
                </div>

                <div className="contact-contain">
                    <h4>VISIT OUR OFFICE</h4>
                    <div className="address">
                        <div className="details">
                            <ImAddressBook className="icon-size" />
                            <h3>Adress: 1234 Street Name, City Name</h3>
                        </div>
                        <div className="details">
                            <BsTelephoneMinusFill className="icon-size" />
                            <h3>Phone: (123) 456-7890</h3>
                        </div>
                        <div className="details">
                            <MdEmail className="icon-size" />
                            <h3>Email: info@yourdomain.com</h3>
                        </div>
                    </div>
                    <h5>CONNECT US</h5>
                    <div class="icons">
                        <a href="/#">
                            <BsFacebook className="sizes" />
                        </a>
                        <a href="/#">
                            <ImInstagram className="sizes" />
                        </a>
                        <a href="/#">
                            <BsLinkedin className="sizes" />
                        </a>
                    </div>
                </div>
            </section>
            <div class="last-text">
                <p>© 2022 Wtches. All Right Reserved by Milinda Kaushika </p>
            </div>
        </>
    )
}

export default Footer