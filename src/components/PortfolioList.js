import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Portfolio';

function PortfolioList(props) {
  return ( 
  <React.Fragment>
    {Object.values(props.portfolioList).map((portfolio) =>
    <Portfolio 
    whenPortfolioClicked = {props.onPortfolioSelection}
    project = {portfolio.project}
    skill = {portfolio.skill}
    bio = {portfolio.bio}
    id = {portfolio.id}
    key = {portfolio.id} />
    )};
  </React.Fragment>
  );
}

PortfolioList.propTypes = {
  portfolioList : PropTypes.object,
  onPortfolioSelection : PropTypes.func
}
export default PortfolioList;
