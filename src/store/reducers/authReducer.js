const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  // console.log('reducer', state, action);
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'No se pudo iniciar sesión.'
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNOUT_ERROR':
      return state;
    default:
      return state;
  }
};
export default authReducer;
