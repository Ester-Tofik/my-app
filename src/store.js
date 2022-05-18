import { createStore } from 'redux';
import userReducer from './reducer/reducer';
const store = createStore(userReducer);

export default store;