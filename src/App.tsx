import React, { useEffect, useState} from 'react';
import moment from 'moment';

import {Ipad, Iphone} from './components/home/homeMain'

import './App.css';


function App() {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  useEffect(() => {
    setTime(moment().format('hh:mm'));
    setDate(moment().format('dddd MMM Do'))
    setInterval(() => {
      setTime(moment().format('hh:mm'))
    }, 30 * 1000)
  },[])

  return (
    <div className="App" style={{ height: window.innerHeight }}>
      <header className="name">
        <h1>Chenbao <span style={{ color: '#68a063' }}>YU</span></h1>
      </header>
      <Ipad />
      <Iphone time={time} date={date} />
    </div>
  );
}

export default App;
