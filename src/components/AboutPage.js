import React from 'react';
import './Aboutpage.css';

const AboutPage = () => {
    return (
        <div className="about-page" 
        style={{
          background: `url(${process.env.PUBLIC_URL + '/10.gif'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
        }}>
            <h1>About Cyber Safety Guide for Girls</h1>
            <p>
                Welcome to the Cyber Safety Guide for Girls! Our mission is to empower young girls with the knowledge and tools they need to navigate the digital world safely. 
                In an age where technology is an integral part of our lives, understanding cyber safety is crucial.
            </p>
            <p>
                This guide provides essential tips, resources, and support to help girls protect themselves online. 
                From recognizing online threats to understanding privacy settings, we cover a wide range of topics to ensure a safer online experience.
            </p>
            <p>
                Join us in promoting a safer digital environment for girls everywhere. Together, we can make a difference!
            </p>
            <img src={process.env.PUBLIC_URL + '/2.gif'} alt="About Cyber Safety" className="about-gif" />
        </div>
    );
};

export default AboutPage;