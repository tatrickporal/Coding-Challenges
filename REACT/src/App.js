import React, { Component } from 'react';
import './App.css';
import AppCarsContainer from './components/AppCarsContainer.js';
import axios from 'axios';

class App extends Component {
  state = {
    //Complete List of Cars --unchanged
    cars: [],
    //Filtered List of Cars based on search --mutatable
    filteredCars:[],
    search: "",
    filter: "",
  }

  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data')
      .then(res => this.setState({cars:res.data, filteredCars:res.data}))
  }
  _updateSearch(event) {
    this.setState({search:event.target.value})
    let filter = this.state.filter;
    let search = event.target.value;
    let carList = [];
    if(filter !== 'default'){
        this.state.cars.forEach(function(car){
            if(car[filter].indexOf(search) !== -1){
            carList.push(car);
            }
        }
        );
        this.setState({filteredCars: carList});
    } else {
        this.setState({filteredCars: this.state.cars});
    }
}
_updateFilter(event) {
    this.setState({filter:event.target.value})
}
  render() {
    return (
      <div className="App">
          <h1>
            React Car Detail Assignment
          </h1>

          {this.state.cars.length > 0 &&
               <div>Filter By:
               <select onChange={this._updateFilter.bind(this)} value={this.state.filter}>
                   <option value="default" selected>Select Filter</option>
                   {Object.keys(this.state.cars[0]).map(key =>
                       <option  value={key}>{key}</option>
                   )}
               </select>
               <input value={this.state.search} onChange={this._updateSearch.bind(this)}></input>
           </div>
          }
          <AppCarsContainer cars={this.state.filteredCars}/>
      </div>
    );
  }
}

export default App;