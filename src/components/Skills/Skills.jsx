// Componente presentacional
import React from 'react';

import './Skills.scss';
const Skill = (props) => {
  const skills = props.data;
  return (
    <section className="skills">
      <div className="skills__content">
        <h2 className="skills__title uppercase text-base mb-4">Perfil técnico</h2>
        {/* <button type="button" className="bg-indigo-900 font-bold rounded p-2 text-sm">Presionar</button> */}
        <ul className="skills__list list-disc list-inside">
          {
            // Recorre los skills y los muestra en el DOM
            skills.map(skill => (
              <li className="skills__item" key={skill.id}>
                <span>{skill.name}</span>
              </li>
            ))
          }
        </ul>
      </div>

    </section>
  );
};

export default Skill;