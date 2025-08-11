import React from 'react';

import AnimatedComponent from './AnimatedComponent';
import './HomePage.css';
const HomePage = () => {
    return (
        <div className="home-page"
        style={{
          background: `url(${process.env.PUBLIC_URL + '/13.gif'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
        }}>
            <header className="home-header">
                <h1>Welcome to the Cyber Safety Guide for Girls</h1>
                <p>Your safety online is our priority. Explore our resources to stay safe and informed.</p>
                <img src={process.env.PUBLIC_URL + '/1.gif'} alt="Internet of Things" className="home-gif" />
            </header>
            <AnimatedComponent />
            <section className="home-content">
                <h2>What We Offer</h2>
                <ul>
                    <li>Tips for safe online behavior</li>
                    <li>Resources for reporting cyberbullying</li>
                    <li>Guides on privacy settings</li>
                    <li>Support for victims of online harassment</li>
                </ul>
            </section>
            <footer className="home-footer">
                <p>© 2023 Cyber Safety Guide. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;