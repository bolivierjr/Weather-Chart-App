import { FETCH_FORECAST } from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch(action.type) {
    case FETCH_FORECAST:
      return [ ...state, action.payload.data.forecast ];

  }
  return state;
}