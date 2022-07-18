import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LogIn from './components/user/logIn';
import SignUp from './components/user/signUp';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from "./components/homePage";
import MenuButton from './components/global/menu';
import EditUserDetails from './components/user/editUserDetails';
import Medicines from './components/medicine/medicince';
import Indices from './components/global/indices';
import Information from './components/global/information';
import DrinkingWater from './components/drinkingWater/drinkingWater';
import AskADoctor from './components/askDoctor/askADoctor';
import ReminderManagement from './components/reminderManagement/reminderManagement';
import MedicationDetails from './components/medicine/medicationDetails';
import editMedicineDetails from './components/medicine/editMedicineDetails';

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
      <Route path='/editMedicine' component={editMedicineDetails} />
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
