import React, { Component } from 'react';
import '../index.css';


class AppCustomSearch extends Component {
    state = {
        filter:'',
        search:'',
    }
    
  render() {
    return(
        <div>Filter By:
            <select onChange={this._updateFilter.bind(this)} value={this.state.filter}>
                <option value="default" selected>Select Filter</option>
                {Object.keys(this.props.completeList[0]).map(key =>
                    <option  value={key}>{key}</option>
                )}
            </select>
            <input value={this.state.search} onChange={this._updateSearch.bind(this)}></input>
        </div>
    );
  }
}

export default AppCustomSearch;
