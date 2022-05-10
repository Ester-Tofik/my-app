import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import LogIn from './components/logIn'
import userReducer from './reducer/reducer';
// import {  applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
// import SignUp from './components/signUp';
// import { Route, BrowserRouter } from 'react-router-dom';
// import HomePage from "./components/homePage";
// import MenuButton from './components/menu';
// import EditUserDetails from './components/editUserDetails';
// import Medicines from './components/medicince';
// import Indices from './components/indices';
// import Information from './components/information';
// import DrinkingWater from './components/DrinkingWater';
// import AskADoctor from './components/AskADoctor';
// import ReminderManagement from './components/ReminderManagement';

import { createStore, applyMiddleware } from 'redux'
import App from './App'
import thunk from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
<<<<<<< HEAD
    <BrowserRouter>
      <Route path='/' component={LogIn} exact />
      <Route path='/signUp' component={SignUp} />
      <Route path='/home' component={HomePage} />
      <Route path='/menu' component={MenuButton} />
      <Route path='/edit' component={EditUserDetails} />
      <Route path='/medicince' component={Medicines} />
      <Route path='/indices' component={Indices} />
      <Route path='/information' component={Information} />
      <Route path='/drinkingWater' component={DrinkingWater} />
      <Route path='/askADoctor' component={AskADoctor} />
      <Route path='/reminderManagement' component={ReminderManagement}/>
    </BrowserRouter>
=======
>>>>>>> 72cf54e262fad2979aa696c1fa05e27086a31dc1
  </React.StrictMode>,
  document.getElementById('root')
);

<<<<<<< HEAD
reportWebVitals();
=======
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider store={store}>
//       <BrowserRouter>
//         <Route path='/' component={LogIn} exact />
//         <Route path='/signUp' component={SignUp} />
//         <Route path='/home' component={HomePage} />
//         <Route path='/menu' component={MenuButton} />
//         <Route path='/edit' component={EditUserDetails} />
//         <Route path='/medicince' component={Medicines} />
//         <Route path='/indices' component={Indices} />
//         <Route path='/information' component={Information} />
//         <Route path='/drinkingWater' component={DrinkingWater} />
//         <Route path='/askADoctor' component={AskADoctor} />
//         <Route path='/edit' component={EditUserDetails} />
//         <Route path='/reminderManagement' component={ReminderManagement} />
//       </BrowserRouter>
//     </Provider> */}


//   </React.StrictMode>,
//   document.getElementById('root')
// );

>>>>>>> 72cf54e262fad2979aa696c1fa05e27086a31dc1
