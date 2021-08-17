import React from 'react';
import ReactDOM from 'react-dom';

const date=new Date();
const currentday = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const hour =date.getHours();
const minutes =date.getMinutes();
const seconds = date.getSeconds();


const currentdate=new Date().toLocaleDateString();
const currentTime=new Date().toLocaleTimeString();

ReactDOM.render(
  <div>
       <h1>Hello, My Name is Akbar Ali</h1>
       <p>{`Current Date is = ${currentday} / ${currentMonth} / ${currentYear}`}</p>
       <p>{`Current Time is : ${hour} ${minutes} ${seconds}`}</p>

       <h4>Today is {currentdate}</h4>
       <h4>Current Time is {currentTime}</h4>

  </div>,
  document.getElementById('root')
);

