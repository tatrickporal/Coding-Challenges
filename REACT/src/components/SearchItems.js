import React, { Component } from 'react';
import '../index.css';

class AppCarsContainer extends Component {
    state = {
        filter:"default",
        search:"Type Query"
    }

    _updateSearch(event){
        this.setState({search:event.target.value});
        let filter = this.state.filter;
        let search = event.target.value.toLowerCase();
        let carList = [];
        if(filter !== 'default'){
            this.props.cars.forEach(function(car){
                if(car[filter].toLowerCase().indexOf(search) !== -1){
                carList.push(car);
                }
            }
            );
            this.props.searchCallback(carList);
        } else {
            this.props.searchCallback(this.props.cars);
        }
    }
    _updateFilter(event) {
        this.setState({filter:event.target.value})
    }

    render() {
        return (
        <div>Filter By:
        <select onChange={this._updateFilter.bind(this)} value={this.state.filter}>
            <option value="default" >View All Cars</option>
            {Object.keys(this.props.cars[0]).map(key =>
                <option key={key} value={key}>{key}</option>
            )}
        </select>
        <input value={this.state.search} onChange={this._updateSearch.bind(this)}></input>
        </div>
        );
  }
}

export default AppCarsContainer;