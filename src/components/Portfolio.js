import React from 'react';
import PropTypes from 'prop-types';

function Portfolio(props) {
  return <React.Fragment>
    <div onClick = {() => props.whenPortfolioClicked(props.id)}></div>
    <h3> {props.project}</h3>
    <p>{props.skill}</p>
    <p>{props.bio}</p>
  </React.Fragment>;
}

Portfolio.propTypes = {
  project: PropTypes.string,
  skill: PropTypes.string,
  bio: PropTypes.string,
  id: PropTypes.string,
  whenPortfolioClicked: PropTypes.func
};

export default Portfolio;
