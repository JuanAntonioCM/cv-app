import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import skillsReducer from './skillsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  skills: skillsReducer,
  firestore: firestoreReducer,
  // to user authentication
  firebase: firebaseReducer
});

export default rootReducer;
