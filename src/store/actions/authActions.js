// import firebase from 'firebase';

const signInAction = credentials => {
  console.log('credentials ', credentials);

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: 'LOGIN_SUCCESS'
        });
      })
      .catch(error => {
        console.log('error', error);

        dispatch({
          type: 'LOGIN_ERROR',
          error
        });
      });
  };
};

const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: 'SIGNOUT_SUCCESS'
        });
      })
      .catch(error => {
        dispatch({
          type: 'SIGNOUT_ERROR',
          error
        });
      });
  };
};

export { signInAction, signOutAction };
