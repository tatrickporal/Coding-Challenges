import React, { Component } from 'react';
import './App.css';
import AppCarsContainer from './components/AppCarsContainer';
import WorkingWithData from './components/WorkingWithData';
import SearchItems from './components/SearchItems';
import axios from 'axios';

class App extends Component {
  state = {
    //Complete List of Cars --unchanged
    cars: [],
    //Filtered List of Cars based on search --mutatable
    filteredCars:[],
    search: "",
    filter: "default",
  }

  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data')
      .then(res => this.setState({cars:res.data, filteredCars:res.data}))
  }

  searchCallback(filteredItems){
    this.setState({filteredCars:filteredItems})
  }

  render() {
    return (
      <div className="App">
          <h1>
            React Car Detail and Data Management Assignments
          </h1>
          <WorkingWithData cars={this.state.cars} />
          {this.state.cars.length > 0 && 
                <div>Filter By:
                <SearchItems cars={this.state.cars} searchCallback={this.searchCallback.bind(this)}/>
            </div>
          }
          <AppCarsContainer key="CarContainer" cars={this.state.filteredCars} />
      </div>
    );
  }
}

export default App;