import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input 
          type = 'text'
          name = 'project'
          placeholder = 'project'/>
          <input
          type = 'text'
          name = 'skill'
          placeholder = 'skill'/>
          <input
          type = 'text'
          name = 'bio'
          placeholder='bio' />
          <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes ={
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;