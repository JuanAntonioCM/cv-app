// Estado inicial
const initState = {
  skills: [
    {
      id: 1,
      name: 'HTML 5 - Jade',
      level: 'basic'
    },
    {
      id: 2,
      name: 'CSS 3 - Sass - Stylus',
      level: 'advanced'
    },
    {
      id: 3,
      name: 'React JS',
      level: 'intermediate'
    }
  ],
  experience: [],
  education: []
};

const skillsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_SKILL':
      console.log('CREATE_SKILL', action.skill);
      return {
        ...state,
        createSkill: true
      };

    case 'CREATE_SKILL_ERROR':
      console.log('CREATE_SKILL_ERROR', action.error);
      return state;

    case 'DELETE_SKILL':
      console.log('DELETE_SKILL', action.documentID);
      return state;

    case 'DELETE_SKILL_ERROR':
      console.log('DELETE_SKILL_ERROR', action.error);
      return state;

    default:
      return state;
  }
};
export default skillsReducer;
