import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './reducers/rootReducer';
import firebase from '../config/FirebaseConfig';

// Crea los middlewares
const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

// Recibe como parámetro una función reductora que realiza
// los cambios en la aplicación
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

export default store;
