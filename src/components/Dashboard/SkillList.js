import React from 'react';
import {
  Grid,
  List,
  Typography,
  LinearProgress,
  CircularProgress
} from '@material-ui/core';
import SkillItem from './SkillItem';

function SkillList({ skills }) {
  // console.log('skills', skills);
  return (
    <div>
      <Typography variant="subtitle1">Habilidades técnicas</Typography>
      <List dense>
        {skills ? (
          skills.map(skill => {
            return <SkillItem skill={skill} key={skill.id} />;
          })
        ) : (
          <div className="pt-4 flex justify-center">
            <CircularProgress />
          </div>
        )}
      </List>
    </div>
  );
}

export default SkillList;
