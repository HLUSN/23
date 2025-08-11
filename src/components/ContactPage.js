import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page"
        style={{
          background: `url(${process.env.PUBLIC_URL + '/12.gif'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
        }}>
            <h1>Contact Us</h1>
            <div className="contact-container animate__animated animate__fadeIn">
                <h2>Contact Info</h2>
                <p><strong>Email:</strong> cybersafeguide@gmail.com</p>
                <p><strong>Phone:</strong> +94 77 123 4567</p>
                <p><strong>Office Address:</strong> 123 Main Street, Colombo, Sri Lanka</p>
                <img src={process.env.PUBLIC_URL + '/3.gif'} alt="Contact Us" className="contact-gif" />
            </div>
        </div>
    );
};

export default ContactPage;