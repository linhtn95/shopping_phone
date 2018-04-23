import React, { Component } from 'react';
import './search.css';

class SearchBox extends Component {
  render() {
    return (
     
        <div className="search-box">
            <input type="text" id="mySearch" placeholder="Enter phone name to search..."/>
            <button>Search</button>
        </div>
    );
  }
}

export default SearchBox;
