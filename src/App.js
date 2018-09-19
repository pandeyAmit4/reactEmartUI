import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './Header';
// import Game from './gameSource/Game';
import Footer from './Footer';
import Carousel from './storeSource/Carousel';
import Tile from './storeSource/Tile';

class App extends Component {
  render() {
      return (
          <div>
              <Header />
              {/* <Game /> */}
              <Carousel />
              <Tile />
              <Footer />
          </div>
      );
  }
}
export default App;