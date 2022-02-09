import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Portfolio';
import {useSelector} from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

function PortfolioList(props) {
  useFirestoreConnect([
    { collection: 'portfolios'}
  ]);
  const portfolios = useSelector(state => state.firestore.oredered.portfolios);
  if(isLoaded(portfolios)){   
    return ( 
  <React.Fragment>
    {portfolios.map((portfolio) => {
    return <Portfolio 
    whenPortfolioClicked = {props.onPortfolioSelection}
    project = {portfolio.project}
    skill = {portfolio.skill}
    bio = {portfolio.bio}
    id = {portfolio.id}
    key = {portfolio.id} />
  })};
  </React.Fragment>
  );
  } else {
    return( 
      <React.Fragment>
        <h3> ... Loading </h3> 
      </React.Fragment>
    )
  }
} 

PortfolioList.propTypes = {
  // portfolioList: PropTypes.object,
  onPortfolioSelection: PropTypes.func
}

export default PortfolioList;
