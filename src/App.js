import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Chart1 from './chart1';
import Chart2 from './Chart2';
import * as d3 from 'd3';

const data1 = [12, 36, 15, 24, 35, 10, 40];
const data2 = [5, 4, 15, 12, 9, 20, 18, 15];
const data3 = [9, 9, 19, 6, 28, 29, 36, 18];

const w = 700;
const h = 400;

function App() {

  return (
    <div className="App">
        {/* <Chart1 /> */}
        <Chart2 data={data2} w={w} h={h} color="green"/>
    </div>
  );
}

export default App;
