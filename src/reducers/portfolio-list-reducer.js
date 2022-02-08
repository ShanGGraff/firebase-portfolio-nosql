import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { project, skill, bio, id } = action; // destructuring
  switch (action.type) {
  case c.ADD_PORTFOLIO:
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