// Estado inicial
const initialState = {
  skills: [
    {
      'id': 1,
      'name': 'HTML 5 - Jade',
    },
    {
      'id': 2,
      'name': 'CSS 3 - Sass - Stylus '
    }
  ],
  experience: [],
  education: []
};

// Reducer para el resumen profesional
const resumeReducer = (state = initialState, action) => {
  return state;
};

export default resumeReducer;