import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './reducers/eventReducer';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import EventsContainer from './containers/EventsContainer';
import EventInput from './containers/EventInput';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(eventReducer, composedEnhancer)

ReactDOM.render(
  <Router>
    <div align="center">
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/events" component={EventsContainer} />
    <Route exact path="/events/new" component={EventInput} />
    </Provider>
    </div>
  </Router>,
  document.getElementById('root')
);

// Did not need to import a history file here, so deleted lines referring to it.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
