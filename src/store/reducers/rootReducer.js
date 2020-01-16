import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import skillsReducer from './skillsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  skills: skillsReducer,
  firestore: firestoreReducer
});

export default rootReducer;
