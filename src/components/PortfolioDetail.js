import React from 'react';
import PropTypes from 'prop-types';

function PortfolioDetail(props) {
  const { portfolio } = props;

  return (
    <React.Fragment>
      <h1>Portfolio Detail</h1>
      <h3>{portfolio.project}</h3>
      <h3>{portfolio.skill}</h3>
      <h3>{portfolio.bio}</h3>
      <button onClick={ props.onClickingEdit }>Update Portfolio</button>
    </React.Fragment>
  );
}

PortfolioDetail.propTypes = {
  portfolio: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default PortfolioDetail;
