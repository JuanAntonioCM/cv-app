import React from 'react';
import { connect } from 'react-redux';

import { IconButton, TableRow, TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteSkillAction } from '../../../store/actions/skillActions';

function SkillItem({ skill, deleteSkill }) {
  return (
    <TableRow>
      <TableCell>{skill.name}</TableCell>
      <TableCell>
        <span style={{textTransform: 'capitalize'}}>{skill.level}</span>
      </TableCell>
      <TableCell>
        <IconButton
          edge="end"
          aria-label="delete"
          key={skill.id}
          onClick={() => deleteSkill(skill.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

// export default SkillItem;
const mapDispatchToProps = dispatch => {
  return {
    deleteSkill(documentID) {
      dispatch(deleteSkillAction(documentID));
    }
  };
};

// First param is mapStateToProps
export default connect(null, mapDispatchToProps)(SkillItem);
