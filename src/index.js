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
<<<<<<< HEAD
import Medicines from './components/medicince';
import Indices from './components/indices';
import Information from './components/information';
import DrinkingWater from './components/DrinkingWater';
import AskADoctor from './components/AskADoctor';
=======
import ReminderManagement from './components/ReminderManagement';
>>>>>>> 209b3f1377124b9ca54787c331d98c9d022219b3

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
<<<<<<< HEAD
      <Route path='/edit' component={EditUserDetails} />
      <Route path='/medicince' component={Medicines} />
      <Route path='/indices' component={Indices} />
      <Route path='/information' component={Information} />
      <Route path='/drinkingWater' component={DrinkingWater} />
      <Route path='/askADoctor' component={AskADoctor} />
=======
      <Route path='/edit' component={EditUserDetails}/>
      <Route path='/reminderManagement' component={ReminderManagement}/>
>>>>>>> 209b3f1377124b9ca54787c331d98c9d022219b3
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
