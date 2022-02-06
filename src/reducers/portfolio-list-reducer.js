export default (state = {}, action) => {
  const { project, skill, bio, id } = action; // destructuring
  switch (action.type) {
  case 'ADD_Portfolio':
    return Object.assign({}, state, {
      [id]: {
        project: project,
        skill: skill,
        bio: bio,
        id: id
      }
    });
  default:
    return state;
  }
};