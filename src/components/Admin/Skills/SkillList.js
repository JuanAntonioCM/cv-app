import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Card,
  Typography,
  CircularProgress,
  TableContainer,
  Toolbar,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import SkillItem from './SkillItem';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  }
}));

function SkillList({ skills }) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Toolbar classes={{ root: classes.root }}>
          <Typography variant="h6">Habilidades técnicas</Typography>
        </Toolbar>
        {skills ? (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Nivel</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {skills.map((skill, index) => {
                  return <SkillItem skill={skill} key={index} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Card classes={{ root: classes.loader }} elevation={0}>
            <CircularProgress />
          </Card>
        )}
      </Paper>
    </div>
  );
}

export default SkillList;
