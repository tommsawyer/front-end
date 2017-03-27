import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppPanel from '../components/AppPanel.js'
import { teal50 } from 'material-ui/styles/colors'


import Pizzas from '../containers/Pizzas.js';

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: teal50}}>
        <AppPanel title='Ivanovo food'/>

        <Pizzas />

      </div>
    );
  }
}

export default Home;
