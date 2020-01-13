import React from 'react'

function SkillDetails() {
  return (
    <div className="skill-details p-4">
      <header className="skill-details__header mb-4">
        <h1 className="text-lg uppercase underline">Detalle de habilidad</h1>
      </header>
      <div className="skill-details__list">
        <div className="skill-details__item">
          <div className="skill-details__name mb-2">HTML5 - Jade</div> 
          <div className="skill-details__level flex mb-2">
            <span className="pr-3">Basic</span>
            <span className="pr-3">Intermediate</span>
            <span className="pr-3">Advanced</span>
          </div>
          <div className="skill-details__date text-gray-500">
            <span>Fecha de actualización: </span>
            <span>2 de diciembre del 2019</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillDetails;
