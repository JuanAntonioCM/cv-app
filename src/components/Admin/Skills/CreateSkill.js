import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

import { createSkill } from '../../../store/actions/skillActions';
import Notification from '../Notification/Notification';

const useStyles = makeStyles(() => ({
  formControl: { minWidth: '100%' }
}));

function CreateSkill({ createSkill }) {
  const classes = useStyles();

  const [state, setState] = useState({ name: '', level: '' });
  const [operationStatus, setOperationStatus] = useState(null);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setOperationStatus(null);

    if (state.name !== '' && state.level !== '') {
      createSkill(state)
        .then(({ skill }) => {
          setOperationStatus('success');
        })
        .catch(error => {
          setOperationStatus('error');
        });
    } else {
      console.log('warning');
      setOperationStatus('warning');
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
                <Typography gutterBottom variant="h6" component="h1">
                  Nueva habilidad
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
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
                </FormControl>
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
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Agregar
                </Button>
              </Grid>
              {operationStatus !== null ? (
                <Grid item xs={12}>
                  <Notification status={operationStatus} />
                </Grid>
              ) : null}
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createSkill: skill => dispatch(createSkill(skill))
  };
};
export default connect(null, mapDispatchToProps)(CreateSkill);
