import React, { useState } from 'react';
import '../../config/Colors';
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography
} from '@material-ui/core';

function SingIn() {
  // States at top level
  const [state, setState] = useState({ user: '', password: '' });

  const handleSubmit = event => {
    event.preventDefault();
    console.log('data =>', state);
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
                <Typography variant="h5">Identifícate</Typography>
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
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SingIn;
