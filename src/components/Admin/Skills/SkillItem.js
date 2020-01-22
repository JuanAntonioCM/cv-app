import React from 'react';
import { IconButton, TableRow, TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function SkillItem({ skill }) {
  return (
    <TableRow>
      <TableCell>{skill.name}</TableCell>
      <TableCell>{skill.level}</TableCell>
      <TableCell>
        <IconButton edge="end" aria-label="delete" key={skill.id}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default SkillItem;
