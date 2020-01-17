import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ResumeView from '../components/Resume/Resume';

function Resume({ skills }) {
  return <ResumeView skills={skills} />;
}

const mapStateToProps = state => {
  return {
    // skills: state.skills
    skills: state.firestore.ordered.skills
  };
};
// export default connect(mapStateToProps, {})(Resume);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['skills'])
)(Resume);
