import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LogIn from './components/logIn'
import { userReducer } from './reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import SignUp from './components/signUp';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from "./components/homePage";
import MenuButton from './components/menu';
import EditUserDetails from './components/editUserDetails';
import Medicines from './components/medicince';
import Indices from './components/indices';
import Information from './components/information';
import DrinkingWater from './components/drinkingWater';
import AskADoctor from './components/askADoctor';
import ReminderManagement from './components/reminderManagement';
import MedicationDetails from './components/medicationDetails';

// const store = createStore(userReducer, applyMiddleware());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' component={LogIn} exact />
      <Route path='/signUp' component={SignUp} />
      <Route path='/home' component={HomePage} />
      <Route path='/menu' component={MenuButton} />
      <Route path='/edit' component={EditUserDetails} />
      <Route path='/medicince' component={Medicines} />
      <Route path='/medicationDetails' component={MedicationDetails} />
      <Route path='/indices' component={Indices} />
      <Route path='/information' component={Information} />
      <Route path='/drinkingWater' component={DrinkingWater} />
      <Route path='/askADoctor' component={AskADoctor} />
      <Route path='/reminderManagement' component={ReminderManagement}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
