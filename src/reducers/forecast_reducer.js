import { FETCH_FORECAST } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_FORECAST:
      return state.concat(action.payload.data.forecast.simpleforecast.forecastday);

  }
  return state;
}