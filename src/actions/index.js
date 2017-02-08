import axios from 'axios';
import { API_KEY } from '../../config.js';

const ROOT_URL = `http://api.wunderground.com/api/${API_KEY}/forecast10day/q/`;

export const FETCH_FORECAST = "FETCH_FORECAST";

export function  fetchForecast(city) {
  const url = `${ROOT_URL}${city}.json`;
  const request = axios.get(url);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
}