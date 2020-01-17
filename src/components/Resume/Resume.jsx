import React from 'react';
import './Resume.scss';
import SkillsView from '../Skills/Skills';

function Resume({ skills }) {
  const skillsData = skills;
  return (
    <section className="Resume">
      <div className="Resume__lateral">
        <div className="py-4 text-white text-xl text-center">Juan Cahuana</div>
        <div className="py-2 text-white text-base text-center">
          FrontEnd Developer
        </div>
      </div>
      <div className="Resume__content">
        <SkillsView skills={skillsData} />
      </div>
    </section>
  );
}

export default Resume;
