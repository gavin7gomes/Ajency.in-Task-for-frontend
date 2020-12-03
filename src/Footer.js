import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaMapPin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className="footer-body">
        <div className="footer">
            <div className="contact">
                <h4>Contact Us</h4>
                <p><FaMapPin/> Margao, South-Goa</p>
                <p><FaPhoneAlt/> 9876543210</p>
            </div>
            <div className="follow-us">
                <h4>Follow Us</h4>
                <a href="/" className="social"><FaFacebook/></a>
                <a href="/" className="social"><FaTwitter/></a>
                <a href="/" className="social"><FaInstagram/></a>
                <a href="/" className="social"><FaGoogle/></a>
            </div>
            <div className="about">
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, nisi nam eaque consequuntur vero laborum deserunt sit maxime incidunt ipsa? fisk</p></div>
        </div>
        <hr/>
        <p className="copyrights">Copyrights &copy; 2020 Wavvy. All rights reserved</p>
        </div>
    )
}
