import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Article from './article';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Article />
      <Footer />
      </div>
    );
  }
}

export default App;
