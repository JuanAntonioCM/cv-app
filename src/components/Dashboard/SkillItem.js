import React from 'react';
import {
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DeleteIcon from '@material-ui/icons/Delete';

function SkillItem({ skill }) {
  return (
    <ListItem button spacing={0}>
      <ListItemIcon>
        <NavigateNextIcon />
      </ListItemIcon>
      <ListItemText primary={skill.name} secondary={skill.level} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default SkillItem;
