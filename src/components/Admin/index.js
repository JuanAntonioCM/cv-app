import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Container, Card, CardContent } from '@material-ui/core';
import SkillList from './Skills/SkillList';

function Admin({ skills, auth }) {
  return (
    <Container maxWidth="md" className="pt-4">
      <Card elevation={0}>
        <CardContent>
          <SkillList skills={skills} />
        </CardContent>
      </Card>
    </Container>
  );
}

const mapStatesToProps = state => {
  return {
    skills: state.firestore.ordered.skills,
    auth: state.firebase.auth
  };
};

// export default connect(mapStatesToProps)(Admin);
export default compose(
  connect(mapStatesToProps),
  firestoreConnect(() => ['skills'])
)(Admin);
