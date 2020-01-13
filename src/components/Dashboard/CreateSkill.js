import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 190
  }
}));

function CreateSkill() {
  const classes = useStyles();

  // States at top level
  const [state, setState] = useState({ name: '', level: '' });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
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
                <Typography gutterBottom variant="h5" component="h1">
                  Agrega habilidades
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state.name}
                  id="name"
                  name="name"
                  type="text"
                  label="Nombre de habilidad"
                  variant="outlined"
                  size="medium"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} id="level_label">
                    Nivel de habilidad
                  </InputLabel>
                  <Select
                    labelId="level_label"
                    id="level"
                    name="level"
                    value={state.level}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                  >
                    <MenuItem value="">
                      <em>--</em>
                    </MenuItem>
                    <MenuItem value="basic">Básico</MenuItem>
                    <MenuItem value="intermediate">Intermedio</MenuItem>
                    <MenuItem value="advanced">Avanzado</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CreateSkill;
