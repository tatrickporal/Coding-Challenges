import React, { Component } from 'react';
import CarCard from './CarCard.js';
import '../index.css';


class AppCarsContainer extends Component {

  render() {
    return this.props.cars.map((car) => 
      <CarCard isSelected={false} car={car}/>
    );
  }
}

export default AppCarsContainer;
