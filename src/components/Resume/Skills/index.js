// Componente presentacional
import React from 'react';

const Skills = ({ skills }) => {
  const skillsData = skills;
  return (
    <section className="skills">
      <div className="skills__content">
        <h2 className="skills__title uppercase text-red-600 text-lg mb-4 border-b border-red-600 border-dashed">
          Perfil técnico
        </h2>
        <ul className="skills__list list-disc list-inside">
          {skillsData &&
            skillsData.map(skill => (
              <li className="skills__item p-1" key={skill.id}>
                <span>{skill.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
