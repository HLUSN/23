import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CrudPage from './components/CrudPage';
import AnimatedComponent from './components/AnimatedComponent';
import './App.css';
import GuideListPage from './components/GuideListPage';
import AdminLogin from './components/AdminLogin';

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <Router>
      <div
        className="App"
        style={{
          background: `url(${process.env.PUBLIC_URL + '/7.gif'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/crud">Guide</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/guides">Cyber Safe Entries</Link>
        </nav>
        <AnimatedComponent />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/crud">
            {adminLoggedIn ? (
              <CrudPage />
            ) : (
              <AdminLogin onLogin={() => setAdminLoggedIn(true)} />
            )}
          </Route>
          <Route path="/guides" component={GuideListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
