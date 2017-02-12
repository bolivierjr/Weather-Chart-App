import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  AreaChart, 
  Area 
} from 'recharts';
import _ from 'lodash';

class ShowMap extends Component {
  showForecast() {
    const highs = this.props.forecast.map( w => {
      // changing key name to know it's the high temp
      const high = w.high;
      const highChange = {
        fahrenheit: "high",
        celsius: "high celsius"
      }
      const newHigh = _.mapKeys(high, (key, value) => highChange[value]);

      // converting newHigh values to intergers for chart
      for (let prop in newHigh) {
        const number = Number(newHigh[prop]);
        newHigh[prop] = number;
      }
      
      // changing key name to know it's the low temp
      const low = w.low;
      const lowChange = {
        fahrenheit: "low",
        celsius: "low celsius"
      }
      const newLow = _.mapKeys(low, (key, value) => lowChange[value]);

      // converting newLow values to integers for chart
      for (let prop in newLow) {
        const number = Number(newLow[prop]);
        newLow[prop] = number;
      }

      // date object
      const date = w.date;

      // merge all the objects together as one for chart use
      const obj = Object.assign({}, newHigh, newLow, date);
      return obj;

    });
    return highs;
  }

  render() {
    const weather = this.showForecast();
    const rowCount = weather.length -1;
    const aspect = 15 / rowCount;


    return (
      <div className="container">
        <ResponsiveContainer aspect={aspect} minHeight={600}>
          <AreaChart data={weather}
            margin={{ top: 10, right: 40, left: 5, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6358" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff6358" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4775ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4775ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis stroke="#d1cfce" dataKey="weekday_short" />
            <YAxis stroke="#d1cfce" />
            <CartesianGrid stroke="#ffffff" strokeDasharray="3 3" />
            <Tooltip />
            <Legend align='right' verticalAlign='top' height={36} iconSize={14} />
            <Area type="monotone" dataKey="high" stroke="#ff6358" fillOpacity={0.8} fill="url(#colorUv)" unit="F" activeDot={{r: 6}} />
            <Area type="monotone" dataKey="low" stroke="#4775ff" fillOpacity={0.8} fill="url(#colorPv)" unit="F" activeDot={{r: 6}} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

function mapStateToProps({forecast}) {
  return { forecast }; // es6 syntax
}

export default connect(mapStateToProps)(ShowMap);