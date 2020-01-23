// Fuente de información para el Store, envía datos desde la aplicación al store
// El dispatcher cumple la función de mediador entre las acciones y el store
const createSkillAction = skill => {
  // Ejemplo síncrono
  /* return {
    type: 'ADD_SKILL',
    skill
  }; */

  // Modo asíncrono usando thunk, se retorna una función
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // llamada asíncrona a la base de datos
    const firestore = getFirestore();
    return firestore
      .collection('skills')
      .add(skill)
      .then(firestoreResponse => {
        dispatch({ type: 'CREATE_SKILL', skill });
        return { skill, firestoreResponse };
      })
      .catch(error => {
        dispatch({ type: 'CREATE_SKILL_ERROR', error });
        return error;
      });
  };
};

const deleteSkillAction = documentID => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('skills')
      .doc(documentID)
      .delete()
      .then(firestoreResponse => {
        dispatch({ type: 'DELETE_SKILL', documentID });
        return { documentID, firestoreResponse };
      })
      .catch(error => {
        dispatch({ type: 'DELETE_SKILL_ERROR', error });
        return error;
      });
  };
};

export { createSkillAction, deleteSkillAction };
