import React from 'react';
import { connect } from 'react-redux';
import ResumeView from '../components/Resume/Resume';
function Resume ({skills}) {
  return (
    <ResumeView skills={skills}/>
  )
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}
export default connect(mapStateToProps, {})(Resume);

