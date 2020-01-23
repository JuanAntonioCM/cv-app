import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PersonalData from './PersonalData/PersonalData';
import Skills from './Skills/Skills';

function Resume({ skills }) {
  return (
    <main className="main flex flex-wrap max-w-5xl mx-auto">
      <div className="w-full md:w-1/3 px-5 py-8 bg-blue-800 ">
        <PersonalData />
      </div>
      <div className="w-full md:w-2/3 px-5 py-8">
        <Skills skills={skills} />
      </div>
    </main>
  );
}

const mapStateToProps = state => {
  return {
    skills: state.firestore.ordered.skills
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['skills'])
)(Resume);
