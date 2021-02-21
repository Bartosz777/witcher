import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import '../styles/App.css';
import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <nav className="menu">
            <Navigation />
          </nav>
          <section className="page">
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}

export default App;
