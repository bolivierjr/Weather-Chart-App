import { combineReducers } from 'redux';
import ForecastReducer from './forecast_reducer';

const rootReducer = combineReducers({
  forecast: ForecastReducer
});

export default rootReducer;
