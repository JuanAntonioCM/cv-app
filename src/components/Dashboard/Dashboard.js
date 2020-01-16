import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// import Notification from './Notification';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Paper
} from '@material-ui/core';
import SkillList from './SkillList';

function Dashboard(props) {
  const skillsData = props.skills;
  return (
    <Container maxWidth="md" className="pt-4">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Perfil profesional
          </Typography>
          <Divider />
          <div className="pt-8">
            <SkillList skills={skillsData} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

const mapStatesToProps = state => {
  return {
    // skills: state.skills.skills
    skills: state.firestore.ordered.skills
  };
};

// export default connect(mapStatesToProps)(Dashboard);
export default compose(
  connect(mapStatesToProps),

  firestoreConnect(() => ['skills'])
)(Dashboard);
