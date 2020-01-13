import React from 'react';
import { Grid } from '@material-ui/core';

function SkillItem() {
  return (
    <Grid container item direction="column" spacing={0}>
      <Grid item className="skill-item">
        <span>HTML5 - Jade</span>
      </Grid>
      <Grid container item className="skill-item" direction="column">
        <span>Basic</span>
        <span>Intermediate</span>
        <span>Advanced</span>
      </Grid>
    </Grid>
  );
}

export default SkillItem;
