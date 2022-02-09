import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditPortfolioForm (props) {
  const firestore = useFirestore();
  const { portfolio } = props;

  function handleEditPortfolioFormSubmission(event) {
    event.preventDefault();
    props.onEditPortfolio();
    const propertiesToUpdate = {
      project: event.target.project.value,
      skill: event.target.skill.value,
      bio: event.target.bio.value
    }
    return firestore.update({collection: 'portfolios', doc: portfolio.id }, propertiesToUpdate)
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
