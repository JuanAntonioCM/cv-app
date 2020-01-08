import { createStore } from 'redux';
import resumeReducer from '../reducers/resumeReducer';


// Recibe como parámetro una función reductora
// que realiza los cambios en la aplicación
const store = createStore(resumeReducer);

export default store;