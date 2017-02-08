import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e)  {
    e.preventDefault();
    this.props.fetchForecast(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form className="input-group input-group-lg" onSubmit={this.onFormSubmit.bind(this)}>
        <input 
          placeholder="Get a forecast for your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          
        />
        <span className="input-group-btn">s
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchForecast}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);