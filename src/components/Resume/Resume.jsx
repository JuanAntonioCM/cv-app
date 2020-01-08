import React from 'react';
import './Resume.scss';
import SkillsView from '../Skills/Skills';

function Resume (props) {
  const skillsData = props.skills;

  return (
    <section className="Resume">
      <div className="Resume__lateral"></div>
      <div className="Resume__content">
        <SkillsView data={skillsData}/>
      </div>
    </section>
  );
}

export default Resume;