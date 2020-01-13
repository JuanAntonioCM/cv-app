/* eslint-disable no-multi-str */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

// Estado inicial
let initialState = {
  skills:[
    {
      id: 1,
      name: "HTML 5 - Jade"
    },
    {
      id: 2,
      name: "CSS 3 - Sass - Stylus"
    }
  ],
  experience:[],
  education:[]
};

// Reducer para el resumen profesional
const resumeReducer = (state = initialState, action) => {
  return state;
};

export default resumeReducer;