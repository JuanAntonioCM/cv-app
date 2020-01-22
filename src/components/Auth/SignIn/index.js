import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignInView from './SignIn';

const SignIn = () => {
  const auth = useSelector(state => state.firebase.auth);
  if (auth.uid) return <Redirect to="/admin" />;

  return (
    <div>
      <SignInView />
    </div>
  );
};

export default SignIn;
