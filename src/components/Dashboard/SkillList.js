import React from 'react';
import { Grid } from '@material-ui/core';
import SkillItem from './SkillItem';

function SkillList() {
  return (
    <Grid container direction="column" spacing={3}>
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
    </Grid>
  );
}

export default SkillList;
