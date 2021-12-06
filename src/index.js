import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
// import SimpleHabit from './components/simpleHabit';
// import Habit from './components/habit';

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleHabit /> */}
    {/* <Habit /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
