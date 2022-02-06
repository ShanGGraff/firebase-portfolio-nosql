import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewPortfolioForm (props) {
  function handleNewPortfolioFormSubmission(event) {
    event.preventDefault();
    props.onNewPortfolioCreation({project: event.target.project.value, skill: event.target.skill.value, bio: event.target.bio.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPortfolioFormSubmission}
        buttonText="Portfolio" />
    </React.Fragment>
  );
}

NewPortfolioForm.propTypes = {
  onNewPortfolioCreation: PropTypes.func
};

export default NewPortfolioForm;