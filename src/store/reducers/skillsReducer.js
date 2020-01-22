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
      console.log('create skill', action.skill);
      return {
        ...state,
        createSkill: true
      };

    case 'CREATE_SKILL_ERROR':
      console.log('create skill error', action.error);
      return state;
    default:
      return state;
  }
};
export default skillsReducer;
