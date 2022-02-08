import * as c from '../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPortfolio = (portfolio) => {
  const { project, skill, bio, id  } = portfolio;
  return {
    type: c.ADD_PORTFOLIO,
    project: project,
    skill: skill,
    bio: bio,
    id: id,
  }
}