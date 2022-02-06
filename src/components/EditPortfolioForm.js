import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPortfolioForm (props) {
  const { portfolio } = props;

  function handleEditPortfolioFormSubmission(event) {
    event.preventDefault();
    props.onEditPortfolio({project: event.target.project.value, skill: event.target.skill.value, bio: event.target.bio.value, id: portfolio.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPortfolioFormSubmission}
        buttonText="Update Portfolio" />
    </React.Fragment>
  );
}

EditPortfolioForm.propTypes = {
  onEditPortfolio: PropTypes.func
};

export default EditPortfolioForm;
