import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogIn from './components/logIn'
import { Dialog } from 'primereact/dialog';
import { userReducer } from './reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import SignUp from './components/signUp';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from "./components/homePage";
import MenuButton from './components/menu';

const store = createStore(userReducer, applyMiddleware());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    </Provider>
    <BrowserRouter>
      <Route path='/' component={LogIn} exact />
      <Route path='/signUp' component={SignUp} />
      <Route path='/home' component={HomePage} />
      <Route path='/menu' component={MenuButton} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
