import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { reducer } from './redux/reducer'
import { BrowserRouter as Router } from 'react-router-dom'


const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Router><Provider store={store}><App /></Provider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();