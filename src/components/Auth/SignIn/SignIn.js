import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box
} from '@material-ui/core';
import { signInAction } from '../../../store/actions/authActions';

function SignIn({ authError, signIn }) {
  const [state, setState] = useState({ user: '', password: '' });

  const handleSubmit = event => {
    event.preventDefault();

    if (state.user !== '' && state.password !== '') {
      signIn({
        email: state.user,
        password: state.password
      });
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="sm" className="singin pt-4">
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant="h5">Iniciar sesión</Typography>
                <Box textAlign="left">
                  Para crearte una cuenta contáctate a jcahuanam@gmail.com
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state.user}
                  id="user"
                  name="user"
                  type="text"
                  label="Usuario"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state.password}
                  id="password"
                  name="password"
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  size="small"
                  maxLength="50"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Ingresar
                </Button>
                {authError ? (
                  <Typography
                    variant="subtitle1"
                    color="error"
                    className="py-2"
                  >
                    {authError}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => {
      dispatch(signInAction(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
