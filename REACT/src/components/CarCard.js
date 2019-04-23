import React, { Component } from 'react';
import '../index.css';

class CarCard extends Component {
  state = {
      isSelected: false,
  }
  _showDetails(){
    this.setState({isSelected: !this.state.isSelected})
  }
  render() {
      const car = this.props.car;
      let isSelected = this.state.isSelected;
    return (
        <div className="car-card">
            <p>
              ({car["Vehicle Country"]}) {car.Year} {car.Make} {car.Model} - <button onClick={this._showDetails.bind(this)}>{!isSelected ? 'Show More' : 'Show Less'}</button>
            </p>
            {isSelected === true &&
            <p>
                Here are the details (there's a lot) <br></br>
                Styling - {car.Styling} <br></br>
                Acceleration - {car.Acceleration} <br></br>
                Handling - {car.Handling} <br></br>
                Fun Factor - {car["Fun Factor"]} <br></br>
                Cool Factor - {car["Cool Factor"]} <br></br>
                Weekend Score Toral = {car["Weekend Score Total"]} <br></br>
                Features - {car["Features"]} <br></br>
                Comfort - {car["Comfort"]} <br></br>
                Quality - {car["Quality"]} <br></br>
                Practicality - {car["Practicality"]} <br></br>
                Value - {car["Value"]} <br></br>
                Daily Score Total = {car["Daily Score Total"]} <br></br>
                Total Score = {car["Total Score"]} <br></br>
                Commercial - {car["Video Link"]}, {car["Filmed At City"]}, {car["Filmed At Country"]}<br></br>
            </p>
          
            }
      </div>
    );
  }
}

export default CarCard;