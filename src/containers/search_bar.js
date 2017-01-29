import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e)  {
    e.preventDefault();
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}