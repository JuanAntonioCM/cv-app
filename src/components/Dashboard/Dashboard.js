import React from 'react';

// import Notification from './Notification';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import SkillList from './SkillList';

function Dashboard() {
  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Dashboard
          </Typography>
          <SkillList />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard;
