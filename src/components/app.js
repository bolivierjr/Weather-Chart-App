import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ShowMap from '../containers/show_graph';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ShowMap />
      </div>
    );
  }
}
