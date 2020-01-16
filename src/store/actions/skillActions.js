// Fuente de información para el Store, envía datos desde la aplicación al store
// El dispatcher cumple la función de mediador entre las acciones y el store
const createSkill = skill => {
  // Ejemplo síncrono
  /* return {
    type: 'ADD_SKILL',
    skill
  }; */

  // Modo asíncrono usando thunk, se retorna una función
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // llamada asíncrona a la base de datos
    const firestore = getFirestore();
    firestore
      .collection('skills')
      .add(skill)
      .then(() => {
        dispatch({ type: 'CREATE_SKILL', skill });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_SKILL_ERROR', error });
      });
  };
};

export { createSkill };
